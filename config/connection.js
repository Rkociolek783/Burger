var orm = require("./config/orm.js");
var mysql = require("mysql");

// MySQL DB Connection Information (remember to change this with our specific credentials) //
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

// Initiate MySQL Connection //
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
connection.end();
});

module.exports = connection;