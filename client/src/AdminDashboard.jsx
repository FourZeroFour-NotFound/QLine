import React from "react";
import $ from 'jquery';
import AdminMsg from './adminMsg.jsx';
import {Card, Grid, Button} from "@material-ui/core";


export default class AdminDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
      }
  }

  componentDidMount() {
    this.getAllMessages();
  }

  // function to genreate promotion code
  getAllMessages() {
    $.ajax({
      url: "/customer-services",
      type: "GET",
      contentType: "application/json",
      success: res => {
          console.log("this",res)
        if (res) {
          console.log(res)
          this.setState({ data: res });
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }
  
  render() {
    return (
        <div>
        <h2>Customer Services <Grid  pill color= "success"> {this.state.data.length} </Grid></h2>
        <Grid>
          {
            this.state.data.map((message) => (
              <AdminMsg message = {message} />
            ))
          }
        </Grid>
      </div>
    )
  }

}