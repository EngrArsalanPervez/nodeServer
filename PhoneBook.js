const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3000
var mysql = require('mysql');
app.use(bodyParser.json());


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
        res.send(result);
        console.log(result);  
      });
    
});

// Select By name
app.get('/name', (req, res) => {
  con.query("SELECT Name FROM Phonebook", function (err, result,fields) {
      if (err) throw err;
      res.send(result);
      console.log(result);  
    });
  
});
// Get all the fields in the database
app.get('/fields', (req, res) => {
  con.query("SELECT * FROM Phonebook", function (err, result, fields) {
      if (err) throw err;
      res.send(fields);
      console.log(fields);  
    });
  
});

// Select BY ID
app.get('/id', (req, res) => {
  con.query("SELECT * FROM Phonebook WHERE personID= ?",[333], function (err, result,fields) {
      if (err) throw err;
      res.send(result);
      console.log(result);  
    });
  
});

// Select By ID (Enter required ID in browser)
app.get('/:id', (req, res) => {
  con.query(`SELECT * FROM Phonebook WHERE personID = ${req.params.id}`, function (err, result,fields) {
      if (err) throw err;
      res.send(result);
      console.log(result);  
    });
  
});



