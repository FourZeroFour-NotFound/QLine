import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Confirmation from './Confirmation.jsx';
import $ from 'jquery';


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

    button: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  });

class PopBox extends Component  {

  // this function to open the  ticketList arrow  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    
      TicketList:[],
    expanded: false,
    open: false,
    open1: false,
    img: null,
  };
  /* send data after edit the information*/
  

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

  componentDidMount () {
    var that = this
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


  render () {
  return (
    <Card className="cardpop">
      <CardActionArea>
      <div>
             <Button onClick={this.handleExpandClick} variant="outlined" style={{color:"white", backgroundColor: "#aa1256", borderRadius: "5px", width: "200px", marginTop:"20px", marginLeft: "50px"}}>MY TICKET</Button>
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
                  open={this.state.open1}
                  onClose={this.handleClose}
                  cancel={this.handleClickListItem.bind(this)}
                  onDelete={this.onDelete.bind(this,ticket.queue_id)}
                />
                 </ListItem>))}
               </List>
            </CardContent>
          </Collapse>
        </div>
      </CardActionArea>
    </Card>
  );
}
}
PopBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopBox);

