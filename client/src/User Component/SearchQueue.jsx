import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import $ from 'jquery';


const styles = theme => ({
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
    width: "600px",
    height: "350px",
    margin: 7,

  },
  media: {
    height: 100,
    maxWidth: 100,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    fontSize: '20px'
  }
});


export default class SearchQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      open: false,
      open1: false,
      allqueue: {},
      notes: '',
      allusers:[],
    }
  }


  //this function to handel conferm button it will add user to queue
  addUser = () => {
    console.log(this.state.allqueue.accept_join)
    //this will chick if the queue have wating list to be conferm from the manger of queue or add him directly to the queue
    if (this.state.allqueue.accept_join) {
      console.log(true)

      $.ajax({//add to the queue dirictly
        url: '/add-userto-queue',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({

          queueid: this.state.allqueue.queue_id,
          notes: this.state.notes

        }),
        success: (data) => {
          console.log(data);
          alert("u joind the queue sucssfuly ")
        }
      });

    } else {//add to waiting list
      console.log(false)

      $.ajax({
        url: '/add-waitingList',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          queueid: this.state.allqueue.queue_id,
          Notes: this.state.notes
        }),
        success: (data) => {
          console.log(data);
          alert("u joined the waiting lest sucssfuly")
        }
      });
    }
    this.setState({ open1: !this.state.open1 });
    this.setState({ open: !this.state.open });
  }

  componentDidMount = () => {

    this.setState({
      allqueue: this.props.queue
    })

    $.ajax({
      url: '/get-users-in-queue',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        queueid: this.props.queue.queue_id,
      }),
      success: (data) => {
    this.setState({
      allusers: data.data
    })
    console.log("ccccccccccccccc",this.state.allusers)
      }
    });



  }
 

  handleClickOpen = () => {

    
  this.setState({ open: !this.state.open });


  
  };

  handleClick = () => {
    var start = this.props.queue.start_time.split(":00.")
  
    var end = this.props.queue.end_time.split(":00.")
    var date = this.props.queue.date.split("T")
    var numberofmintinallday=( Number(end[0].split(":")[0])*60  + Number(end[0].split(":")[1]))  -( Number(start[0].split(":")[0])*60 + Number(start[0].split(":")[1]))
   var remaningTicits =(((numberofmintinallday/this.state.allqueue.timeforone)*this.state.allqueue.windows) - this.state.allusers.length)
     
 
 if (remaningTicits>0){
    this.setState({ open1: !this.state.open1 });
  }else{
    alert("this queue is full try leater")
  }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      notes: event.target.value,
    });
  };
  render() {
   var start = this.props.queue.start_time.split(":00.")
  
   var end = this.props.queue.end_time.split(":00.")
   var date = this.props.queue.date.split("T")
   var numberofmintinallday=( Number(end[0].split(":")[0])*60  + Number(end[0].split(":")[1]))  -( Number(start[0].split(":")[0])*60 + Number(start[0].split(":")[1]))
  var remaningTicits =(((numberofmintinallday/this.state.allqueue.timeforone)*this.state.allqueue.windows) - this.state.allusers.length)
    const { classes } = this.props;
    return (
      <div>
        <Card style={styles.card}>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
                {this.props.queue.nameOfQueeu}
              </Typography>
            <CardContent>
            <CardMedia
              style={styles.media}
              image={this.props.queue.imgUrl}
            />
              <Typography component="p">
                {"Start Time: " + start[0]}<br />
                {"End Time: " + end[0]}<br />
                {"Date: " + date[0]}<br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button onClick={this.handleClickOpen}
            style={{ backgroundColor: "#7aeac2", marginTop: "90px", marginLeft: "200px", font: "white" }}>
             Join
             
        </Button>
        <Dialog
              open={this.state.open}
            >

              <DialogContent>
                <DialogContentText>
                  <h2>    {this.state.allqueue.nameOfQueeu}</h2>
                </DialogContentText>
               {"Start Time: " + start[0]}<br />
                {"End Time: " + end[0]}<br />
                {"Date :" + date[0]}<br />
                {/* {"The time for each customer: " + this.state.allqueue.timeforone + " m"}  <br />  */}
                {"Number of windows:" + this.state.allqueue.windows}<br />
                {"Number of peaple in line now:" + this.state.allusers.length}<br />
                {"the estmated time untel they finsh:   " + Math.floor((( (this.state.allusers.length * this.state.allqueue.timeforone)/this.state.allqueue.windows)/60))+ " hours & " + ((this.state.allusers.length * this.state.allqueue.timeforone)/this.state.allqueue.windows)%60 +" minutes" }<br />
                {"Remaining tickets :" + Math.floor(remaningTicits) }<br />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleClick} color="primary">
                 Book
            </Button>

                <Dialog
              open={this.state.open1}
            >

              <DialogContent>
                <DialogContentText>
                  <h2>Requerments</h2>
                </DialogContentText>
                 <h2> The requirements for attending this queue: </h2> 
                 <h3> {this.state.allqueue.requierment}</h3><br />
                 <h4>Notes:</h4>

                   <TextField
          id="outlined-multiline-static"
          label=""
       
          rows="10"
          value={this.state.notes}
          onChange={this.handleChange}
          style={styles.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.addUser} color="primary">
                Confirm
            </Button>
              </DialogActions>
            </Dialog>
              </DialogActions>
            </Dialog>
          </CardActions>
        </Card>
      </div>
    );
  }
}