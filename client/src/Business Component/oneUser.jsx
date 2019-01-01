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
    height: 100,
    maxWidth: 100,
  },
};


export default class oneUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      user:{}
    }
  }

  componentDidMount() {
    $.ajax({
        url: "/profile1",
        type: "POST",
        data:  {id :this.props.user.user_id},
        success:  (data) =>{
           
         this.setState({user: data.success[0],
          })
        }
      });
   
    
  }
add = ()=> {

    $.ajax({
        url: "/add-userto-queue1",
        type: "POST",
        contentType: 'application/json',
        data:  JSON.stringify({
                user_id : this.props.user.user_id ,
                queue_id : this.props.user.queue_id ,
                notes : this.props.user.notes ,
        
        })
        ,
        success:  (data) =>{
          alert("added sucssfuly")
         
          
        }
      });
      

      $.ajax({
        url: "/deleteWaiting",
        type: "POST",
        contentType: 'application/json',
        data:  JSON.stringify({
                id : this.props.user.id ,
               
        
        })
        ,
        success:  (data) =>{
          alert("added sucssfuly")
         
          
        }
      });
}

delete = ()=> {

      $.ajax({
        url: "/deleteWaiting",
        type: "POST",
        contentType: 'application/json',
        data:  JSON.stringify({
                id : this.props.user.id ,
               
        
        })
        ,
        success:  (data) =>{
          alert("reject")
         
          
        }
      });
}


  render() {
    return (
      <div>
        <Card style={styles.card}>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
          {"Name : " + this.state.user.firstName + " " +this.state.user.lastName}<br />
              </Typography>
            <CardContent>
            <CardMedia
              style={styles.media}
          
            />
              <Typography variant="h6" component="p">
              
               
               
                {"Phone Number : " + this.state.user.phoneNumber }<br />
                {"Email : "+this.state.user.email }<br />
                {"Notes :"  + this.props.user.notes }<br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
        
            <Button 
            onClick={this.add}
            style={{ backgroundColor: "#7aeac2", marginTop: "250px", marginLeft: "400px", font: "white" }}>
              add !
             
             </Button>
       
        <Button 
        onClick={this.delete}
        style={{ backgroundColor: "#7aeac2", marginTop: "250px", marginLeft: "30px", font: "white" }}>
              reject
             
        </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}