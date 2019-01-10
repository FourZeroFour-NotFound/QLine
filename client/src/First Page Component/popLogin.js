import React from 'react';
import '../style/App.css';
import $ from 'jquery';
import {Typography} from '@material-ui/core';
import {browserHistory} from 'react-router';


// Login component with authentication using passport in the back end of our website
// This component use validation as well as ajax request to send datas inside our server
// Main part like input all of informastion will be rendered inside the other files in order to use all the info
class PopLogIn extends React.Component {
  constructor(props) {
       super(props)
       this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        organizationName: "",
        errorPhone: "",
        errorPassword: "",
        errorEmail: "",
        validation: false
       }
  }

  handleChange(e) {
    let target = e.target;
    this.setState({ [target.name]: target.value });

    // validation for password
    if (this.state.password.length < 8) {
      this.setState({
        errorPassword: "The password should be more than 8 character!",
        validation: false
      });
    } else {
      this.setState({
        errorPassword: "",
        validation: true
      });
    }
  }

  handleChange1(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
    let email = this.state.email
    console.log(this.state[target.name],"working??");


    if (this.state.password.length < 8) {
      this.setState({
        errorPassword: "The password should be more than 8 characters",
        validation: false
      });
    } else {
      this.setState({
        errorPassword: "",
        validation: true
      });
    }

    if (this.state.email.length < 5) {
      this.setState({
        errorEmail: "The email should be more than 5 characters",
        validation: false
      });
    } else {
      this.setState({
        errorEmail: "",
        validation: true
      });
    }
  }


  handleOnClick() {
    this.toggleButtonNow();
    this.toggleButtonSpinNow();
    this.reset()

    if (this.state.validation) {
    $.ajax({
      url: '/sign-in',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: this.state.email,
        password : this.state.password
      }),
      
      success: (res) => {
        console.log("Welcome, Nice to see you again!", res)
          // redirect to main page
          if (res.success === "Successed!") {
          setTimeout ( () => {
            browserHistory.push({
              pathname: "/user",
              state: { user: res.data }
            });
          }, 4000)
        } else {
          alert("kindly sign up with us, thank you")
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    });
   }
  }
  

  handleOnClick1(e) {
    e.preventDefault();
    this.toggleButtonNow();
    this.toggleButtonSpinNow();
    this.reset();
    if (this.state.validation) {
      $.ajax({
        url: '/sign-up',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          organizationName: this.state.organizationName,
          phoneNumber: this.state.phoneNumber
        }),
        success: (res) => {
          console.log('Thank you for being with us')
          if(res.success !== 'userExist') {
            browserHistory.push({

              pathname: "/user",
              state: { user: res.data }
            });
          } else {
            alert("This user is exist");
          }
        },
        error: (err) => {
          console.log('err', err);
          alert("sign up err")
        }
      }); 
    }
  }

  componentDidMount () {
      let imgBtn = document.querySelector('.img__btn');

      if (imgBtn) {
       imgBtn.addEventListener('click', function() {
        document.querySelector('.cont').classList.toggle('s--signup')
       });
      } 
   }

  toggleButtonNow () {
    setTimeout( () => {
    this.setState({
        toggleButton: !this.state.toggleButton,
        toggleButtonSpin: !this.state.toggleButtonSpin
    })
    }, 5000)
    clearTimeout(this.toggleButtonNow)
    }

  toggleButtonSpinNow () {
      this.setState({
          toggleButtonSpin: !this.state.toggleButtonSpin,
          toggleButton: false
        })
    }


    reset () {
      this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          organizationName: ""
        })
    }

  render () {

    return (
      <div class="cont">
        <div class="form sign-in" style={{marginTop: "100px"}}>
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" name ="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
            <Typography variant="caption" style={{ color: "red" }} gutterBottom align="center">{this.state.errorPassword}</Typography>
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={this.handleOnClick.bind(this)}>{this.state.toggleButtonSpin && <i className="fa fa-spinner fa-spin"></i>}Sign In</button>
          <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>First Name</span>
              <input type="text" name = "firstName" value={this.state.firstName} onChange={this.handleChange1.bind(this)} required/>
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange1.bind(this)} required/>
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange1.bind(this)} required/>
            </label>
            <label>
              <span>Phone Number</span>
              <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange1.bind(this)} required/>
              <Typography variant="caption" style={{ color: "red" }} gutterBottom align="center">{this.state.errorPhone}</Typography>
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange1.bind(this)} required/>
              <Typography variant="caption" style={{ color: "red" }} gutterBottom align="center">{this.state.errorPassword}</Typography>
            </label>
            <label>
              <span>Organization Name</span>
              <input type="text" name="organizationName" value={this.state.organizationName} onChange={this.handleChange1.bind(this)}/>
            </label>
            <button type="button" className="submit" onClick={this.handleOnClick1.bind(this)}>{this.state.toggleButtonSpin && <i className="fa fa-spinner fa-spin"></i>}Sign Up</button>
            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
          </div>
        </div>
      </div>
    )
   }
  }

  export default PopLogIn;