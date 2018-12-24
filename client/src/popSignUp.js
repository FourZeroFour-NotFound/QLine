import React from 'react';
import './style/App.css';
import {browserHistory} from 'react-router';
import $ from 'jquery';



class PopSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      organizationName: "",
      errorPhone: "",
      errorEmail: "",
      errorPassword: "",
      validation: false,
      isSignUp:false
    };
  }

  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
    let email = this.state.email
    console.log(this.state[target.name],"working??");

    if (this.state.phoneNumber.length < 9) {
      this.setState({
        errorPhone: "Kindly check and try agian",
        validation: false
      });
    } else {
      this.setState({
        errorPhone: "",
        validation: true
      });
    }
    
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
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        errorEmail: "Invalid email",
        validation: false
      });
    } else {
      this.setState({
        errorEmail: "",
        validation: true
      });
    }
  }

  handleOnClick(e) {
    e.preventDefault();
    this.reset();
    console.log(this.state);
    // if the validation true  send data
    if (this.state.validation) {
      $.ajax({
        url: '/sign-up',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
          gender: this.state.organizationName,
          id_roles: 1
        }),
        success: (res) => {
          console.log('Thank you for being with us')
        },
        error: (err) => {
          console.log('err', err);
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
        <div class="form sign-in">
        <h2>Time to feel like home,</h2>
        <label>
              <span>First Name</span>
              <input type="text" name = "firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} required/>
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} required/>
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} required/>
            </label>
            <label>
              <span>Phone Number</span>
              <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange.bind(this)} required/>
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} required/>
            </label>
            <label>
              <span>Organization Name</span>
              <input type="text" name="organizationName" value={this.state.organizationName} onChange={this.handleChange.bind(this)}/>
            </label>
            <button type="button" className="submit" onClick={this.handleOnClick.bind(this)}>Sign Up</button>
            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
        </div>
        <div className="sub-cont">
          <div className="img1">
            <div className="img__text m--up">
            <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>              
            </div>
            <div className="img__text m--in">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign In</span>
              <span className="m--in">Sign Up</span>
            </div>
          </div>
          <div className="form sign-up" style={{marginTop: "100px"}}>
            <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit">Sign In</button>
          <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
           
          </div>
        </div>
      </div>
    )
   }
  }

  export default PopSignUp;