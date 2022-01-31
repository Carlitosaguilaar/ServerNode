var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectophp",
    port: "81"
  });

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
});

let sql = "SELECT * from usuarios where ID_Usuario = 1";
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));
  });