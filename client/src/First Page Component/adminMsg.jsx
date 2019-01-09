// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from "react";
import {
  Card,
  Button,
  Grid
} from "@material-ui/core";


// this Component helps the Admin part of the website to see any customer that based on help for his or her queries 
export default class AdminMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // rendering cards that displays the name, email and messages of the user
  render() {
    return (
      <Card style = {{padding: 10 , width: "300px", margin: 10}}>
        <Card>
          <Grid>
            <Grid sm ={10}>
            {/*** Cards Info that users sent ***/}
              <p><Card>{"Name: "+ this.props.message.name}</Card></p>
              <p> <Card>{"Email: "+ this.props.message.email}</Card></p>
              <p> <Card> {"Phone number: "+ this.props.message.phoneNumber}</Card></p>
            </Grid>
          </Grid>
            <Card>
               <h5>Message</h5>
              {
                this.props.message.comments
              }
            </Card>
          <Grid>
            <Button style = {{marginTop: 25 }} style={{backgroundColor: "red"}}>Delete</Button>
          </Grid>
        </Card>
      </Card>
    )
  }
}