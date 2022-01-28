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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var server = app.listen(3000,function(err,re) {});


//Mostar lista de usuarios        ***FUNCIONA***
app.get('/lista',function(req,res){

    const sql = "SELECT * from usuarios";

    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});

//Mostar información de un usuario, filtrando por su ID        ***FUNCIONA***
app.get('/usuarios',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from usuarios where ID_Usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Lista de vehículos filtrando por ID de usuario        ***FUNCIONA***

app.get('/vehiculo_usuario',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from vehiculos where Id_usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

//Información de un vehículo filtrando por el ID del vehículo        ***FUNCIONA***

app.get('/vehiculo_id',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from vehiculos where ID_Vehiculo = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});


//Lista de servicios filtrando por un ID de vehículo        ***FUNCIONA***

app.get('/servicios_vehiculo',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from servicios where ID_vehiculo = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

//Información de un servicio filtrando por el ID del servicio     ***FUNCIONA***

app.get('/descripcion_servicio',function(req,res){

  const id = req.query.id_servicio;
  const sql = "SELECT descripcion from servicios where ID_Servicio = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});


// Modificar datos de un usuario      ***FUNCIONA***

app.post('/modificar_usuario',function(req,res){

  const id = req.body.id_usuario;
  const contra = req.body.contraseña;
  const nombre = req.body.nombre;
  const telefono = req.body.telefono;
  const email = req.body.email;
  
  const sql = "UPDATE usuarios SET contraseña = '"+contra+"', nombre = '"+nombre+"', telefono ="+telefono+" , email ='"+email+"' where ID_Usuario= "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log ("Se ha realizado el cambio.")
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});


// Crear un nuevo usuario   ***FUNCIONA***

app.post('/crear_usuario', function (req,res) {

  const nombre = req.body.nombre;
  const contra = req.body.contraseña;
  const telefono = req.body.telefono;
  const email = req.body.email;

  const sql = "insert into usuarios (Contraseña, Nombre, Telefono, Email ) values ('"+contra+"' ,'"+nombre+"' ,'"+telefono+"' ,'"+email+"')";

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log ("Se ha creado un nuevo usuario.")
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });

});


// Eliminar un usuario        ***FUNCIONA***

app.post('/eliminar_usuario', function (req,res) {

  const id = req.body.id_usuario;

  const sql = "delete from usuarios where ID_Usuario = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log ("Se ha eliminado el usuario.");
    console.log ("Result: "+JSON.stringify(result,null,2));
    
    res.json(result);
  });

});

// Modificar un vehículo    ***FUNCIONA***

app.post('/modificar_vehiculo',function(req,res){

  const id = req.body.id_vehiculo;
  const matricula = req.body.matricula;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const año_fabricacion = req.body.año_fabricacion;
  
  const sql = "UPDATE vehiculos SET matricula = '"+matricula+"', marca = '"+marca+"', modelo ='"+modelo+"' , año_fabricacion ='"+año_fabricacion+"' where ID_Vehiculo= "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log ("Se ha realizado el cambio.")
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

// Crear un nuevo vehículo                                  ***No funciona, falta arreglar un par de cosas***

app.post('/crear_vehiculo', function (req,res) {      

  const matricula = req.body.matricula;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const año_fabricacion = req.body.año_fabricacion;

  const sql = "insert into usuarios (matricula, marca, modelo, año_fabricacion ) values ('"+matricula+"' ,'"+marca+"' ,'"+modelo+"' ,'"+año_fabricacion+"')";

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log ("Se ha creado un nuevo vehiculo.")
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });

});

// Eliminar un vehículo       ***Funciona***

app.post('/eliminar_vehiculo', function (req,res) {

  const id = req.query.id_vehiculo;

  const sql = "delete from vehiculos where ID_Vehiculo = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log ("Se ha eliminado el vehiculo.");
    console.log ("Result: "+JSON.stringify(result,null,2));
    
    res.json(result);
  });

});

// Modificar un servicio

app.post('/modificar_servicio',function(req,res){

  const id = req.body.id_servicio;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const tipo_servicio = req.body.tipo_servicio;
  const descripcion = req.body.descripcion;
  const fecha = req.body.fecha;
  
  const sql = "UPDATE servicios SET nombre = '"+nombre+"', precio = '"+precio+"', tipo_servicio ='"+tipo_servicio+"' , descripcion ='"+descripcion+"' , fecha ='"+fecha+"' where ID_servicio= "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log ("Se ha realizado el cambio.")
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

// Crear un nuevo servicio



// Eliminar un servicio         ***FUNCIONA***

app.post('/eliminar_servicio', function (req,res) {

  const id = req.query.id_servicio;

  const sql = "delete from servicios where ID_Servicio = "+id;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log ("Se ha eliminado el servicio.");
    console.log ("Result: "+JSON.stringify(result,null,2));
    
    res.json(result);
  });

});

// Información de un usuario y su lista de vehículos en la misma llamada filtrando por ID de usuario      ***FUNCIONA***

app.get('/usuariovehiculos',function(req,res){

  const id = req.query.id_usuario;
  const sql = "select u.*, v.* from usuarios u join vehiculos v on u.ID_Usuario=v.id_usuario where u.ID_Usuario=" + id;

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

// Información de un vehículo y su lista de servicios en la misma llamada filtrando por ID de usuario ***FUNCIONA***

app.get ('/vehiculosservicios', function (req, res) {

  const id = req.query.id_usuario;
  const sql = "select v.*, s.* from vehiculos v join servicios s on v.ID_Vehiculo=s.ID_vehiculo where v.Id_usuario=" + id;

  con.query(sql, function (err, result) {
  if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});