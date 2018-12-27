
import React, { Component } from 'react';
import './style/App.css';
import { Grid } from '@material-ui/core';
import bk from './style/bk.jpg';
import {Button} from '@material-ui/core';
import {Link} from 'react-router';


//Simple page for user interface
// static information with images and text, functionalities such as the buttons
// react simple rendering is implemented using Material UI for responsive interaction
class IntroPage extends Component {
  render() {
    return (
      <Grid className="container center">
       <Grid  className="content">
       <img className="init" src={bk}/>
        <Grid className="titleDesc">Queue Management System <span className="imp">Implemented</span>
        <p className="qlinedesc">QLine is the world's most effecient queue management system and it's completely FREE. See how it can help your life today.</p>
        <Button id="btn22" style={{backgroundColor: "#7aeac2", width: "100px"}} href="/"> Start Now</Button>
        </Grid>
        </Grid>
        
      </Grid>
    );
  }
}

export default IntroPage;