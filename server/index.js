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

  var user = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password,
    "organization": req.body.organization,
    "phoneNumber": req.body.phoneNumber,
    "primum": req.body.primum
  }

  db.isacountExest(req.body.email, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.length !== 0) {
        res.send({
          status: 404,
          success: "userExist",
        });

      } else {
        db.insertNewUser(user, function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log("new user id ", result.insertId)

            req.login(result.insertId, function (err) {
              console.log("zaiiiiiiiiid", user)
              user.id = result.insertId
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


passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
// read from the session
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});

//Used to restrict access to particular pages in combination with Passport.js
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