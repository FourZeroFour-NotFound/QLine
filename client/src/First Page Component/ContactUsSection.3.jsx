import React from 'react';
import '../style/App.css';
import logo from '../style/qline.png';
import {Grid} from '@material-ui/core'; 

// ContactUs component in the back end request of our website
// This component use validation as well as ajax request to send datas inside our server
// Main part like input all of informastion will be rendered inside the other files in order to use all the info
class ContactUsSection extends React.Component {
 

  render () {
    return (
    <div >
        <div style={{background: 'linear-gradient(to left, rgba(170,18,86, .7), rgba(170,18,86, .7))', marginTop: -100, height: '1100px', width: '100%'}}/>
        <div class="main111" style={{marginTop: "-750px"}}>
            <div class="left333">
                <div class="title234">
                    <h1>Contact US</h1>
                </div>
                <form action="">

                    <input type="text" placeholder="Name"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <input type="email" placeholder="Email"/>
                    <textarea name="Message" id="" placeholder="Message"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
            <div class="right777">
                <div class="content222">
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> 143 Hacker St, RBK Village, JO</p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> qline@qline.com
                    </p>
                    <p><i class="fa fa-volume-control-phone" aria-hidden="true"></i> (931) 258-3260
                    </p>
                </div>
            </div>
        </div>
        <nav className="menu5"  style={{backgroundColor: "transparent", position: "absolute",  marginTop: "-700px", marginLeft: "50px"}} >
                <img src={logo} width="122px" height="62px" style={{marginTop: "30px", marginLeft: "-20px"}}/>
                <Grid className="menu__right" >
                    <ul className="menu__list">
                    <li class="menu__list-item"><a class="menu__link" style={{color: "black"}} href="/BusinessDashBord/:queue_id">Back</a></li>
                    <li class="menu__list-item"><a class="menu__link" style={{color: "black"}}  href="/" >Logout</a></li>
                    </ul>
                </Grid>
        </nav>
    </div>

    )
   }
  }

  export default ContactUsSection;