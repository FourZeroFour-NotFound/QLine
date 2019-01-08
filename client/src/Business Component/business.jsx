import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { Grid } from '@material-ui/core';
import BusinessGridList from './businessGridList.jsx';
import logo from '../style/qline.png';
import { Widget } from 'react-chat-widget';
import { browserHistory } from 'react-router';
import businessvid from '../style/business.mp4';
import $ from "jquery";
import Footer from '../First Page Component/Footer.jsx';
import CardFloatBusiness from './cardFloatBusiness.jsx';
import CreateQueueCard from './createQueueCard.jsx';



const styles = {
  root: {
    flexGrow: 1,
  },
};


export default class business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      queues: []
    }
  }
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  signOut() {

    $.ajax({
      url: '/log-out',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    let imgBtn = document.querySelector('#d');

    if (imgBtn) {
      imgBtn.addEventListener('change', function () {
        setTimeout(() => { window.location.href = "/user" }, 1000)
      });
    }
  }

  componentWillMount() {
    $(function () {
      $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('.cool1').offset().top }, 'slow');
        return false;
      });
    });
  }

  logOut() {
    $.ajax({
      url: '/log-out',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        browserHistory.push('/')
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <video width="100%"  style={{marginTop: "-50px"}}  autoPlay>
                <source src={businessvid} type="video/mp4"/></video>
         <nav className="menu6"  style={{backgroundColor: "transparent",  marginTop: "-1000px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "1px", marginLeft: "-20px"}}/>
                <Grid class="can-toggle demo-rebrand-1" style={{marginTop: "-8px", marginLeft: "50px"}}>
                            <input id="d" type="checkbox"/>
                                <label for="d">
                                    <Grid class="can-toggle__switch" data-checked="USER" data-unchecked="Business"></Grid>
                                </label>
                          </Grid>
                <Grid className="centerNav">
                    <ul className="centerNavMenu">
                    <li className="menuItem"><a className="itemLink">Home</a></li>
                    <li className="menuItem"><a className="itemLink" href="/feature_">Features</a></li>
                    <li className="menuItem"><a className="itemLink">Contact Us</a></li>
                    
                    </ul>
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><a  class="menu__link" onClick={this.logOut.bind(this)}>Logout</a></li>
                    </ul>
                </Grid>
            </nav>
            <div style={styles.root}>
        <FormGroup>
          {auth && (
            <div style={{marginLeft: "40px"}}>
            <p href="#" className="scroll-down1" address="true">Start Here</p>
            <p href="#" className="scroll-down" address="true"></p>
            <div className="cool1" style={{marginLeft: "-50px", marginTop: "100px"}}>
                                <div  style={{background: "#7aeac2", marginTop: "-15px", height: "300px"}}>
                                    <a href="http://www.facebook.com"  style={{color: "black"}} hover={{color: "#7aeac2"}}><i  style={{ marginTop: "40px", marginLeft: "1500px"}} class="fa fa-facebook"></i></a>
                                    <a href="http://www.twitter.com" style={{color: "black"}}><i  style={{ marginTop: "40px", marginLeft: "60px"}}  class="fa fa-twitter"></i></a>
                                    <a href="http://www.linkedin.com" style={{color: "black"}}><i  style={{ marginTop: "40px", marginLeft: "60px"}}  class="fa fa-linkedin"></i></a>
                                    <a hhref="http://www.instagram.com" style={{color: "black"}}><i  style={{ marginTop: "40px", marginLeft: "60px"}}  class="fa fa-instagram"></i></a>
                                    <h1 className="displayName">{this.state.firstName}</h1>
                                    <h1 className="displaylastName">{this.state.lastName}</h1>
                                    <h3 className="displaylastName">{this.state.email}</h3>
                                {/* <img src={vio} height="300px" style={{marginLeft: "800px"}}/> */}
                                <CardFloatBusiness/>
                                <CreateQueueCard/>
                              </div>
                              <Grid className="searchdesign" style = {{height: "800px",marginTop:"250px", marginLeft: "100px"}}> 
                              <h2 style={{marginLeft: "-700px", fontSize: "50px", marginBottom: "50px" }}>MANAGE<span style={{color: "#7aeac2"}}> QUEUE</span></h2>
                              <BusinessGridList/>
                              </Grid>
                      </div>
              <Widget/>
              </div>
            )}
          </FormGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

