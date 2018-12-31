import React from 'react';
import "./style/App.css";
import {FormGroup, Grid, Button} from '@material-ui/core';
import bank from './style/bank.png';


export default class HowQLine extends React.Component {
    
  render() {
    return (
        <Grid className="gridHow">
            <h1>How It <span style={{color: "#e33a2e"}}>Works</span></h1>
        <Grid className="gridHow">
        <img src={bank} style={{marginLeft: "200px", marginTop: "100px"}}/>
        </Grid>
        </Grid>
    );
  }
}
