var mysql = require('mysql');



var connection = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "12345678",
     database: "qline"
});


connection.connect(function(err) {
 if (err) {
   console.log('access denied to the database')
 } else {
   console.log('database has been connected')
 }
});

var queryUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  firstname text NOT NULL ,
  lastname text NOT NULL ,
  email text NOT NULL ,
  phone text NOT NULL,
  username text NOT NULL,
  password text Not Null,
  PRIMARY KEY (id)
);`

connection.query(queryUsersTable, function(err, result) {
  if (result) {
    console.log('users table has been created');
  } else {
    console.log('users table return an ERROR');
  }
})



module.exports.connection = connection;