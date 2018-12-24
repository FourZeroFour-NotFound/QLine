const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')
const session = require('express-session');
const passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();
const app = express();
app.use(express.static(__dirname + '/../client/public'));
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




//creat table sessions in data bsee 
var sessionStore = new MySQLStore({
  host: "localhost",
  user: "root",
  password: "password",
  database: "qline"
})



app.use(session({
  secret: 'zaiiiiidiiidiii',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// git function to bring all the queuefor one user using his id 
//dose not take any thing just the user id from his req
app.get('/all_queue',function(req,res){
  db.getAllQueueForUser(req.user , function(err,result){
    if (err){
      console.log("server error giting data " , err)
    }else{
      res.send({
        status: 200,
        success: "data found sucssfuly",
        data : result
      });
    }
    
  })
})






/////////////////////////////////////////////////////////////////////////////////
//function to add queue to data base 
// {
//   "nameOfQueeu" :"zaid",
//   "start_time":  "23:59:59" ,
//   "end_time":  "23:59:59"  ,
//   "date" : "1999-01-01",
//   "timeforone": "10 m ",
//   "windows" : "5",
//   "imgUrl" : "html//:" ,
//   "take_premum" : "0",
//   "accept_join": "1",
//   "requierment" :"fdfdfsdfsdfsd"
 
// }
app.post('/add-queue', function (req, res) {
  console.log(req.user)
  console.log(req.body)
  var queue = {
    nameOfQueeu: req.body.nameOfQueeu,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    date: req.body.date,
    timeforone: req.body.date,
    windows: req.body.windows,
    imgUrl: req.body.imgUrl,
    take_premum: req.body.take_premum,
    accept_join: req.body.accept_join,
    requierment: req.body.requierment,
    creator_id: req.user,
  }

  db.insertNewQueue(queue, function (err, result) {
    if (err) {
      console.log("server ", err)
    } else {
      console.log("server queue add ")
      res.send({
        success: "queue added sucssfuly"
      })
    }
  })
})
 //////////////////////////////////////////////////////////////////////////////////////
//post requst to add new user 
//req.budy shoud look like this :
//{
//   firstName :"zaid",
//   lastName:"raddad",
//   email: "zaid@gmail.com",
//   password:"zaid",
//   organization:"zaiiis",
//   phoneNumber:"0799795083",
//   primum:0
// }
app.post('/sign-up', function (req, res) {
  // orderthe data in the same way it sabous to be 
  var user = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password,
    "organization": req.body.organization,
    "phoneNumber": req.body.phoneNumber,
    "primum": req.body.primum
  }
  //chick if the acout is already exist befor add him if its exist alredy redirict him to sign in page 
  db.isacountExest(req.body.email, function (err, result) {
    if (err) {
      console.log("server ", err)
    } else {
      if (result.length !== 0) {
        res.send({
          status: 404,
          success: "userExist",
        });

      } else { //if its new user add him to the user table 
        db.insertNewUser(user, function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log("server new user id ", result.insertId)
            //creat session for him using login 
            req.login(result.insertId, function (err) {
              console.log("server user data after creat and log in ", user)

              user.id = result.insertId // add the id to the object user and send it to the front end //this way is esyer to know the user id 
              res.send({
                status: 200,
                success: "Successed !",
                data: user
              });
            });
          }
        })
      }
    }
  })
})

////////////////////////////////////////////////////////////////
//post function to sign in 

//req.body = {
//   email:"zaid@gmail.com",
//   password : "zaid"
// }
app.post('/sign-in', function (req, res) {
  console.log(req.body)
  db.isacountExest(req.body.email, function (err, result) {
    if (err) {
      console.log("server ", err)
    } else {
      if (result.length == 0) {
        res.send({
          status: 404,
          success: "email is wrong",
        });
      } else {
        if (req.body.password == result[0].password) {
          //if the password corect creat session 
          req.login(result[0].user_id, function (err) {
            console.log("server user data after creat and log in ", result[0])


            res.send({
              status: 200,
              success: "Successed !",
              data: result[0]
            });
          });
        } else {
          res.send({
            status: 404,
            success: "password not corect",
            data: result[0].password
          });
        }

      }
    }
  })


})

// log out function // will 
app.get('/log-out', function (req, res) {
  //console.log("zaiiiiid",req.user)
  //console.log(req.isAuthenticated());
  var x = req.user
  req.logOut()
  res.send({
    success: `user ${x} is log out `
  })
})




//stor data in session data base  using id and it will be saved in cookies 
passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
// read from the session
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});

//use this function to control acsses to some get reqest and post requst 
function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.send({
      status: 404,
      success: "redirectTologin"
    });
  }
}




app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;