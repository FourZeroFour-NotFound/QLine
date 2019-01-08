import React, { Component } from 'react';
import '../style/App.css';
import { Grid, Button } from '@material-ui/core';
import pinfo from '../style/phoneinfo.png';
import tab from '../style/tab.png';
import laptop from '../style/laptop.png';
import tv from '../style/tv.png';
import laptop2 from '../style/laptop2.png';

class DownloadApp extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div class="ctv" id="t1">
        <div class="page33" id="p1">
          <section class="icon33"><span class="title1nodeomn"><img src={pinfo} width="700px" height="700px" style={{ marginTop: "-300px", marginLeft: "200px" }} /></span>
            <span class="hint1" style={{ marginTop: "-600px", marginLeft: "1000px", width: "500px" }}><h1 className="How">Get in the queue before you arrive. Get the </h1><h1 className="How" style={{ color: "#e33a2e" }}>queuing app.</h1>
              <Button className="google" style={{ width: "270px", height: "85px", marginLeft: "-50px", marginTop: "20px" }} href="https://play.google.com"></Button>
              <Button className="apple" style={{ width: "250px", height: "85px", marginLeft: "20px", marginTop: "20px" }} href="https://www.apple.com/lae/ios/app-store/"></Button>
            </span></section>
        </div>
      </div>

    )
  }
}

export default DownloadApp;

