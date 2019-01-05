import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import '../style/App.css';
import logo from '../style/qline.png';
import SearchIcon from '@material-ui/icons/Search'
import {Grid} from '@material-ui/core';
import flat from '../style/flat.png';
import {Link} from 'react-router';
import $ from "jquery";
import SearchResult from './SearchResult.jsx';
import uservideo from '../style/user.mp4';
import Footer from '../First Page Component/Footer.jsx';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import CardFloat from './cardFloat.jsx';
import { Router, Route, browserHistory } from 'react-router';
import vio from '../style/qlinevio.png';
import Counter from './counter.jsx';
import DownloadApp from "./downloadApp.jsx";
import CustomerService from '../First Page Component/ContactUs.jsx';


const styles = () => ({

  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },

  color: {
    backgroundColor: '#aa1256',
  },
});


class User extends Component {
  state = {
    auth: true,
    anchorEl: null,
    value:"",
    searchResult:[],
    firstName: "",
    lastName: "",
    email: ""
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };


  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSearch = () => { 
     var that= this;
    $.ajax({
      url: "/search",
      type: "Post",
      data: {org:this.state.value} ,
      success: function (data) {
        that.setState({
          searchResult:data.success
        })
        console.log("searchresult",  that.state.searchResult)
      }
    });
  }

  componentDidMount () {
    let imgBtn = document.querySelector('#d');
    let that = this;
      if (imgBtn) {
       imgBtn.addEventListener('change', function() {
        setTimeout(() => {window.location.href="/business"}, 1000)
       });
      } 
      $.ajax({
        url: "/profile",
        type: "Get",
        success: function (data) {
          console.log(data)
          that.setState({
            firstName: data.success[0].firstName,
            lastName: data.success[0].lastName,
            email: data.success[0].email,
          })
        }
      });
  }

  componentWillMount () {
    $(function() {
      $('.searchQueue').click (function() {
        $('html, body').animate({scrollTop: $('.cool').offset().top }, 'slow');
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
    const { auth } = this.state;
    return (
            <div>
                  <video width="100%"  style={{marginTop: "-60px"}}  autoPlay>
                  <source src={uservideo} type="video/mp4"/></video>
                       <nav className="menu5"  style={{backgroundColor: "transparent",  marginTop: "-1000px", marginLeft: "50px"}}>
                            <img src={logo} width="122px" height="62px" style={{marginTop: "1px", marginLeft: "-20px"}}/>
                            <Grid class="can-toggle1 demo-rebrand-2" style={{marginTop: "-8px", marginLeft: "50px"}}>
                                        <input id="d" type="checkbox"/>
                                            <label for="d">
                                                <Grid class="can-toggle1__switch1" data-checked="USER" data-unchecked="Business"></Grid>
                                            </label>
                                      </Grid>
                            <Grid className="centerNav">
                                <ul className="centerNavMenu">
                                <li className="menuItem"><a className="itemLink">Home</a></li>
                                <li className="menuItem"><a className="itemLink">Features</a></li>
                                <li className="menuItem"><a className="itemLink">Contact Us</a></li>
                                
                                </ul>
                            </Grid>
                            <Grid className="menu__right">
                                <ul className="menu__list">
                                <li class="menu__list-item"><a  class="menu__link" onClick={this.logOut.bind(this)}>Logout</a></li>
                                </ul>
                            </Grid>
                        </nav>
                        <div className="cool">
                            <Button className="searchQueue" style={{backgroundColor: "#aa1256", marginTop: "-600px", marginLeft: "600px"}}>SEARCH QUEUE</Button>
                                <div  style={{background: "#aa1256", marginTop: "-15px", height: "300px"}}>
                                
                                  <div class="search">
                                      <input  onChange={e => {this.setState({value:e.target.value})}} type="text" class="searchTerm"  placeholder="Search..."/>
                                      <button  onClick={this.handleSearch} type="submit" className="searchButton">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                                    <a href="#" style={{color: "white"}} hover={{color: "#7aeac2"}}><i  style={{ marginTop: "40px", marginLeft: "1500px"}} class="fa fa-facebook"></i></a>
                                    <a href="#" style={{color: "white"}}><i  style={{ marginTop: "40px", marginLeft: "60px"}} class="fa fa-twitter"></i></a>
                                    <a href="#" style={{color: "white"}}><i  style={{ marginTop: "40px", marginLeft: "60px"}} class="fa fa-linkedin"></i></a>
                                    <a href="/profile" style={{color: "white"}}><AccountCircle  style={{marginLeft: "60px", marginBottom: "-5px"}}/></a>
                                    <h1 className="displayName">{this.state.firstName}</h1>
                                    <h1 className="displaylastName">{this.state.lastName}</h1>
                                    <h3 className="displaylastName">{this.state.email}</h3>
                                {/* <img src={vio} height="300px" style={{marginLeft: "800px"}}/> */}
                                <CardFloat/>
                                
                              </div>
                              <Grid className="searchdesign" style = {{height: "800px",marginTop:"-150px", marginLeft: "500px"}}>
                              <SearchResult queues = {this.state.searchResult}/>   
                              </Grid>
                              <Counter/>
                              </div>
                              <DownloadApp/>
                              <Widget/>
                              <CustomerService/>
                      <Footer/>
             </div>
    );
  }
}


User.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(User) ;















