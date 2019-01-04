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
import {Link} from 'react-router-dom';
import $ from "jquery";
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
    width: "600px",
    height: "350px",
    margin: 7,

  },
  media: {
    height: 120,
    maxWidth: 120,
    marginLeft : 415,
  },
};


export default class BusinessQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      allusers:[],
      allusersinqueue :[]
    }
  }



  componentDidMount(match){
    
  
    $.ajax({
      url: '/get-users-in-waitingList',
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
  
    

    $.ajax({
      url: '/get-users-in-queue',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        queueid: this.props.queue.queue_id,
      }),
      success: (data) => {

        this.setState({
          allusersinqueue: data.success
        })

      }
    })

    }



    delete = ()=>{

      $.ajax({
        url: '/deletequeueA',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          id: this.props.queue.queue_id,
        }),
        success: (data) => {
     
     
        }
      });

      $.ajax({
        url: '/deletequeueB',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          id: this.props.queue.queue_id,
        }),
        success: (data) => {
     
     
        }
      });
      $.ajax({
        url: '/deletequeue',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          id: this.props.queue.queue_id,
        }),
        success: (data) => {
      alert("deleted")
     
        }
      });

  }



  render() {
  
    var acept = (x)=>{if (x==0){return "yes"+ " / "+ this.state.allusers.length + " customer in waiting list"}else{return "no"}}
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
              <Typography  style={{paddingBottom: 50,}} variant="h7" component="p">
              {"custumers in queue now  :  " + this.state.allusersinqueue.length}<br />
                {"Start Time :  " + this.props.queue.start_time.split(":00.")[0]}<br />
                {"End Time :  " + this.props.queue.end_time.split(":00.")[0]}<br />
                {"Date :  " + this.props.queue.date.split("T")[0]}<br />
                {"The time for each customer :  " + this.props.queue.timeforone}<br />
                {"Number of windows :  " + this.props.queue.windows}<br />
                
                {/* {"Premium permission :  " + acept(this.props.queue.take_premum)}<br /> */}
                {"Accept customers :  " + acept(this.props.queue.accept_join) }<br />
                {"The requirements for attending this queue :  " + this.props.queue.requierment}<br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button href = {`/BusinessDashBord/${this.props.queue.queue_id}`}
            style={{ backgroundColor: "#7aeac2", marginTop: "180px", marginLeft: "400px", font: "white" }}>
              Manage
             
        </Button> 
        <Button 
            onClick={this.delete}
          
            style={{ backgroundColor: "#aa1256", marginTop: "180px", marginLeft: "20px", font: "white" }}>
              delete
             
        </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}