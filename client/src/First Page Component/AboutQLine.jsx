// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React, { Component } from 'react';
import '../style/App.css';
import {Grid, Button} from '@material-ui/core';
import show from '../style/show.png';

// Component that shows static information for user in order to show the goal of our website to help them
class AboutQLine extends Component {
  constructor(props) {
    super(props);
  }

  // renders image and information for the user to realize and be inform of our goal and services
  // missions and vissions as well
  render() {
    return (
        <Grid className="mainDp">
            <Grid className="videoComp">
                <div>
                    <Grid className="about" style={{marginLeft: "200px", marginTop: "200px"}}>
                        <h1 className="title">About<span style={{color: "#aa1256", marginLeft: "10px"}}>QLine</span></h1>
                        <p>
                            QLine is a free queue management system that allows businesses to handle customer queues smartly and speedily.
                        </p>
                        <p style={{marginTop: "20px"}}>
                            QLine is an intelligent system that can monitor data related to queues in real time, and collect 
                            customer feedback. Our software can then assess this data to speed up the performance of your agents and services.
                        </p>
                       <Button id="btn22" style={{backgroundColor: "#aa1256", height:"50px" ,width: "100px", marginTop: "30px", color: "white"}} onClick={this.props.toggleSignup}> Start Free</Button>
                    </Grid>
                </div>
            </Grid>
            <Grid className="videoComp">
                <div >
                    <Grid className="videoComp">
                    <img src={show} width="1000px" height="800px" style={{marginLeft: "-200px", marginTop: "50px"}}/>
                    </Grid>
                </div>
            </Grid>  
        </Grid>
  
    );
  }
}

export default AboutQLine;

