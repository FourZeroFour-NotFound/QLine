// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import $ from "jquery";


// Direct styling of components usage 
const styles = {
  card: {
    width: "600px",
    height: "450px",
    margin: 7,
  },
  media: {
    height: 190,
    width: '100%',
  },
};

// Component to be used in the GridList that represents a card of information of the queue managed by Creating Queue Management 
// In this part input such as the Customer in Queue , Start Time ,End Time ,Date ,Time per Customer ,No. of windows, Accept customers ,Requirements will be rendered
// in the card for Customer or user Information access to be managed
export default class BusinessQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      allusers: [],
      allusersinqueue: []
    }
  }

  componentDidMount(match){
    $.ajax({
      // request to be inputed in waitinglist page of the app to be manage by Business User/Personnel
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
      // request to get the user info in the queue to be rendered in the card
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

  delete = () => {
      $.ajax({
        // request for deletion of the created queue for Business User control
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
          alert("Deleted")
        }
      });
  }

  // DOM Queue Business Manage Card to be rendered in GridList with proper info of Users Management Creation
  // here you can see that we will show directly to the DOM the info of manage queue with the helps of the requests of the 
  // Front end to the server and to the database back to the request of the front end
  render() {
    // function that helps permission to accept user while creating optional management queue system
    var accept = (x) => {
      if ( x == 0 ) {
        return "yes" + " / " + this.state.allusers.length + " Customer in Waiting List" 
      } else {
        return "no"
      }
    }


    return (
      <div>
        {/*** Queue Management Card for GridList Component rendered in Business Main Page ***/}
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
                <Typography  style={{paddingBottom: 50, marginTop: "20px"}} variant="h7" component="p">
                    {"Customer in Queue  :  " + this.state.allusersinqueue.length}<br/>
                    {"Start Time :  " + this.props.queue.start_time.split(":00.")[0]}<br/>
                    {"End Time :  " + this.props.queue.end_time.split(":00.")[0]}<br/>
                    {"Date :  " + this.props.queue.date.split("T")[0]}<br />
                    {"Time per Customer :  " + this.props.queue.timeforone}<br/>
                    {"No. of windows :  " + this.props.queue.windows}<br/>
                    {"Accept customers :  " + accept(this.props.queue.accept_join) }<br/>
                    {"Requirements  :  " + this.props.queue.requierment}<br />
                </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href = {`/BusinessDashBord/${this.props.queue.queue_id}`}
               style={{ backgroundColor: "#7aeac2", marginTop: "350px", marginLeft: "400px", font: "white" }}>
               Manage   
            </Button> 
            <Button onClick={this.delete} style={{ backgroundColor: "#aa1256", marginTop: "350px", marginLeft: "20px", font: "white" }}>
               Delete   
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}