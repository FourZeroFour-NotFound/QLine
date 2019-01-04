
import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header';
import logo from '../style/qline1.jpg';
import logo1 from '../style/logo1.png';
import Login from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import { Grid } from '@material-ui/core';
import IntroPage from './IntroPage.js';
import FlipInfo from './flipInfo.jsx';
import AboutQLine from './AboutQLine.jsx';
import HowItWorks from './HowItWorks.jsx';
import KeyFeatures from './KeyFeatures.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import $ from 'jquery';
import HowQLine from './HowQLine.jsx';
import Loading from './Loading.js';

// Main Render of the components that displays all the component used in our project
// we use stateless functions also for toggling signIn and signUp pages for better UI experience
// Basic event handling has been Introduced as well 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSignUp: false,
      isOpenSignIn: false,
      loading: false
    };
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    $.ajax({
      url: '/customer-message',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        message: `${newMessage}`
      }),
      success: (res) => {
      console.log("Thank you, we will be in touch")
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    addResponseMessage("Welcome to QLine chat!");
    setTimeout(()=> {
      this.setState({
        loading: !this.state.loading
      })
    }, 3000)
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
        <Loading/>
      {this.state.loading &&
      <Grid>
      <Grid className="container center">
      <IntroPage/>
        <Header logo={logo} toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
      </Grid>
      <Grid>
        <FlipInfo/>
        <AboutQLine/>
        <HowItWorks/>
        <KeyFeatures/>
      </Grid>
      <Widget handleNewUserMessage={this.handleNewUserMessage} profileAvatar={logo1}
          color={"#aa1256"}
          title="QLine Queue Management System"
          subtitle="Your Queue Our Service"/>
        <HowQLine/>
        <ContactUs/>
      <Footer/>
      <Login show={this.state.isOpenSignIn} onClose={this.toggleLogin}></Login>
      <SignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></SignUp>
      </Grid>}
      </Grid>
    );
  }
}

export default App;

