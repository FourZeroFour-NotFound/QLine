const db = require('../database/index.js');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var user = {
  firstName: "Zaied",
  lastName: "Radad",
  email: "zaied@example.com",
  password: "123456789",
  organization: "RBK",
  phoneNumber: "c",
  password: "helloworld",
}

var queue = {
  nameOfQueeu: "Arabic Bank",
  start_time: "07:30:00",
  end_time: "20:00:00",
  date: db.formatDate(),
  timeforone: "5",
  windows: "2",
  imgUrl: "https://i.imgur.com/KXBhaNv.jpg",
  take_premum: "0",
  accept_join: "1",
  requierment: "your ID just",
  creator_id: 2 
}

var customer = {
  name: "Radwan",
  email: "radwan@example.com",
  phoneNumber: "0789456123",
  comments:"I have problem to join this queue"
}

var waitingList = {
  user_id: 2,
  queue_id: 1,
  onwindow: "3",
  notes: "I want to renew my passport"
} 


