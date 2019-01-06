// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var server = require('../server');
// var should = chai.should();

// chai.use(chaiHttp);
// describe('/POST SingIn', () => {
//   it('it should POST SingIn request return status code equal 200', (done) => {
//     // Test data.
//     let UserInfo = {
//       email: "zaidradad584@gmail.com",
//       password: "password123458"
//     }
//     chai.request(server)
//       .post('/sign-in')
//       .send(UserInfo)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });


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

// describe('GET LogOut', () => {
//   it('it should GET Logout', (done) => {
//     chai.request(server)
//     .get('/log-out')
//     .end((err,res) => {
//       res.body.should.be.a('object');
//       done();
//     });
//   });
// });
//  // test used to get data for user using id
// describe('GET Profile', () => {
//   it('it should Get information for user', (done) => {
//     chai.request(server)
//     .get('/profile')
//     .end((err,res) => {
//   res.body.should.be.a('object');
//   done();
//     });
//   });
// });
// //this test used to update data for user using id
// describe('PUT Profile', () => {
//   it('it should Update information for the user', (done) => {
//     chai.request(server)
//     .put('/profile')
//     .end((err,res) => {
//       res.body.should.be.a('object')
//       done();
//     });
//   });
// });