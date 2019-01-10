// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from "react";
import $ from 'jquery';
import {
  Card,
  Button,
  Grid
} from "@material-ui/core";

// contains page for messages that user will input in chat box
export default class AdminMsgChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        reply: ""
    }
  }

  render() {
    return (
      <Card style = {{padding: 10 , width: "300px", margin: 10}}>
        <Card>
          <Grid>
          </Grid>
            <Card>
               <h5>Message</h5>
              {
                this.props.all.message
              }
              <input/>
            </Card>
          <Grid>
          <Button style = {{marginTop: 25 }} style={{backgroundColor: "green"}}>Reply</Button>
            <Button style = {{marginTop: 25 }} style={{backgroundColor: "red"}}>Delete</Button>
          </Grid>
        </Card>
      </Card>
    )
  }
}