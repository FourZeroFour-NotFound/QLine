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
import Profile from './Profile.jsx'
import uservideo from '../style/user.mp4';
import Footer from '../First Page Component/Footer.jsx';



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
        console.log("kkkk",  that.state.searchResult)
      }
    });
  }

  componentDidMount () {
    let imgBtn = document.querySelector('#d');

      if (imgBtn) {
       imgBtn.addEventListener('change', function() {
        setTimeout(() => {window.location.href="/business"}, 1000)
       });
      } 
  }


  render() {


    const { auth } = this.state;
  

    return (
            <div>
               <video width="100%"  style={{marginTop: "-50px"}}  autoPlay>
                <source src={uservideo} type="video/mp4"/></video>
              <nav className="menu5" style={{backgroundColor: "transparent",  marginTop: "-1000px", marginLeft: "50px"}}>
                        <img src={logo} width="122px" height="62px" style={{marginTop: "15px", marginLeft: "-20px"}}/>
                        <Grid>
                          <Grid class="can-toggle1 demo-rebrand-2" style={{marginTop: "-5px", marginLeft: "50px"}}>
                            <input id="d" type="checkbox"/>
                                <label for="d" id="y">
                                    <Grid class="can-toggle1__switch1" data-checked="USER" data-unchecked="Business"></Grid>
                                </label>
                          </Grid>
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
                              <Button href="/profile" color="inherit" style={{width: "70px", marginRight: "10px"}}>
                                <AccountCircle />
                                </Button>
                                <li className="menu__list-item"><Link to ="/" class="menu__link">Logout</Link></li>
                                </ul>
                            </Grid>
                        </nav>
                        <div class="wrap">
                        
                      
                          <div class="search">
                              <input  onChange={e => {this.setState({value:e.target.value})}} type="text" class="searchTerm"  placeholder="Search..."/>
                              <button  onClick={this.handleSearch}type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                          <Grid style = {{height: "1000px"}}>
                          <SearchResult  queues = {this.state.searchResult}/>   
                          </Grid>
                          <Footer/>
             </div>
    );
  }
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(User) ;















