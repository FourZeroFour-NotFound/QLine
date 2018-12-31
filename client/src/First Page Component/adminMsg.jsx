import React from "react";
import $ from 'jquery';
import {
  Card,
  Button,
  Grid
} from "@material-ui/core";

export default class AdminMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Card style = {{padding: 10 , width: "300px", margin: 10}}>
        <Card>
          <Grid>
            <Grid sm ={10}>
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