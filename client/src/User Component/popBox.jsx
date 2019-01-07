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

class PopBox extends Component {


  state = {
    TicketList: [],
    expanded: false,
    name2: [{
      accept_join: 1,
      creator_id: 1,
      date: "2019-01-02T22:00:00.000Z",
      end_time: "20:00:00.000000",
      imgUrl: "",
      nameOfQueeu: "loading...",
      queue_id: 9,
      requierment: "false",
      start_time: "07:30:00.000000",
      take_premum: 0,
      timeforone: "10",
      windows: "5"
    }],
    numUser: [[], [], [], [], [], [], [], [], [], []],
    TicketListid: []
  };

  // this function to open the  ticketList arrow  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
// this function to render  for user all his tickets
  componentDidMount() {
    var that = this
    $.ajax({
      url: "/ticket1",
      type: "Get",
      success: function (data) {
        console.log("tttttt", data.success)
        that.setState({
          TicketList: data.success
        })
        // make array of queue id only for each ticket  
        var arr = []
        for (var i = 0; i < data.success.length; i++) {
          arr.push(data.success[i].id)
        }
        that.setState({
          TicketListid: arr
        })
        that.setState({
          name2: []
        })
        // // make iterate through all tickets that we have to save all the queue details for each ticket
         // we uses it to show the name of the queue for this ticket
        for (var i = 0; i < that.state.TicketList.length; i++) {
          $.ajax({
            url: '/getQueueInfo',
            type: "Post",
            contentType: 'application/json',
            data: JSON.stringify({ queue_id: that.state.TicketList[i].queue_id }),
            success: (data) => {
              console.log("queue Info", data.data[0].nameOfQueeu)

              that.setState(previousState => ({
                name2: [...previousState.name2, data.data[0]]
              }))
              console.log("name of name", that.state.name2);
            }

          })
          that.setState({
            numUser: []
          })
          $.ajax({// make request to get all the users in specific queue to show the user how many clients before him 
            url: '/get-users-in-queue',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              queueid: that.state.TicketList[i].queue_id,
            }),
            success: (data) => {
              var arrr = []

              for (var j = 0; j < data.success.length; j++) {
                arrr.push(data.success[j].id)
              }



              that.setState(previousState => ({
                numUser: [...previousState.numUser, arrr]
              })

              )
              console.log("thattttt", that.state.numUser)
            }
          })
        }
      }
    });

  }



  render() {
// this function if the user wants to delete (cancel) one of his ticket 
// 
    var onDelete = (queue_id) => {
      console.log("deleeeeet", queue_id);
      var that = this

      $.ajax({
        url: `/confirm/${queue_id}`,
        type: "DELETE",
        contentType: 'application/json',

        success: function (data) {

          console.log("delelte", data);

          $.ajax({// rerun all the functions in didamount  to update the page after delete 
            url: "/ticket1",
            type: "Get",
            success: function (data) {
              console.log("tttttt", data.success)
              that.setState({
                TicketList: data.success
              })
              var arr = []
              for (var i = 0; i < data.success.length; i++) {
                arr.push(data.success[i].id)
              }
              that.setState({
                TicketListid: arr
              })
              that.setState({
                name2: []
              })
              for (var i = 0; i < that.state.TicketList.length; i++) {
                $.ajax({
                  url: '/getQueueInfo',
                  type: "Post",
                  contentType: 'application/json',
                  data: JSON.stringify({ queue_id: that.state.TicketList[i].queue_id }),
                  success: (data) => {
                    console.log("queue Info", data.data[0].nameOfQueeu)

                    that.setState(previousState => ({
                      name2: [...previousState.name2, data.data[0]]
                    }))
                    console.log("name of name", that.state.name2);
                  }

                })
                that.setState({
                  numUser: []
                })
                $.ajax({
                  url: '/get-users-in-queue',
                  type: 'POST',
                  contentType: 'application/json',
                  data: JSON.stringify({
                    queueid: that.state.TicketList[i].queue_id,
                  }),
                  success: (data) => {
                    var arrr = []

                    for (var j = 0; j < data.success.length; j++) {
                      arrr.push(data.success[j].id)
                    }



                    that.setState(previousState => ({
                      numUser: [...previousState.numUser, arrr]
                    })

                    )
                    console.log("thattttt", that.state.numUser)
                  }
                })
              }
            }
          });

        },
        error: function (error) {
          console.error("dont delete", error);
        }
      });

    }// function to push user ticket to the end of the queue 
    var delay = (ticket, id) => {

      $.ajax({// create new tiket for him at the end of the queue
        url: '/add-userto-queue',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({

          queueid: ticket.queue_id,
          notes: "after delay"

        }),
        success: (data) => {


        }
      });

// call delete function to delete the ticket and update the page 
      onDelete(id)



    }
    const { classes } = this.props;
//this function to render the name of the tickets
    var name = (i) => {
      if (this.state.name2.length <= i) {
        return 'loading'
      } else {
        return this.state.name2[i].nameOfQueeu
      }
    }
    // this function to know the place of user in the queue and to know how many clients before him and calculate the time for him
    var numOfUser = (i, id) => {
      if (this.state.numUser[i] == undefined) {
        return "loding ..."
      } else {
        return this.state.numUser[i].indexOf(id)
      }
    } 
    // this function to get the time for each client 
    var timeForOne = (i) => {
      if (this.state.name2[i] !== undefined) { return this.state.name2[i].timeforone }
    }
    return (
      <div className="cardpop">
        <Button onClick={this.handleExpandClick} variant="outlined" style={{ color: "white", backgroundColor: "#aa1256", borderRadius: "5px", width: "200px", marginTop: "20px", marginLeft: "50px" }}>MY TICKET</Button>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>


            <GridList cols={3} >
              {this.state.TicketList.map((ticket, i) => (

                <Card style={{ margin: "5px", width: "500px", height: "400px" }} >
                  <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2" style={{ color: "defult" }}>
                    {/* render the name of the ticket */}
                      <h2>{name(i)} </h2>

                    </Typography>
                    <CardContent>
                      <CardMedia />
                      <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }} >{ticket.id}</Avatar>
                      <Typography styles={{ paddingBottom: 50, }} variant="h7" component="p">
                        <h2>estmated time : {timeForOne(i) * numOfUser(i, ticket.id)} minutes</h2>
                        <h2> clients befor u : {numOfUser(i, ticket.id)}
                        </h2>
                        <h2> user notes  : {ticket.Notes} </h2>
                        <Button styles={{ lineHeight: 1.5, margin: 10, padding: 10, border: 10, }} variant="contained" onClick={() => { onDelete(ticket.id) }} color="primary" type="submit">
                          Delete
                            </Button>
                        <Button styles={{ lineHeight: 1.5, margin: 10, padding: 10, border: 10, }} variant="contained" onClick={() => { delay(ticket, ticket.id) }} color="primary" type="submit">
                        delay
                            </Button>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  </CardActions>
                </Card>
              ))}


            </GridList>


          </CardContent>
        </Collapse>
      </div>
    );
  }
}
PopBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopBox);

