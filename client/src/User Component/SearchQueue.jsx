import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';


const styles = theme => ({
  media: {
    height: 190,
    width: '100%',
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
      allusers: [],
    }
  }


  //this function to handel conferm button it will add user to queue
  addUser = () => {
    console.log(this.state.allqueue.accept_join)
    //this will chick if the queue have wating list to be confirm from the manger of queue or add him directly to the queue
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
          alert("You Joined The Queue Successfully ")
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
          alert("You Joined the Waiting List Successfuly")
        }
      });
    }
    this.setState({ open1: !this.state.open1 });
    this.setState({ open: !this.state.open });
  }

  componentWillMount = () => {

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

      }
    });
  }


  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick = () => {
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

      }
    });



    var start = this.props.queue.start_time.split(":00.")

    var end = this.props.queue.end_time.split(":00.")
    var date = this.props.queue.date.split("T")
    var numberofmintinallday = (Number(end[0].split(":")[0]) * 60 + Number(end[0].split(":")[1])) - (Number(start[0].split(":")[0]) * 60 + Number(start[0].split(":")[1]))
    var remaningTicits = (((numberofmintinallday / this.state.allqueue.timeforone) * this.state.allqueue.windows) - this.state.allusers.length)

    if (remaningTicits > 0) {
      this.setState({ open1: !this.state.open1 });
    } else {
      alert("this queue is full try later")
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
  var estmatedTime = ()=>{ if ( Math.floor(this.state.allusers.length/this.state.allqueue.windows)* Number(this.state.allqueue.timeforone) < this.state.allqueue.timeforone){return 0}else{return Math.floor(this.state.allusers.length/this.state.allqueue.windows)* Number(this.state.allqueue.timeforone) }}

 var theestmatedtimeH = Math.floor((( (this.state.allusers.length/this.state.allqueue.windows) * this.state.allqueue.timeforone)/60))
 var theestmatedtimeM =  ((this.state.allusers.length/this.state.allqueue.windows )* this.state.allqueue.timeforone)%60
if (((theestmatedtimeH*60)+theestmatedtimeM)<(this.state.allqueue.timeforone *this.state.allqueue.windows)){
  theestmatedtimeH=0
  theestmatedtimeM=0
}
    const { classes } = this.props;
    return (
      <div>
        <Card className="card2">
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
                {this.props.queue.nameOfQueeu}
              </Typography>
            <CardContent>
            <CardMedia
              style={styles.media}
              image={this.props.queue.imgUrl}
            />
              <Typography style={{paddingBottom: 50, marginTop: "20px"}} variant="h7" component="p">
                {"Start Time: " + start[0]}<br />
                {"End Time: " + end[0]}<br />
                {"Date: " + date[0]}<br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button onClick={this.handleClickOpen}
            style={{ backgroundColor: "#aa1256", marginTop: "90px", marginLeft: "200px", font: "white" }}>
             Join / More Details
             
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
                {"Number of people in line now:" + this.state.allusers.length}<br />
                {"the estimated time until finish:   " + estmatedTime()  +" minutes" }<br />
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