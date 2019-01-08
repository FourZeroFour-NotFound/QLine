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
  phoneNumber: "0789456123",
  password: "helloworld",
}

var queue = {
  nameOfQueeu: "Arabic Bank",
  start_time: "07:30:00",
  end_time: "20:00:00",
  date: "2019-01-03",
  timeforone: "5",
  windows: "2",
  imgUrl: "",
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

describe('Database ', function () {

  it('should take less than 10000ms', function(done){
    this.timeout(70000);
    setTimeout(done, 500);
  });

  it('should insert new user to the user table', function (done) {
    db.insertNewUser(user, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should serach for the queue by the organization name', function (done) {
    db.search('RBK', function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should get all the queue that made by one user', function (done) {
    db.getAllQueueForUser(2, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should get all users in one queue', function (done) {
    db.getUsersInQueue(1, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should be able to chick if the user exest useing his email', function (done) {
    db.isacountExest('radwan@example.com', function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should get data for user using id', function (done) {
    db.getUserData(3, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should be able to update data for user using id', function (done) {
    db.UPDATE(user, 3, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });

  it('should take less than 10000ms', function(done){
    this.timeout(10000);
    setTimeout(done, 500);
  });

  it('should insert new queue to the queue table', function (done) {
    db.insertNewQueue(queue, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.not.be.null;
        done();
      }
    });
  });
  
})
