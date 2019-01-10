import React, { Component } from 'react';
import '../style/App.css';
import {Grid} from '@material-ui/core';
import phone from '../style/phone.png';
import building from '../style/building.png';
import msg from '../style/msg.png';
import bar from '../style/bar.png';


// static component with CSS effects and allows user to view information of QLine in order to have an idea with our app
// this information located in the first page after the video presentation of our page
class FlipInfo extends Component {
  constructor(props) {
    super(props); 
  }

  // rendering flip CSS effect with phone, laptop, sms and a like with styling and css file on the back style
  render() {
    return (
    
    <Grid className="allflip" id="flip">
        <Grid className="scene">
            <div className="card">
                <Grid className="card__face card__face--front"><img src={phone} width="200px" height="200px" style={{marginLeft: "-50px", marginTop: "-50px"}}/></Grid>
                <Grid className="card__face card__face--back"><span style={{borderBottom: "4px solid #fff", fontSize: "30px"}}>REMOTE QUEUEING</span><p style={{marginTop: "20px"}}> Mobile app allows your customers to book their tickets remotely.</p></Grid>
            </div>
            </Grid>
            <Grid className="scene" style={{background: "#7aeac2"}}>
            <div className="card" >
                <Grid className="card__face card__face--front"><img src={building} width="300px" height="200px" style={{marginLeft: "-5px", marginTop: "-50px"}}/></Grid>
                <Grid className="card__face card__face--back"><span style={{borderBottom: "4px solid #fff", fontSize: "30px"}}>BRANCH MANAGEMENT</span><p style={{marginTop: "20px"}}> You can manage, add and edit your branches, services and users easily from the web administrator tool.</p></Grid>
            </div>
            </Grid>
            <Grid className="scene" style={{background: "#efa24a"}}>
            <div className="card">
                <Grid className="card__face card__face--front"><img src={msg} width="200px" height="200px" style={{marginLeft: "-5px", marginTop: "-50px"}}/></Grid>
                <Grid className="card__face card__face--back" style={{marginTop: "20px"}}><span style={{borderBottom: "4px solid #fff", fontSize: "30px"}}>SMS AND PUSH NOTIFICATIONS</span><p style={{marginTop: "20px"}}>Whether getting a ticket on the premises or remotely, your customers can now be alerted by SMS, email or via the mobile app when it is their turn.</p></Grid>
            </div>
            </Grid>
            <Grid className="scene" style={{background: "#e33a2e"}}>
            <div className="card">
                <Grid className="card__face card__face--front"><img src={bar} width="200px" height="200px" style={{marginLeft: "-5px", marginTop: "-50px"}}/></Grid>
                <Grid className="card__face card__face--back" style={{marginTop: "50px"}}><span style={{borderBottom: "4px solid #fff", fontSize: "30px"}}>REAL TIME MONITORING</span><p style={{marginTop: "20px"}}>QLine advanced reporting tool allows you to monitor the queues in your branches and for each service and evaluate your agents’ performances.</p></Grid>
            </div>
        </Grid>
    </Grid>
      
    );
  }
}

export default FlipInfo;

