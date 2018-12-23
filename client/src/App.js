
import React, { Component } from 'react';
import Header from './Header';
import logo from './style/qline1.jpg';
import Login from './LogInandSignUp.jsx';
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
      <Login show={this.state.isOpenSignIn} onClose={this.toggleLogin}></Login>
      </Grid>
    );
  }
}

export default App;