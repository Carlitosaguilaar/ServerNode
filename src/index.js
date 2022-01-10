var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "proyectophp",
  password: "",
  port:"3306"
});

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
});


var express = require('express');
var app = express();

//Mostar lista de usuarios
app.get('/usuarios',function(req,res){

    const sql = "SELECT * from usuarios";

    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});

//Mostar información de un usuario, filtrando por su ID
app.get('/usuario',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from usuarios where ID_Usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

var server = app.listen(3000,function(err,re) {});