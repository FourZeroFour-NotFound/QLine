import React from 'react';
import "../style/App.css";
import {Grid} from '@material-ui/core';
import question from "../style/question.png";
import set from "../style/set.png";
import kiosk from "../style/kiosk.png";

// KeyFeatures to help user to inform step by step procedures of the components
// component interface is the key of any user to be entertained atleast in the part of web development 
export default class KeyFeatures extends React.Component {
  render() {
    return (
        <Grid className="key">
        <Grid>
           
                <Grid className="feature">
                    <img src={question} width="300px" height="300px"/>
                <Grid style={{width: "200px", marginLeft: "50px", marginTop: "20px"}}><h2>Know who is coming</h2><p style={{marginTop: "20px"}}> 
                QLine Queue Management System
                records your imminent customer's and
                the services they intend to use.
                </p>
                </Grid>
                </Grid>
            </Grid>
            <Grid>
           
                <Grid className="feature">
                    <img src={set} width="300px" height="300px"/>
                <Grid style={{width: "200px", marginLeft: "50px", marginTop: "20px"}}><h2>Manage traffic</h2><p style={{marginTop: "20px"}}> 
                cloud-based queue management analytical
                platform allows you to monitor how many visitors are queuing at each branch, along with information about their background and preferences.
                </p>
                </Grid>
                </Grid>
            </Grid>
            <Grid>
           
                <Grid className="feature">
                    <img src={kiosk} width="300px" height="300px"/>
                <Grid style={{width: "200px", marginLeft: "50px", marginTop: "20px"}}><h2>Welcome walk-in customers</h2><p style={{marginTop: "20px"}}>
                install QLine Provider application on a tablet inside your branch. This will allow your walk-in customers to book their tickets and get their ticket number in an sms or e-mail.
                </p></Grid>
                </Grid>
            </Grid>
    </Grid>
    );
  }
}