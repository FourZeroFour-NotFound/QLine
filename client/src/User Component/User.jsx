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




  render() {


    const { auth } = this.state;
  

    return (
            <div>
              <nav className="menu" style={{backgroundColor: "#aa1256", marginTop: "10px", marginLeft: "50px"}}>
                        <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                        <Grid>
                          <Grid class="can-toggle demo-rebrand-1">
                            <input id="d" type="checkbox"/>
                                <label for="d">
                                    <Grid class="can-toggle__switch" data-checked="USER" data-unchecked="Business"></Grid>
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
                                <AccountCircle /><p>Profile</p>
                                </Button>
                                <li class="menu__list-item"><Link to ="/" class="menu__link">Logout</Link></li>
                                </ul>
                            </Grid>
                        </nav>
                        {/* <img src={flat} style={{ width: "100%", height: "100%"}}/> */}
                        <div class="wrap">
                      
                          <div class="search">





                              <input  onChange={e => {this.setState({value:e.target.value})}} type="text" class="searchTerm"  placeholder="Search..."/>
                              <button  onClick={this.handleSearch}type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                          </div>
                          <SearchResult  style={{paddingTop:'100px'}} queues = {this.state.searchResult}/>
                          </div>
                     
                     
                       
             </div>
    );
  }
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(User) ;















