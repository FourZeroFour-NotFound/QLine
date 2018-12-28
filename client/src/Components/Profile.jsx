import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import $ from "jquery";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from '../style/qline.png';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  color: {
    background: '#a077a7'
  },
  card: {
    maxWidth: 800,
    marginLeft: 400,
    marginTop: 100,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 400,
    [theme.breakpoints.up('md')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],

  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },



});

class Profile extends Component {
  state = {
    First_name: '',
    Last_name: '',
    Email: '',
    PhoneNum: '',
    expanded: false,
    open: false,
    open1: false
  };
  /* send data after edit the information*/
  EditInfo = () => {
    const InfObj = {
      First_name: this.state.First_name,
      Last_name: this.state.Last_name,
      Email: this.state.Email,
      PhoneNum: this.state.PhoneNum
    }

    $.ajax({
      url: "/profile/:id",
      type: "Put",
      data: JSON.stringify(InfObj),
      contentType: "application/json",
      success: function (data) {
        window.localStorage.setItem("EditInfo", data)
        console.log("send", data);
      },
      error: function (error) {
        console.error("dont send", error);
      }
    });
  };

  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  /*when edit full name call the function */
  handleChange = (e) => {
    this.setState({
      First_name: e.target.value,
    });
  };
  handleChangeLast = (e) => {
    this.setState({
      Last_name: e.target.value,
    });
  };
  /* when edit email call this function*/
  handleChangeEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  /* when edit phone number call this function*/
  handleChangeNum = (e) => {
    this.setState({
      PhoneNum: e.target.value,
    });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  /*  these functions for ticket list elements*/
  handleClickListItem = () => {
    this.setState({ open1: !this.state.open1 });
  };

  handleClose = value => {
    this.setState({ value, open: false });
  };

  componentDidMount = () =>{
   var that = this
    $.ajax({
      url: "/profile",
      type: "Get",
      success: function (data) {
        console.log("kkkkk", data.success[0])
        that.setState({First_name: data.success[0].firstName,
        Last_name: data.success[0].lastName,
        Email: data.success[0].email,
        PhoneNum: data.success[0].phoneNumber,
        })
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      // navbar place
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <div position="static" className={classes.grow}>
              <img src={logo} width="122px" height="62px" style={{ marginTop: "10px", marginLeft: "-20px" }} />
            </div>
            <Button color="inherit" href="/">Log Out</Button>
          </Toolbar>
        </AppBar>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
            </Avatar>
            }

            title="Welcome"

          />
          <CardMedia
            className={classes.media}
            image="http://lorempixel.com/200/200/people/9/"

          />
          <CardContent>
            <ul className="order">
              <li>First Name : {this.state.First_name}</li>
              <li>Last Name : {this.state.Last_name}</li>
              <li>Email : {this.state. Email}</li>
              <li>Phone Num : {this.state.PhoneNum}</li>
            </ul>
          </CardContent>

          <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Edit
        </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >

              <DialogContent>
                <DialogContentText>
                  <h2>Edit Information</h2>
                </DialogContentText>

                <TextField
                  id="filled-name"
                  label=" First_Name"
                  className={classes.textField}
                  value={this.state.First_name}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="filled-name"
                  label=" Last_Name"
                  className={classes.textField}
                  value={this.state.Last_name}
                  onChange={this.handleChangeLast}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
                <TextField

                  margin="normal"
                  id="name"
                  label="Email Address"
                  type="email"
                  className={classes.textField}
                  value={this.state.Email}
                  onChange={this.handleChangeEmail}
                  variant="filled"
                  fullWidth
                />
                <TextField

                  margin="normal"
                  id="name"
                  label="Phone Num"
                  type="text"
                  className={classes.textField}
                  value={this.state.PhoneNum}
                  onChange={this.handleChangeNum}
                  variant="filled"
                  fullWidth
                />

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.EditInfo} color="primary">
                  Save
            </Button>
              </DialogActions>
            </Dialog>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2>Ticket List:</h2>
              <List>

                <ListItem
                  button
                  divider
                  aria-haspopup="true"
                  aria-controls="ringtone-menu"
                  aria-label="Phone ringtone"
                  onClick={this.handleClickListItem}
                >
                  <ListItemText primary="Arabic Bank" />
                </ListItem>

                {/* <Confirmation
                  classes={{
                    paper: classes.paper,
                  }}
                  open={this.state.open}
                  onClose={this.handleClose}

                /> */}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}



Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};





// class Confirmation extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       value: props.value,
//     };
//   }


//   handleCancel = () => {
//     this.props.onClose(this.props.value);
//   };

//   handleOk = () => {
//     this.props.onClose(this.state.value);
//   };

//   render() {
//     const { value, ...other } = this.props;
//     const { classes } = this.props;

//     return (
//       <Dialog
//         maxWidth="xs"
//         {...other}
//       >
//         <DialogTitle id="confirmation-dialog-title">Arabic Bank</DialogTitle>
//         <DialogContent>
//           <Grid container justify="center" alignItems="center">
//             <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }}>H105</Avatar>
//           </Grid>
//           <span style={{ marginTop: '50px' }}>Estimated time: 1 hour</span>
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={this.handleCancel} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={this.handleOk} color="primary">
//             Ok
//           </Button>
//           <Button onClick={this.handleOk} color="primary">
//             Delay
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   }
// }

// Confirmation.propTypes = {
//   onClose: PropTypes.func,
//   value: PropTypes.string,
// };

export default withStyles(styles)(Profile);