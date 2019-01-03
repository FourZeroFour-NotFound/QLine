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


 
        onDelete =(queue_id) =>{
          $.ajax({
                  url: "/confirm",
                  type : "DELETE",
                  contentType : 'application/json',
                  data : JSON.stringify({'queue_id' :this.state.TicketList.queue_id}),
                  success: function (data) {
                    window.localStorage.setItem("DeleteInfo", data)
                    console.log("delelte", data);
                  console.log("deleeeeet",this.props.ticket);
    
                  },
                  error: function (error) {
                    console.error("dont delete", error);
                  }
              });
     console.log("deleeeeet",this.props);

        }
     
        
 

  render() {
    const { classes } = this.props;
    return (
      // navbar place
     
      <div className="prof">
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <div position="static" className={classes.grow}>
              <img src={logo} width="122px" height="62px" style={{ marginTop: "10px", marginLeft: "-20px" }} />
            </div>
            <Button color="inherit" href="/user">Log Out</Button>
          </Toolbar>
        </AppBar>
        <Card className="card33">
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
               QLine
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
            <li>First Name : {this.state.firstName}</li>
              <li>Last Name : {this.state.lastName}</li>
              <li>Email : {this.state. email}</li>
              <li>Phone Num : {this.state.phoneNumber}</li>
            </ul>
          </CardContent>

          <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Edit
        </Button>
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
                </ListItem>))}

                <Confirmation
                  classes={{
                    paper: classes.paper,
                  }}
                  open={this.state.open1}
                  onClose={this.handleClose}
                  cancel={this.handleClickListItem.bind(this)}
                  onDelete={this.onDelete.bind(this)}
                />
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


export default withStyles(styles)(Profile);