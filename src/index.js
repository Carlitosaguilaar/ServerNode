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
var server = app.listen(3000,function(err,re) {});


//Mostar lista de usuarios
app.get('/lista',function(req,res){

    const sql = "SELECT * from usuarios";

    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});

//Mostar información de un usuario, filtrando por su ID
app.get('/usuarios',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from usuarios where ID_Usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Lista de vehículos filtrando por ID de usuario

app.get('/vehiculo_usuario',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from vehiculos where Id_usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

//Información de un vehículo filtrando por el ID del vehículo

app.get('/vehiculo_id',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from vehiculos where ID_Vehiculo = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});


//Lista de servicios filtrando por un ID de vehículo

app.get('/servicios_vehiculo',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from servicios where ID_vehiculo = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

//Información de un servicio filtrando por el ID del servicio

app.get('/descripcion_servicio',function(req,res){

  const id = req.query.id_servicio;
  const sql = "SELECT descripcion from servicios where ID_Servicio = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});


