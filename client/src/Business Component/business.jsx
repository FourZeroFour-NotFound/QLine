// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import {Grid} from '@material-ui/core';
import BusinessGridList from './businessGridList.jsx';
import logo from '../style/qline.png';
import { Widget } from 'react-chat-widget';
import {browserHistory } from 'react-router';
import businessvid from '../style/business.mp4';
import $ from "jquery";
import Footer from '../First Page Component/Footer.jsx';
import CardFloatBusiness from './cardFloatBusiness.jsx';
import CreateQueueCard from './createQueueCard.jsx';



// direct styling of components usage and here you can avoid confussion and can easily adjust styles for 
// this specific component
const styles = {
  root: {
    flexGrow: 1,
  },
};

const style = theme => ({
  margin: {
    margin: theme.spacing.unit,
    backgroundColor: "#7aeac2",
  },
  roots: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 20,
    marginLeft: 20,
    marginRight: 20
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});



// business page component that contains resources that has been imported 
// In this component you can see the stateless functions as well as request with ajax that will
// interact with our server for the components Main functionality.
// here you can use the component that has been imported specifically the <CreateQueueCard/> that allows business users
// to create, plan, and manage there Queues
export default class business extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: true,
        anchorEl: null,
        queues:[]
      }
    }

    // stateless function that helps users to render some functionality of the business page
    // When react renders our stateless component all what it needs to do is just call <business/> function and pass props there.
    // functionality though such as $ajax requests are very important in components since it can give you data request
    // from or to the server to be rendered and give an optimal functionality for the component
    handleChange = event => {
      this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    componentDidMount () {
      let imgBtn = document.querySelector('#d');

        if (imgBtn) {
          imgBtn.addEventListener('change', function() {
            setTimeout(() => {window.location.href="/user"}, 1000)
          });
        } 
    }

    componentWillMount () {
      $(function() {
        $('.scroll-down').click (function() {
          $('html, body').animate({scrollTop: $('.cool1').offset().top }, 'slow');
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

    // A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
    // In this section of the component is the main part since it help to show datas in our DOM to be used and visualize for our users
    // direct styling is possible as well in any component , videos, nav bar and direct calling of components is one of the good benefits using react js
    // since that the main purpose of an JSX , adopting styles with app.css has been implemented
    render() {
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);

      return (
            <div>
               {/*** Video presentation for Business Home Page ***/}
              <video width="100%"  style={{marginTop: "-50px"}}  autoPlay>
                      <source src={businessvid} type="video/mp4"/>
              </video>

               {/*** NavBar Business Main Page with buttons and Switch ***/}
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
                          <li className="menuItem"><a className="itemLink" href="/feature__">Features</a></li>
                          <li className="menuItem"><a className="itemLink">Contact Us</a></li>
                          </ul>
                      </Grid>
                      <Grid className="menu__right">
                          <ul className="menu__list">
                          <li class="menu__list-item"><a  class="menu__link" onClick={this.logOut.bind(this)}>Logout</a></li>
                          </ul>
                      </Grid>
              </nav>

               {/*** Search Section Header and Body , Style Rendered from App.css ***/}
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
                                              <CardFloatBusiness/>
                                              <CreateQueueCard/>
                              </div>
                               {/*** Queue Management Section Where you can view your created Queue ***/}
                              <Grid className="searchdesign" style = {{height: "800px",marginTop:"250px", marginLeft: "100px"}}> 
                                  <h2 style={{marginLeft: "-700px", fontSize: "50px", marginBottom: "50px" }}>MANAGE<span style={{color: "#7aeac2"}}> QUEUE</span></h2>
                                  <BusinessGridList/>
                              </Grid>

                            </div>

                             {/*** Chatbox installed from npm for customer usage ***/}
                          <Widget/>
                        </div>
                      )}
                    </FormGroup>
                    </div>
                    
                     {/*** Footer Component Rendered ***/}
                <Footer/>
            </div>
        );
    }
}

