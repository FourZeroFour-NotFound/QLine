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
import logo from '../style/qline1.jpg';
import SearchIcon from '@material-ui/icons/Search';

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
  icon: {
    marginLeft:1000,
    // marginRight:500,
   
  }
});


class User extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <AppBar position="static" className={classes.color}>
          <Toolbar>
            {/* <div position="static" className={classes.grow}>
              <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
              }} className="menu__logo">QLine</h1>
            </div> */}
            {auth && (
              <div>
                <IconButton className={classes.icon}
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                
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
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            <Button color="inherit">Log Out</Button>
          </Toolbar>
        </AppBar>


        <FormGroup>
          <FormControlLabel
            control={
              <Switch    checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Users' : 'Business'}
          />
          {auth && (
 <div className="searchbar">
 <input className="search_input" type="text" name placeholder="Search..." />
 <a className="search_icon">
 <SearchIcon/></a>
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




export default withStyles(styles)(User);















