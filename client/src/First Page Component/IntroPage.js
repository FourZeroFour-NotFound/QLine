
import React, { Component } from 'react';
import '../style/App.css';
import { Grid } from '@material-ui/core';
import intro from '../style/Final Comp_2.mp4';
import {Button} from '@material-ui/core';
import {Link} from 'react-router';
import $ from 'jquery';

//Simple page for user interface
// static information with images and text, functionalities such as the buttons
// react simple rendering is implemented using Material UI for responsive interaction
class IntroPage extends Component {

  componentDidMount () {
    $(function() {
      $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('.allflip').offset().top }, 'slow');
        return false;
      });
    });
  }

  render() {
    return (
      <Grid className="anyCont" >
       <Grid  className="content">
       <video width="100%" height="100%" style={{marginTop: "-100px"}} loop autoPlay>
       <source src={intro} type="video/mp4"/></video>
       <p href="#" className="scroll-down" address="true"></p>
        <Grid className="titleDesc">Queue Management System <span className="imp">Implemented</span>
        <p className="qlinedesc">QLine is the world's most effecient queue management system and it's completely FREE. See how it can help your life today.</p>
        <Button id="btn22" style={{backgroundColor: "#7aeac2", width: "100px"}} href="#flip"> Start Now</Button>
        </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default IntroPage;