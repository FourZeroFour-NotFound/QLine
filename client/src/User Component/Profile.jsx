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
import mountain from '../style/mountain.png';
import backgroundpic from '../style/backgroundpic.png';
import PhotoAddforProf from './photoAddforProf.jsx';
import PopBox from './popBox.jsx';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import GridList from '@material-ui/core/GridList';



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
    user_id:"",
    user_queue:[],
    TicketList:[],
    expanded: false,
    open: false,
    open1: false,
    img: null,
    clicks: 0,
    show: true,
    name2 :[]
  };
  /* send data after edit the information*/
  EditInfo = (e) => {
    this.onFormSubmit(e)
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
      url: "/profile_info",
      type: "Get",
      success: function (data) {
        console.log("kkkkk", data.success[0])
        that.setState({firstName: data.success[0].firstName,
        lastName: data.success[0].lastName,
        email: data.success[0].email,
        phoneNumber: data.success[0].phoneNumber,
        user_id: data.success[0].user_id
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
    }).then( ()=>{
      for(var i = 0 ; i<this.state.TicketList.length ;i++){
          $.ajax({
            url: '/getQueueInfo',
            type: "Post",
            contentType : 'application/json',
            data: JSON.stringify({queue_id:this.state.TicketList[i].queue_id}),
            success:  (data) => {
          console.log("queue Info", data.data[0].nameOfQueeu)
             
             this.setState(previousState => ({
              name2: [...previousState.name2, data.data[0].nameOfQueeu]
          }));
            }
          
          })}
          
          
          
          
          ;}
          )
          console.log(this.state.name2)


  }

// this function used to delete items from ticket list in profile by using queue_id 
 
        // onDelete =(queue_id) =>{
        //   console.log("deleeeeet",queue_id);

        //   $.ajax({
        //           url: `/confirm/${queue_id}`,
        //           type : "DELETE",
        //           contentType : 'application/json',
            
        //           success: function (data) {
        //             window.localStorage.setItem("DeleteInfo", data)
        //             console.log("delelte", data);
    
        //           },
        //           error: function (error) {
        //             console.error("dont delete", error);
        //           }
        //       });
 
        // }
     
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

 
  getImg(Img) {
    this.setState({ img: Img })
  };

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.img);
    console.log(this.img)
  }

  // addItems(formData) {
  //   this.props.addItems(formData);
  // }

  IncrementItem = () => {
    this.setState({ 
      clicks: this.state.clicks + 1,
      show: !this.state.show
    });
  }


  render() {
    const { classes } = this.props;
    return (
      // navbar place
    <div>
      <div className="back">
        <div className="prof">
         <nav className="menu7">
                            <Grid className="menu__right">
                                <ul className="menu__list">
                                <li class="menu__list-item"><a  style={{color: "white"}} class="menu__link" href="/user">Search</a></li>
                                <li class="menu__list-item"><a  style={{color: "white"}} class="menu__link" href="/">Logout</a></li>
                                </ul>
                            </Grid>
                        </nav>  
                        <img src={mountain} className="mountain" /> 
        <Card className="newCard" style={{backgroundColor: "#ccc"}}>
         <CardContent>
            <ul className="order" style={{marginLeft: "450px", marginTop: "170px", color: "white", position: "absolute"}}>
            <li><h1>{this.state.firstName}</h1></li>
              <li><h1>{this.state.lastName}</h1></li>
              <li>{this.state. email}</li>
              <li>{this.state.phoneNumber}</li>
              </ul>
              <Button variant="outlined" style={{color:"white", border: "1px solid white", borderRadius: "999px", width: "100px", marginLeft: "450px", marginTop: "330px"}} onClick={this.handleClickOpen}>
              Edit
             </Button>
          </CardContent>
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
                   {/* <PhotoAddforProf getImg={this.getImg.bind(this)} /> */}
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
              <Button onClick={this.IncrementItem} style={{width: "200px",color:"rgba(0, 0, 0, 0.5);", backgroundColor: "white", border: "1px solid white", borderRadius: "999px", marginTop: "-70px", marginLeft: "50px"}}>
                FOLLOW {this.state.firstName}
              </Button>
              <i style={{width: "40px", height:"40px",color:"white", border: "1px solid white", borderRadius: "999px", marginTop: "-70px", marginLeft: "12px", padding: "5px"}} class="fa fa-ellipsis-h fa-2x"></i>
          </CardActions>
          <div>
          <h4 style={{marginLeft: "20px"}}>About</h4>
          <p style={{marginLeft: "30px", textAlign: "left", width: "280px"}}>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. 
            I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise 
            in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face. </p>
          </div>
            <h5 style={{marginLeft: "30px", marginTop: "80px"}}>FOLLOWERS<span style={{marginLeft: "155px", marginTop: "100px"}}>{ this.state.clicks }</span></h5>
            <h5 style={{marginLeft: "30px",marginTop: "20px"}}>FOLLOWING<span style={{marginLeft: "160px"}}>4</span></h5>
            <h5 style={{marginLeft: "30px",marginTop: "20px"}}>TICKETS<span style={{marginLeft: "185px"}}>{this.state.TicketList.length}</span></h5>
          </Card>
          <GridList cols={3}>
          <PopBox/>
          </GridList>
          <Widget/>
      </div>
    </div>
  </div>
    );
  }
}



Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Profile);



{/* <List>

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
</List> */}