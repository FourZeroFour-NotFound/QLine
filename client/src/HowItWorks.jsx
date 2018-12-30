import React, { Component } from 'react';
import './style/App.css';
import {Grid, Button} from '@material-ui/core';
import pinfo from './style/phoneinfo.png';
import tab from './style/tab.png';
import laptop from './style/laptop.png';
import tv from './style/tv.png';
import laptop2 from './style/laptop2.png';

class HowItWorks extends Component {
  constructor(props) {
    super(props);
   
  }

 
  render() {
    return (
        <div class="ct" id="t1">
            <div class="ct" id="t2">
                <div class="ct" id="t3">
                <div class="ct" id="t4">
                    <div class="ct" id="t5">
                    <ul id="menu3">
                        <a href="#t1"><li class="fa fa-circle" id="uno" style={{letterSpacing: "8px"}}></li></a>
                        <a href="#t2"><li class="fa fa-circle"  id="dos" style={{letterSpacing: "8px"}}></li></a>
                        <a href="#t3"><li class="fa fa-circle"  id="tres" style={{letterSpacing: "8px"}}></li></a>
                        <a href="#t4"><li class="fa fa-circle"  id="cuatro" style={{letterSpacing: "8px"}}></li></a>
                        <a href="#t5"><li class="fa fa-circle"  id="cinco" style={{letterSpacing: "8px"}}></li></a>
                    </ul>
                    <div class="page1" id="p1">
                        <section class="icon1"><span class="title1"><img src={pinfo} width="700px" height="700px" style={{marginTop: "-300px", marginLeft: "-600px"}}/></span>
                        <span class="hint" style={{marginTop: "-600px", marginLeft: "400px", width:"500px"}}><h1 className="How">How</h1><h1 className="How" style={{color:"#e33a2e", borderBottom: "4px solid #e33a2e"}}>It Works</h1>
                        <h2 className="steps"><span style={{color: "#e33a2e"}}>Step 1:</span> Customers Free</h2><h2 className="step">Mobile<span style={{color: "#90bacf", marginLeft: "10px"}}>Queuing</span> App</h2>
                        <h3 style={{color: "#000", textAlign: "left", marginTop: "20px"}}>QLine is a mobile queue management system for your customers to book tickets and queuing spots in your branches/locations different services. The customer app is for customers to download into their own devices.
                        This is ideal for returning and loyal customers.</h3>
                        <Button style={{backgroundColor: "#e33a2e",color: "#fff", width: "100px", marginLeft: "-400px", marginTop: "20px"}} href="/"> Start Now</Button> 
                        </span></section> 
                    </div>
                    <div class="page1" id="p2">
                       <section class="icon1"><span class="title1"><img src={tab} width="700px" height="700px" style={{marginTop: "-300px", marginLeft: "-600px"}}/></span>
                        <span class="hint" style={{marginTop: "-600px", marginLeft: "400px", width:"500px"}}><h1 className="How">How</h1><h1 className="How" style={{color:"#e33a2e", borderBottom: "4px solid #e33a2e"}}>It Works</h1>
                        <h2 className="steps"><span style={{color: "#e33a2e"}}>Step 2:</span>Walk-in Customers Tablet App</h2>
                        <h3 style={{color: "#000", textAlign: "left", marginTop: "20px"}}>Your business will also have walk-in customers who don't know or not interested in using the app. For these customers, you can set-up an onsite tablet app. Set up the tablet near the queues
                        and customers are able to book or sign-up without having to wait in line to interact with a human agent.</h3>
                        <Button style={{backgroundColor: "#e33a2e",color: "#fff", width: "100px", marginLeft: "-400px", marginTop: "20px"}} href="/"> Start Now</Button> 
                        </span></section> 
                    </div>  
                    <div class="page1" id="p3">
                        <section class="icon1"><span class="title1"><img src={laptop} width="700px" height="700px" style={{marginTop: "-300px", marginLeft: "-600px"}}/></span>
                        <span class="hint" style={{marginTop: "-600px", marginLeft: "400px", width:"500px"}}><h1 className="How">How</h1><h1 className="How" style={{color:"#e33a2e", borderBottom: "4px solid #e33a2e"}}>It Works</h1>
                        <h2 className="steps"><span style={{color: "#e33a2e"}}>Step 3:</span>Agent App</h2>
                        <h3 style={{color: "#000", textAlign: "left", marginTop: "20px"}}>QLine is a fully automated queue management system but is still in personal human touch, by using QLine Agent App (IOS, Kiosk, Chrome) which your representative can manage to call
                        customers and offer them a more personalized experience</h3>
                        <Button style={{backgroundColor: "#e33a2e",color: "#fff", width: "100px", marginLeft: "-400px", marginTop: "20px"}} href="/"> Start Now</Button> 
                        </span></section> 
                    </div>
                    <div class="page1" id="p4">
                        <section class="icon1"><span class="title1"><img src={tv} width="700px" height="700px" style={{marginTop: "-300px", marginLeft: "-600px"}}/></span>
                        <span class="hint" style={{marginTop: "-600px", marginLeft: "400px", width:"500px"}}><h1 className="How">How</h1><h1 className="How" style={{color:"#e33a2e", borderBottom: "4px solid #e33a2e"}}>It Works</h1>
                        <h2 className="steps"><span style={{color: "#e33a2e"}}>Step 4:</span>Agent App</h2>
                        <h3 style={{color: "#000", textAlign: "left", marginTop: "20px"}}>QLine is a fully automated queue management system but is still in personal human touch, by using QLine Agent App (IOS, Kiosk, Chrome) which your representative can manage to call
                        customers and offer them a more personalized experience</h3>
                        <Button style={{backgroundColor: "#e33a2e",color: "#fff", width: "100px", marginLeft: "-400px", marginTop: "20px"}} href="/"> Start Now</Button> 
                        </span></section> 
                    </div> 
                    <div class="page1" id="p5">
                    <section class="icon1"><span class="title1"><img src={laptop2} width="700px" height="700px" style={{marginTop: "-300px", marginLeft: "-600px"}}/></span>
                        <span class="hint" style={{marginTop: "-600px", marginLeft: "400px", width:"500px"}}><h1 className="How">How</h1><h1 className="How" style={{color:"#e33a2e", borderBottom: "4px solid #e33a2e"}}>It Works</h1>
                        <h2 className="steps"><span style={{color: "#e33a2e"}}>Step 5:</span>Management and Analytic App</h2>
                        <h3 style={{color: "#000", textAlign: "left", marginTop: "20px"}}>With this App, you can monitor staff performance in real time and recieve customer feedback. At this stage, your business can collect valuable
                        data to improve eeficiency and customer satisfaction in the long run.</h3>
                        <Button style={{backgroundColor: "#e33a2e",color: "#fff", width: "100px", marginLeft: "-400px", marginTop: "20px"}} href="/"> Start Now</Button> 
                        </span></section> 
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>



    )
  }
}

export default HowItWorks;

