require("dotenv").config()  
const express = require('express');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


const bcrypt = require('bcrypt');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('yes'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


var con = mysql.createConnection({
    host: "localhost",
    user: "Haider",
    password: "Khan@123!",
    database: "Authentication"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

});

const auth = (req, res, next) => {

    const token = req.signedCookies['x-auth-token'];
    if (!token) return res.status(401).json({ msg: 'Authorization denied' });

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

//Protected route can only be viewed when token is enetered
app.post('/protected', auth, (req,res ) => {
    res.send("You can view this protected route!!")
    });

    // User Registers
app.post('/register', (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    try {
        if (!username) throw Error("Enter Username");
        if (!email) throw Error("Enter Email");
        if (!password) throw Error("Enter Password");
        // const checkEmail = await User.findOne({ email: email });
        con.query(`SELECT email FROM Validate WHERE email= '${email}'`, function (err, result, fields) {
            if (err) throw err;
            // console.log(result.length)
            //  console.log(Array.from(result)[0].Username); 
            if (result.length > 0) throw Error('Email already exists');


            con.query(`SELECT Username FROM Validate WHERE Username= '${username}'`, async function (err, result, fields) {
                if (err) throw err;
                // console.log(result.length)
                //  console.log(Array.from(result)[0].Username); 
                if (result.length > 0) throw Error('User already exists');
                if (password.length < 8) throw Error('Password should be atleast 8 char long');
                var salt = await bcrypt.genSalt(10);
                var passHash = await bcrypt.hash(password, salt);
                // const savedUser = await User.create({ username, email, password: passHash });
                let sql = `INSERT INTO Validate(Username, Password, email) VALUES ('${username}','${passHash}','${email}')`
                console.log(sql)

                con.query(sql, function (err, result, fields) {
                    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
                    if (!token) throw Error('Couldnt sign the token');

                    res.cookie('x-auth-token', token, {
                        maxAge: 1000 * 60 * 60,
                        httpOnly: true,
                        signed: true,
                        //secure:true,
                    })
                    res.status(200).json({ msg: 'Account created Succesfull', error: false });
                })

            })
        })
    } catch (e) {
        res.status(200).json({ msg: e.message, error: true });
    }

})

//User Login

app.post('/login',  (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    try {
        if (!email) throw Error("Enter Email");
        if (!password) throw Error("Enter Password");
        //var userInfo = await User.findOne({ email: email });
        con.query(`SELECT Username,Password, email FROM Validate WHERE email= '${email}'`, async function (err, result, fields) {
            if (err) throw err;
            if (result.length < 1) throw Error("Invalid Email");
            let userInfo = result[0]
            console.log(result[0])
            console.log(userInfo.Password)
            var success = await bcrypt.compare(password, userInfo.Password);
            if (!success) throw Error("Invalid Password");

            const token = jwt.sign({ username:userInfo.Username }, JWT_SECRET, { expiresIn: '1h' });
            if (!token) throw Error('Couldnt sign the token');

            res.cookie('x-auth-token', token, {
                maxAge: 1000 * 60 * 60,
                httpOnly: true,
                signed: true,
                //secure:true
            })
            res.status(200).send({ msg: 'Login successfully', error: false });
        })

    } catch (e) {
        res.status(200).send({ msg: e.message, error: true });
    }
})

app.post('/logout', auth, (req, res) => {
    res.clearCookie('x-auth-token');
    res.send({ text: 'Logout successfully' });
})

app.listen(3000, async () => {
    console.log('Server started...')
})





//   con.query("SELECT * FROM Validate", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });