var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);
describe('/POST SingIn', () => {
  it('it should POST SingIn request return status code equal 200', (done) => {
    // Test data.
    let UserInfo = {
      email: "zaidradad584@gmail.com",
      password: "password123458"
    }
    chai.request(server)
      .post('/sign-in')
      .send(UserInfo)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

it('should take less than 10000ms', function(done){
  this.timeout(10000);
  setTimeout(done, 3000);
});

// describe('/POST SingUp', () => {
//   it('it should POST SingUp responce return status code equal 200 and the success object', (done) => {
//     // Test data.
//     let UserInfo = {
//       firstName:"Radwan" ,
//       lastName: "Abdo",
//       email: "radwanabdo895@gmail.com",
//       password: "password1989",
//       organization: "Capital Bank",
//       phoneNumber: "0793587986",
//     }
//     chai.request(server)
//       .post('/sign-up')
//       .send(UserInfo)
//       .end((err, res) => {

//         res.body.should.have.status(200);

//         res.body.should.be.a('object');
//         res.body.data.should.have.property('firstName');
//         res.body.data.should.have.property('lastName');
//         res.body.data.should.have.property('email');
//         res.body.data.should.have.property('organization');
//         res.body.data.should.have.property('phoneNumber');
//         done();
//       });
//   });
// });






describe('GET LogOut', () => {
  it('it should GET Logout', (done) => {
    chai.request(server)
    .get('/log-out')
    .end((err,res) => {
      res.body.should.be.a('object');
      done();
    });
  });
});
 // test used to get data for user using id
describe('GET Profile_info', () => {
  it('it should Get  all information of the  user ', (done) => {
    chai.request(server)
    .get('/profile_info')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});
//this test used to update data for user using id
describe('PUT Profile_info', () => {
  it('it should Update information for the user', (done) => {
    chai.request(server)
    .put('/profile_info')
    .end((err,res) => {
      res.body.should.be.a('object')
      done();
    });
  });
});


 // test used to get all tickets  for user using id
 describe('GET ticket', () => {
  it('it should Get all tickets for user', (done) => {
    chai.request(server)
    .get('/ticket')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});

// test used to delete specific ticket  for user using queue_id
describe('DELETE confirm/:queue_id', () => {
  it('it should delete specific ticket for user', (done) => {
    chai.request(server)
    .get('/confirm/:queue_id')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});


// // test used to get all the information for the queue using queue_id
// describe('POST getQueueInfo', () => {
//   it('it should get all the information for the queue that its id is sended , return status code equal 200', (done) =>{
//     chai.request(server)
//     .post('/getQueueInfo')
//     .end((err,res)=>{
//       res.should.have.status(200);
//       res.body.should.be.a('object');
//       done();
//     });
//   });
// }) ;

// test used to get all the users inside specific queue
describe('POST get-users-in-queue',() => {
  it('it should get how many users inside specific queue that its id is sended', (done) => {
    chai.request(server)
    .post('/get-users-in-queue')
    .end((err,res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
})

// test used to insert user in specific queue sending the queue_id and notes

// describe('/POST add-userto-queue', () => {
//   it('it should POST add-userto-queue add and the success object', (done) => {
//     // Test data.
//     let UserInfo = {
//       // user_id:"1",
//       queue_id:"8",
//       // onwindow:"2",
//       notes:"after delay" ,
     
//     }
//     chai.request(server)
//       .post('/add-userto-queue')
//       .send(UserInfo)
//       .end((err, res) => {
//         res.body.should.be.a('object');
//         // res.body.data.should.have.property('user_id');
//         res.body.data.should.have.property('queue_id');
//         // res.body.data.should.have.property('onwindow');
//         res.body.data.should.have.property('notes');
      
//         done();
//       });
//   });
// });

// test used to get all the information about the user email
// describe('/POST profile2', () => {
//   it('it should POST profile2 responce return all the information about the user using his email', (done) => {
//     // Test data.
//     let UserInfo = {
   
//      email:"zaid",
   
//     }
//     chai.request(server)
//       .post('/profile2')
//       .send(UserInfo)
//       .end((err, res) => {
//         res.body.should.be.a('object');
//         res.body.data.should.have.property('email');
//         done();
//       });
//   });
// });

// test used to send new queue information
// describe('/POST add-queue', () => {
//   it('it should POST add-queue responce return status code equal 200 and the success object', (done) => {
//     // Test data.
//     let queue = {
//       nameOfQueeu: "rbk",
//       start_time :"07:30:00",
//       end_time :"08:00:00",
//       date: "2019-01-03",
//       timeforone: "5",
//       windows: "2",
//       imgUrl: "",
//       take_premum: "0" ,
//       accept_join:"1" ,
//       requierment: "nothing",
//       creator_id: "2",
//     }
//     chai.request(server)
//       .post('/add-queue')
//       .send(queue)
//       .end((err, res) => {
//         res.body.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.data.should.have.property('nameOfQueeu');
//         res.body.data.should.have.property('start_time');
//         res.body.data.should.have.property('end_time');
//         res.body.data.should.have.property('date');
//         res.body.data.should.have.property('timeforone');
//         res.body.data.should.have.property('windows');
//         res.body.data.should.have.property('imgUrl');
//         res.body.data.should.have.property('take_premum');
//         res.body.data.should.have.property('accept_join');
//         res.body.data.should.have.property('requierment');
//         res.body.data.should.have.property('creator_id');
//         done();
//       });
//   });
// }); 

//test  to delet from waiting lest 

describe('POST deleteWaiting', () => {
  it('it should delete specific queue for waiting list', (done) => {
    chai.request(server)
    .get('/deleteWaiting')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});
// test to delete specific queue from queue
describe('POST deletequeue', () => {
  it('it should delete specific queue for queue table', (done) => {
    chai.request(server)
    .get('/deletequeue')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});

//this test used to update data in waiting list
describe('POST UPDATEtickt', () => {
  it('it should Update information for the waiting list', (done) => {
    chai.request(server)
    .put('/UPDATEtickt')
    .end((err,res) => {
      res.body.should.be.a('object')
      done();
    });
  });
});

//  this test to delete queue from user_queue using id

describe('POST deleteTickt', () => {
  it('it should delete specific queue form user_queue table', (done) => {
    chai.request(server)
    .get('/deleteTickt')
    .end((err,res) => {
  res.body.should.be.a('object');
  done();
    });
  });
});

// test to get all the users inside specific queue in waiting list
describe('GET get-users-in-waitingList', () => {
  it('it should get all the users in side specific queue in waiting list table', (done) => {
    chai.request(server)
    .get('/get-users-in-waitingList')
    .end((err,res) => {
  res.body.should.be.a('object');

  done();
    });
  });
});









