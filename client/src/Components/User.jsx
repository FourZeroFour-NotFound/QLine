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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import '../style/App.css';
import {Link} from 'react-router';
import logo from '../style/qline.png';
import {Grid} from '@material-ui/core';
import flat from '../style/flat.png';
import axios from 'axios'


//User Profille Component that interact once the User is sign in normally and wants normal service such as search for queues
// here we want to implement using API in order for user to have option for using our services
// API search is used in the search bar passed and save with server interaction and database.
const styles = () => ({

  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  color: {
    backgroundColor: '#aa1256',
  },
});


class User extends Component {
  constructor(props) {
    super(props);
      this.state = {
        auth: true,
        anchorEl: null,       
      };
  }


  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = address => {
    this.setState({ address });
  };
 


  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
<div>
      <nav className="menu" style={{backgroundColor: "#aa1256", marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                <Grid>
                <FormControlLabel
                  control={
                    <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
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

                    {auth && (
              <div>
                
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                </Menu>
              </div>
            )}
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <Button href="/profile" color="inherit" style={{width: "70px", marginRight: "10px"}}>
                    <AccountCircle /><a href="/profile">Profile</a>
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
      </div>
      
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(User);















