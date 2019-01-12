// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import $ from "jquery";


// direct styling of components instead going from other css file
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
    height: 100,
    maxWidth: 100,
  },
}



// component that holds Business User to accept or add Users that registers in the queue
// in the waiting list, this hold the card that renders in Business Dashboard Page
// information for the booking of the user will be posted as the Owner can control Usage of the queue
export default class oneUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      user: {}
    }
  }

  componentDidMount() {
    $.ajax({
       // users profile information to be posted in card directly with POST request
        url: "/profile1",
        type: "POST",
        data:  {id :this.props.user.user_id},
        success:  (data) =>{
           
         this.setState({user: data.success[0],
          })
        }
    }); 
  }

  add = () => {
      $.ajax({
          // request to add user in queue ince owner decided to add him in the list
          url: "/add-userto-queue1",
          type: "POST",
          contentType: 'application/json',
          data:  JSON.stringify({
                  user_id : this.props.user.user_id ,
                  queue_id : this.props.user.queue_id ,
                  notes : this.props.user.notes ,
          }),
          success:  (data) => {

          }
      });

      $.ajax({
          url: "/deleteWaiting",
          type: "POST",
          contentType: 'application/json',
          data:  JSON.stringify({
                  id : this.props.user.id ,
          }),
          success:  (data) =>{
            alert("Added Successfully") 
          }
      });
  }

  delete = () => {
        $.ajax({
          // request in deleting or rejecting user in the queue 
          url: "/deleteWaiting",
          type: "POST",
          contentType: 'application/json',
          data:  JSON.stringify({
                  id : this.props.user.id ,
          }),
          success: (data) =>{
            alert("Reject") 
          }
        });
  }

  // render in DOM with card of info of the users queue to access control weather they will be
  // added or rejected, in here you can see that we use the info we get from the request in order to render
  render() {
    var firstLast = ()=>{
      if (this.state.user.firstName){
        return "Name : " + this.state.user.firstName + " " +this.state.user.lastName
      }else{
        return "loading .."
      }
    }

    var phoneNumber = ()=>{
      if (this.state.user.phoneNumber){
        return "Phone Number : " + this.state.user.phoneNumber
      }else{
        return "loading .."
      }
    }
    var email = ()=>{
      if (this.state.user.email){
        return "Email : "+this.state.user.email
      }else{
        return "loading .."
      }
    }
    

    return (
      <div>
        {/*** Waiting List Card to be ADDED or REJECT by owner ***/}
        <Card style={styles.card}>
            <CardActionArea>
              <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
                  {firstLast()}<br/>
              </Typography>
              <CardContent>
                <CardMedia style={styles.media}/>
                <Typography variant="h6" component="p">
                  {phoneNumber() }<br/>
                  {email()}<br/>
                  {"Notes :"  + this.props.user.notes }<br/>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button 
                onClick={this.add}
                style={{ backgroundColor: "#7aeac2", marginTop: "250px", marginLeft: "400px", font: "white" }}>
                Add 
              </Button>
              <Button 
                onClick={this.delete}
                style={{ backgroundColor: "#aa1256", marginTop: "250px", marginLeft: "30px", font: "white" }}>
                Reject
              </Button>
            </CardActions>
        </Card>
      </div>
    );
  }
}