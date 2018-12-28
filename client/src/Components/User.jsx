import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import sampleProductList from '../sampleProductList';
import {GridListTileBar, Typography, CardContent } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';




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
  
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };


  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
  

    return (
            <div>
              <nav className="menu" style={{backgroundColor: "#aa1256", marginTop: "10px", marginLeft: "50px"}}>
                        <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                        <Grid>
                        <FormControlLabel
                          control={
                            <Button href="/business" style={{backgroundColor: "#7aeac2"}} checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" >Business</Button>
                          }
                          label={auth ? 'Users' : 'Business'}
                        />
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
                        <img src={flat} style={{ width: "100%", height: "100%"}}/>
                        <div class="wrap">
                          <div class="search">
                              <input type="text" class="searchTerm"  placeholder="Search..."/>
                              <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                          </div>
                          </div>
                        <Button color="inherit" href="/">Log Out</Button>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                          }
                          label={auth ? 'Users' : 'Business'}
                        />
                        {auth && (
                          <div className="searchbar">
                            <input className="search_input" type="text" name placeholder="Search..." />
                            <a className="search_icon">
                              <SearchIcon /></a>
                          </div>
                        )}
                      </FormGroup>
             </div>
    );
  }
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(User) ;















