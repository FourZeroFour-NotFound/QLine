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
app.use(bodyParser.urlencoded({ extended: true }));



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




app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;