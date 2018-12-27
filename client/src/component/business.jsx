import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {Grid} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import BusinessGridList from './businessGridList.jsx';
import logo from '../style/qline.png';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  uper: {
    backgroundColor: "#7aeac2",
  },
  card: {
    width: "500px",
    height: "250px",
    margin: 7,

  },
  media: {
    height: 50,
    maxWidth: 50,
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

export default class business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      queues:[]
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


  render() {
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
         <nav className="menu"  style={{backgroundColor: "#7aeac2",marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                <FormControlLabel style={{marginTop: "-5px" , marginLeft: "-70px"}}
            control={
              <Switch  href="/user" checked={auth} onChange={this.handleChange} aria-label="RoleSwitch" />
            }
            label={auth ? 'Business' : 'User'}
          />
                <Grid className="centerNav">
                    <ul className="centerNavMenu">
                    <li className="menuItem"><a className="itemLink">Home</a></li>
                    <li className="menuItem"><a className="itemLink">Features</a></li>
                    <li className="menuItem"><a className="itemLink">Contact Us</a></li>
                    
                    </ul>
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><a  class="menu__link" href="/">Logout</a></li>
                    </ul>
                </Grid>
            </nav>
            <div style={styles.root}>
        <FormGroup>
          {auth && (
            <div>
            <Button
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
            size="large" style={{ backgroundColor: "#7aeac2", marginLeft: "1500px", font: "white", marginTop: "200px"}} >
            + Create New Queue
            </Button>
              <BusinessGridList/>
              </div>
        )}
        </FormGroup>
      </div>
      </div>
    );
  }
}

