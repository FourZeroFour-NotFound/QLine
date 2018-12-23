import React from 'react';
import './style/App.css';


class PopSignUp extends React.Component {
  constructor(props) {
       super(props)
  }

  componentDidMount () {
      let imgBtn = document.querySelector('.img__btn');

      if (imgBtn) {
       imgBtn.addEventListener('click', function() {
        document.querySelector('.cont').classList.toggle('s--signup')
       });
      } 
   }

  render () {

    return (
      <div class="cont">
        <div class="form sign-in">
        <h2>Time to feel like home,</h2>
        <label>
              <span>First Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Phone Number</span>
              <input type="number" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="password" />
            </label>
            <label>
              <span>Organization Name</span>
              <input type="text" />
            </label>
            <button type="button" className="submit">Sign Up</button>
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