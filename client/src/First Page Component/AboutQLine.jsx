import React, { Component } from 'react';
import '../style/App.css';
import {Grid, Button} from '@material-ui/core';
import show from '../style/show.png';

class AboutQLine extends Component {
  constructor(props) {
    super(props);
   
  }

 
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
                        <Button id="btn22" style={{backgroundColor: "#aa1256", width: "100px", marginTop: "30px", color: "white"}} href="/sign-up"> Start Free</Button>
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

