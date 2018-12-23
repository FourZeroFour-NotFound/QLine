var mysql = require('mysql');



var connection = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "password",
     database: "qline"
});



connection.connect(function(err) {
 if (err) {
   console.log("data base  Error",err)
 } else {
   console.log('database has been connected')
 }
});




// function to git al the data in one table 
const selectAll = function (tableName, callback) {
  connection.query(`SELECT * FROM ${tableName}`, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var user = {
  firstName :"zaid",
  lastName:"raddad",
  email: "zaid@gmail.com",
  password:"zaid",
  organization:"zaiiis",
  phoneNumber:"0799795083",
  primum:0
}

// function to add new user to the user table
//user should look like this 
// var user = {
//   firstName :"zaid",
//   lastName:"raddad",
//   email: "zaid@gmail.com",
//   password:"zaid",
//   organization:"zaiiis",
//   phoneNumber:"0799795083",
//   primum:0
// }
const insertNewUser = function (user ,callback){
  var sqlquery  = `insert into user (firstName,lastName,email,password,organization,phoneNumber,primum) 
  values("${user.firstName}","${user.lastName}","${user.email}","${user.password}","${user.organization}","${user.phoneNumber}","0")`
 connection.query(sqlquery , function(err,result){
   if (err){
     console.log("error inserting in user table" , err)
     callback(err,null)
   }else{
     console.log("user added successfuly")
   }
 })
}


// function to chick if the user exest useing his email if he exest send back his acount detalse else send back err
const isacountExest = function (email , callback){
  var sqlquery = `select * from user where email = '${email}'`
  connection.query(sqlquery , function(err,result){
    if (err){
      console.log("error to chick if user exist " ,err)
      callback(err,null)
    }else{
      console.log("i found it" , result)
      callback(null,result)
    }
  })
}












module.exports.connection = connection;