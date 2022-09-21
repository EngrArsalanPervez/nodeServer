require("dotenv").config()
//require("./database")

const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3000
//var mysql = require('mysql');
app.use(bodyParser.json());


console.log("Server is starting!!") 

//Listen at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
//Middleware for authentication
function authenticate(req,res,next){
  let token = req.headers['authorization'];
   token = token.split(" ")[1];

  jwt.verify(token, "access" ,(err, user )=> {

  if(!err){
    req.Username= user;
    next();
  }
  else{
  return res.status(403).json({message: "User not authenticated"});
  }
});
}

//Protected route can only be viewed when token is enetered
app.post('/protected', authenticate, (req,res ) => {
res.send("You can view this protected route!!")
});

// Checks user and generates a token
app.post("/login" , async (req, res) => {

    const {Username} = req.body;
    if(!Username) {
      res.status(400).send("Inputs missing");
    }
 let Token = jwt.sign(Username, "access" , {expiresIn: "2h"});

 return res.status(201).json({
  Token,
  Username
 });

});




