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
import Popup from "reactjs-popup";
import $ from 'jquery';
import Avatar from '@material-ui/core/Avatar';
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



  render () {
    var onDelete =(queue_id) =>{
      console.log("deleeeeet",queue_id);
      var that = this

      $.ajax({
              url: `/confirm/${queue_id}`,
              type : "DELETE",
              contentType : 'application/json',
        
              success: function (data) {
            
                console.log("delelte", data);
            
                $.ajax({
                  url: "/ticket1",
                  type: "Get",
                  success: function (data) {
                   
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

              },
              error: function (error) {
                console.error("dont delete", error);
              }
          });

    }
    const { classes } = this.props;
    var time = (queue_id) => {
      var x = 0
            $.ajax({
              url: '/get-users-in-queue',
              type: "Post",
              contentType : 'application/json',
              data: JSON.stringify({queueid:queue_id}),
              success:  (data ) => {
            console.log("queue ticket", data)
               for(var i= 0; i<data.data.length; i++){
                 console.log( "dataaaa",data.data[i].user_id)
                  console.log("this.state.user_id ",this.state.user_id )
                 if(data.data[i].user_id !== this.state.user_id ){
                 x++
                   console.log("xxxxxxxxxx",x)
                 }else{
                   i = 10000000000
                 }
               }
              }
            
            });
       return x
          }
  return (
    <Card className="cardpop">
      <CardActionArea>
      <div>
             <Button onClick={this.handleExpandClick} variant="outlined" style={{color:"white", backgroundColor: "#aa1256", borderRadius: "5px", width: "200px", marginTop:"20px", marginLeft: "50px"}}>MY TICKET</Button>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
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
                  <GridList cols={1} >
       {this.state.TicketList.map((ticket,i) => (

<Card style={{margin : "5px", width:"100%", height: "400px"}} >
           <CardActionArea>
           <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
               {/* <h2>{this.state.name2[i]} </h2> */}
              
               </Typography>
             <CardContent>
             <CardMedia />
             <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }} >{ticket.id}</Avatar>
               <Typography  styles={{paddingBottom: 50,}} variant="h7" component="p">
               <h2> Estimated time: {(time(ticket.queue_id)/ticket.windows)*ticket.timeforone} </h2>
               <h2> user notes  :  </h2>
               <Button  styles={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" onClick= {()=>{onDelete(ticket.id)}} color="primary" type="submit">
                              Delete 
                            </Button>
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           </CardActions>
         </Card>
          ))}

       
            </GridList>
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

