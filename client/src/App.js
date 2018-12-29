
import React, { Component } from 'react';
import './style/App.css';
import Header from './Header';
import logo from './style/qline1.jpg';
import Login from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import { Grid } from '@material-ui/core';
import bk from './style/bk.jpg';
import IntroPage from './IntroPage.js';
import User from './Components/Profile.jsx'
import FlipInfo from './flipInfo.jsx';
import AboutQLine from './AboutQLine.jsx';
import HowItWorks from './HowItWorks.jsx';

// Main Render of the components that displays all the component used in our project
// we use stateless functions also for toggling signIn and signUp pages for better UI experience
// Basic event handling has been Introduced as well 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSignUp: false,
      isOpenSignIn: false
    };
  }

  toggleSignup = () => {
    this.setState({
      isOpenSignUp: !this.state.isOpenSignUp,
      isOpenSignIn: false
    });
  }

  toggleLogin = () => {
    this.setState({
      isOpenSignIn: !this.state.isOpenSignIn,
      isOpenSignUp: false
    });
  }
  render() {
    return (
      <Grid>
      <Grid className="container center">
        <Header logo={logo} toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
      </Grid>
      <Grid>
        <IntroPage/>
        <FlipInfo/>
        <AboutQLine/>
        
      </Grid>
      <HowItWorks/>
      <Login show={this.state.isOpenSignIn} onClose={this.toggleLogin}></Login>
      <SignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></SignUp>
      </Grid>
    );
  }
}

export default App;

