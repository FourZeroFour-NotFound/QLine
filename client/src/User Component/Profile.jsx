import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Confirmation from './Confirmation.jsx';
import $ from "jquery";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {Grid, CardActionArea, Typography} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../style/App.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import logo from '../style/qlinewhite.png';
import { Router, Route, browserHistory } from 'react-router';
import sample from '../style/sample.jpg';
import gradient from '../style/gradient.png';
import backgroundpic from '../style/backgroundpic.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  color: {
    background: 'transparent'
  },
  media: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  media1: {
    height: 300
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
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    
      TicketList:[],
    expanded: false,
    open: false,
    open1: false
  };
  /* send data after edit the information*/
  EditInfo = () => {
    const InfObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    }

    $.ajax({
      url: "/profile",
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
    this.setState({ open: false });
  };

   /*when edit full name call the function */
   handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleChangeLast = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
 
  /* when edit phone number call this function*/
  handleChangeNum = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  };


  handleClose = () => {
    this.setState({ open: false });
  };

// this function to open the  ticketList arrow  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  /*  these functions for ticket list elements*/
  handleClickListItem = () => {
    console.log("jjjjjj")
    this.setState({ open1: !this.state.open1 });
  };

  handleClose = value => {
    console.log('value', value)
    this.setState({ value, open: false });
  };
// this function used to get data for user using id
  componentDidMount = () =>{
    var that = this
    $.ajax({
      url: "/profile",
      type: "Get",
      success: function (data) {
        console.log("kkkkk", data.success[0])
        that.setState({firstName: data.success[0].firstName,
        lastName: data.success[0].lastName,
        email: data.success[0].email,
        phoneNumber: data.success[0].phoneNumber,
        })
      }
    });
    // this request used to get all tickets for user using id  
    $.ajax({
      url: "/ticket1",
      type: "Get",
      success: function (data) {
        console.log("tttttt", data.success)
      that.setState({
        TicketList:data.success
      })
        
      }
    });


  }

// this function used to delete items from ticket list in profile by using queue_id 
 
        onDelete =(queue_id) =>{
          console.log("deleeeeet",queue_id);

          $.ajax({
                  url: `/confirm/${queue_id}`,
                  type : "DELETE",
                  contentType : 'application/json',
            
                  success: function (data) {
                    window.localStorage.setItem("DeleteInfo", data)
                    console.log("delelte", data);
    
                  },
                  error: function (error) {
                    console.error("dont delete", error);
                  }
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
    const { classes } = this.props;
    return (
      // navbar place
      <div className="back">
      <img src={gradient} width="100%" height="100%"/>
        <div className="prof">

         <nav className="menu5"  style={{backgroundColor: "transparent", width:"1500px", marginTop: "10px", marginLeft: "-150px"}}>
                            <img src={logo} width="122px" height="62px" style={{marginTop: "1px", marginLeft: "-20px"}}/>
                            <Grid className="menu__right">
                                <ul className="menu__list">
                                <li class="menu__list-item"><a  style={{color: "white"}} class="menu__link" href="/user">Search</a></li>
                                <li class="menu__list-item"><a  style={{color: "white"}} class="menu__link" href="/">Logout</a></li>
                                </ul>
                            </Grid>
                        </nav>   
        <Card className="newCard">
            < img className="media12"
         src={backgroundpic}/>
         <CardContent>
            <ul className="order" style={{marginLeft: "450px", marginTop: "-210px", color: "white"}}>
            <li><h1>{this.state.firstName}</h1></li>
              <li><h1>{this.state.lastName}</h1></li>
              <li>{this.state. email}</li>
              <li>{this.state.phoneNumber}</li>
              <Button variant="outlined" style={{color:"white", border: "1px solid white", borderRadius: "999px", width: "100px"}} onClick={this.handleClickOpen}>
              Edit
        </Button>
            </ul>
          </CardContent>
          <CardActionArea>
            <CardContent style={{width: "300px", marginLeft: "40px", marginTop: "520px"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Queue Management System
              </Typography>
              <Typography component="p">
              This ‘waste of time’ might seem as inevitable as having to sleep, or having lunch, but with QLine, 
              you can reclaim those wasted hours and use them more productively, to benefit yourself. Get started today!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card33">
          <CardMedia
            className={classes.media}
         image={sample}

          />

          <CardActions className={classes.actions} disableActionSpacing>
            <Dialog
              open={this.state.open}
            >

              <DialogContent>
                <DialogContentText>
                  <h2>Edit Information</h2>
                </DialogContentText>

                <TextField
                  id="filled-name"
                  label=" First_Name"
                  className={classes.textField}
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="filled-name"
                  label=" Last_Name"
                  className={classes.textField}
                  value={this.state.lastName}
                  onChange={this.handleChangeLast}
                  margin="normal"
                  variant="filled"
                  fullWidth
                />
               
                <TextField
                  margin="normal"
                  id="name"
                  label="Phone Num"
                  type="text"
                  className={classes.textField}
                  value={this.state.phoneNumber}
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
              style={{marginLeft: "-100px"}}
              className={classnames(classes.expand, {
                //  [classes.expandOpen]: this.state.expanded,
              })}
               onClick={this.handleExpandClick}
              aria-label="Show more"
            > your tickets 
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2>Ticket List:</h2>
              <List>

              {this.state.TicketList.map((ticket) => (
             <ListItem key = {ticket.nameOfQueeu} ticket = {ticket.nameOfQueeu}
                  button
                  divider
                  aria-haspopup="true"
                  aria-label={ticket}
                  onClick={this.handleClickListItem}
                >
          
                  < ListItemText primary={ticket.nameOfQueeu} /> 
               

                <Confirmation
                  classes={{
                    paper: classes.paper,
                  }}
                  open={this.state.open1}
                  onClose={this.handleClose}
                  cancel={this.handleClickListItem.bind(this)}
                  onDelete={this.onDelete.bind(this,ticket.queue_id)}
                />
                 </ListItem>))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
    
    );
  }
}



Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Profile);