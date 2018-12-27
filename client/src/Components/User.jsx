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
import logo from '../style/qline.png';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Router,Link } from 'react-router-dom';

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

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/profile' />
  //   }
  // }
 


  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  // routeChange = (props) => {
  //   console.log("hiiii", this.props);
  //   let path = 'profile';
  //   console.log("helllllo", browserHistory);
  //   browserHistory.push(path);

  // };


  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <AppBar position="static" className={classes.color}>
          <Toolbar  >
            <img src={logo} width="122px" height="62px" style={{ backgroundColor: "#aa1256", marginTop: "10px", marginLeft: "-20px" }} />

            {auth && (
              <div>
                <IconButton style={{ marginLeft: "1400px" }}
                 href="/profile"
                >
                  <AccountCircle />
                </IconButton>

                {/* <Menu
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
                > */}
                  {/* <div>
                    <Link to={{ pathname: "/profile" }}>
                    
                    <button href="/profile" >Profile</button>
                    </Link>
                  </div> */}
                {/* </Menu> */}
              </div>
            )}
            <Button color="inherit" href="/">Log Out</Button>
          </Toolbar>
        </AppBar>


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















