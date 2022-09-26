const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3000
var mysql = require('mysql');
app.use(bodyParser.json());

app.set('view engine' , 'ejs');
console.log("Server is starting!!") 

//Listen at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// Database Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "Haider", 
    password: "Khan@123!",
    database: "MyPhonebook"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  // Get all data of the database MyPhonebook
  app.get('/Phonebook', (req, res) => {
    con.query("SELECT * FROM Phonebook Where 1", function (err, result) {
        if (err) throw err;
      //  res.send(result);

      res.render('./tables',{
        result:result,
                });
        console.log(result);  
      });
    
});

