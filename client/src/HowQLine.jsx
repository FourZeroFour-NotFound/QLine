import React from 'react';
import "./style/App.css";
import {FormGroup, Grid, Button} from '@material-ui/core';
import bank from './style/bank.png';


export default class HowQLine extends React.Component {
    
  render() {
    return (
        <Grid className="gridHow">
         <Grid>
        <img src={bank} style={{marginLeft: "200px", marginBottom: "-1000px"}}/>
        </Grid>
         <Grid>
            <h1 className="howt">How It <span style={{color: "#e33a2e"}}>Works</span></h1>
         </Grid>
         <a class="button" href="#">1
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 1 - Walk-in</h3>
         <h4 style={{marginBottom: "20px"}}>Kiosk</h4>
             Allow walk-in customers to book tickets and receive them by SMS or Email</span>
         </a>
         <a class="button" href="#">2
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 2 - Waiting</h3>
         <h4 style={{marginBottom: "20px"}}>On Site queue</h4>
             Allow walk-in customers to wait in the area where services can be provided also before hand there turn</span>
         </a>
         <a class="button" href="#">3
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 3 - Agents Interface</h3>
         Agents will be able to call customers and provide them with Personalized experience</span>
         </a>
         <a class="button" href="#">4
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 4</h3>
         <h4 style={{marginBottom: "20px"}}>Management Dashboard</h4>
             Smart analytics with real time monitoring and reporting of staff performance and customer satisfaction</span>
         </a>
         <a class="button" href="#">5
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 5</h3>
         <h4 style={{marginBottom: "20px"}}>Management Analysis</h4>
             Manager will have the approval of the App for transaction and recommend it to the customer who have a insuffecient experience in the queue</span>
         </a>
         <a class="button" href="#">5
         <span class="tooltiptext"><h3 style={{color: "#e33a2e"}}>Step 6 - Word of Mouth</h3>
         <h4 style={{marginBottom: "20px"}}>Management Analysis unit Marketing</h4>
             Management will recommend the app to others in order to seclude the good benefit of the app in queue management system</span>
         </a>
        </Grid>
    );
  }
}
