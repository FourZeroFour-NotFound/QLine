
import React, { Component } from 'react';
import './style/App.css';
import User from './Components/User'
import Header from './Header';
import logo from './style/qline1.jpg';
import Login from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import { Grid } from '@material-ui/core';


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
      {/* <img className="init" src ='https://images.pexels.com/photos/34166/pexels-photo.jpg?cs=srgb&dl=architecture-cityscape-cityview-34166.jpg&fm=jpg'/>  */}
      <Login show={this.state.isOpenSignIn} onClose={this.toggleLogin}></Login>
      <SignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></SignUp>
      </Grid>
    );
  }
}

export default App;