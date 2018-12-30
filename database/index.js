var mysql = require('mysql');



var connection = mysql.createConnection({
  host: "db4free.net",
  user: "qlinedbdb",
  password: "qlinedbdb",
  database: "qlinedbdb"
 });



connection.connect(function (err) {
  if (err) {
    console.log("data base  Error", err)
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

const search = function (org, callback) {
   const sql = `select queue.*, user.organization from user inner join queue on user.user_id = queue.creator_id and user.organization = "${org}"`
   connection.query(sql, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

///////////////////////////////////////////////////

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
const insertNewUser = function (user, callback) {
  var sqlquery = `insert into user (firstName,lastName,email,password,organization,phoneNumber,primum) values("${user.firstName}","${user.lastName}","${user.email}","${user.password}","${user.organization}","${user.phoneNumber}","0")`
  connection.query(sqlquery, function (err, result) {
    if (err) {
      console.log("db error inserting in user table", err)
      callback(err, null)
    } else {
      console.log("db user added successfuly" , result ) 
      callback(null,result)
    }
  })
}


///////////////////////////////////////////////////

var queue = {
   nameOfQueeu :"zaid",
   start_time:  '23:59:59' ,
   end_time:  '23:59:59'  ,
   date : '1999-01-01',
   timeforone: "10 m ",
   windows : "5",
   imgUrl :"html//:" ,
   take_premum : 0,
   accept_join: 1,
   requierment :"fdfdfsdfsdfsd",
   creator_id : 1,
}
const insertNewQueue = function (queue, callback) {
  var sqlquery = `insert into queue (nameOfQueeu,start_time,end_time,date,timeforone,windows,imgUrl,take_premum,accept_join,requierment ,creator_id)
  values("${queue.nameOfQueeu}","${queue.start_time}","${queue.end_time}","${queue.date}","${queue.timeforone}","${queue.windows}",
  "${queue.imgUrl}","${queue.take_premum}","${queue.accept_join}","${queue.requierment}","${queue.creator_id}")`
  connection.query(sqlquery, function (err, result) {
    if (err) {
      console.log("db error inserting in queue table", err)
      callback(err, null)
    } else {
      console.log("db queue added successfuly" , result ) 
      callback(null,result)//result is the data for the queue we created now 
    }
  })
}
///////////////////////////////////////////////////
//function to get all the queue that made by one user
const getAllQueueForUser = function (user_id , callback){
  var sqlquery = `select * from queue where creator_id = ${user_id}`
  connection.query(sqlquery, function(err,result){
    if (err){
      console.log(`db error geting the queue form db user_id =${user_id}` , err)
      callback(err,null)
    }else{
      console.log(`db git all the queue for this user sucssfuly user_id=${user_id}` , result)
      callback(null,result)
    }
  })
}


///////////////////////////////////////////////////
// function to chick if the user exest useing his email if he exest send back his acount detalse else send back err
const isacountExest = function (email, callback) {
  var sqlquery = `select * from user where email = '${email}'`
  connection.query(sqlquery, function (err, result) {
    if (err) {
      console.log("db error to chick if user exist ", err)
      callback(err, null)
    } else {
      console.log("db i found it (user exist )", result)
      callback(null, result)
    }
  })
}

// this function used to get data for user using id
const getUserData = function (id, callback) {
  var sqlquery = `select * from user where user_id  = '${id}'`

  connection.query(sqlquery, function (err, result) {
    if (err) {
      console.log("db error to get data ", err)
      callback(err, null)
    } else {
      console.log("db i found it (user exist )", id)
      callback(null, result)
    }
  })
}

// this function is used to update data for user using id

const UPDATE = function (user,id, callback){
  var sqlquery = ` UPDATE  user  SET firstName='${user.firstName}',lastName='${user.lastName}',email='${user.email}',phoneNumber='${user.phoneNumber}'  where user_id ='${id}'`
  connection.query(sqlquery, function(err, result){
    if(err){
      console.log('db error', err)
      callback(err,null)
    }else{
      console.log( result.affectedRows ,"db update")
      callback(null,result)
    }
  })
}
// this function return all the queues for the given organization
// const search = function (id, callback) {
//   var sqlquery = `select * from queue where creator_id = '${}'`

//   connection.query(sqlquery, function (err, result) {
//     if (err) {
//       console.log("db error to get data ", err)
//       callback(err, null)
//     } else {
//       console.log("db i found it (user exist )", id)
//       callback(null, result)
//     }
//   })
// }


const saveMessageCustomer = (customer, callback) => {
  
  let message = `insert into customer (name,email,phoneNumber,comments) values("${customer.name}","${customer.email}","${customer.phoneNumber}","${customer.comments}")`

  connection.query(message, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  })
}

const getAllMessage = (callback) => {
  let all = `SELECT customer.name, customer.email, customer.phoneNumber, customer.comments from customer`

  connection.query(all, function(err, result){
    if (err) throw err;
     callback(null, result)
  });
}

module.exports.getAllMessage = getAllMessage;
module.exports.saveMessageCustomer = saveMessageCustomer;
module.exports.connection = connection;
module.exports.isacountExest = isacountExest;
module.exports.insertNewUser = insertNewUser;
module.exports.insertNewQueue = insertNewQueue;
module.exports.getAllQueueForUser = getAllQueueForUser;
module.exports.getUserData = getUserData;
module.exports.UPDATE = UPDATE;
module.exports.search = search;