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
      <div className={classes.root}>

        <AppBar position="static" className={classes.color}>
          <Toolbar  >
            <img src={logo} width="122px" height="62px" style={{ backgroundColor: "#aa1256", marginTop: "10px", marginLeft: "-20px" }} />

            {auth && (
              <div>
                <IconButton style={{ marginLeft: "1400px" }}
                  color="inherit"
                  href="/profile"
                >
                  <AccountCircle />
                </IconButton>

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















