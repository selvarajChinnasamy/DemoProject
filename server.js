const express = require('express');
const app = express();
var mysql= require('mysql');
var http = require("http");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('access-Control-Allow-Origin', '*');
  next();
  });


app.post('/checkpost', (req, res) => {

  var name=req.body.name;
  console.log(name);
  var store ='[';
  var mysql = require('mysql');
  var connection = mysql.createConnection({
      host:'localhost',
      user:'root',
      pass:'',
      database:'bookapp'
  });
  
  connection.connect();
  connection.query("SELECT `bookname`, `bookauthor`, `date` FROM `books` WHERE 1", function (err, emp_rows, fields) {
    if (err) throw err;
      var len=emp_rows.length;
      console.log(len);
      if(len!=0)
      {
        for(i=0;i<len;i++)
            {       
          store = store + JSON.stringify({bookname:emp_rows[i].bookname, bookauthor:emp_rows[i].bookauthor,date:emp_rows[i].date});
            if(i!=len-1)
                {
            store=store+',';
                }
            }
            store=store+']';
          console.log(store);
            res.setHeader("Content-Type", "text/json");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(store)
        }
  });
  
  connection.end();

});


const PORT = 9000;

 app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
  });