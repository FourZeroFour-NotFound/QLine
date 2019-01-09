// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from "react";
import $ from 'jquery';
import AdminMsg from './adminMsg.jsx';
import AdminMsgChat from './adminMsgChat.jsx';
import {Grid} from "@material-ui/core";
import logo from '../style/qline.png';
import { Widget} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo1 from '../style/logo1.png';

// Admin dashboard that displays all the queries if our users in Customer Service section as well as 
// our Chat Widget
export default class AdminDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        data1:[]
      }
  }

  // function that will help us render the messages from the front end to be displayed here
  componentDidMount() {
    this.getAllMessages();
    this.getAllMessages1();
  }

  // Request for the messages and queries that the customer have, saved in the database and to be fetched here
  getAllMessages() {
    $.ajax({
      url: "/customer-services",
      type: "GET",
      contentType: "application/json",
      data: res => {
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

  // chat messages of all users and to be rendered and request here in admin page
  // and view the request of customers 
  getAllMessages1() {
    $.ajax({
      url: "/customer-message",
      type: "GET",
      contentType: "application/json",
      data1: res => {
          console.log("this",res)
        if (res) {
          console.log(res)
          this.setState({ data1: res });
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }
  
  // simple admin page that can be accessed by QLine management
  render() {
    return (
        <div>
          {/*** navBar for usage ***/}
            <nav style={{background: "white", height: "100px"}}>
              <img src={logo} width="122px" height="62px" style={{marginTop: "30px", marginLeft: "20px"}}/>
              <Grid>
                  <ul>
                    <li class="menu__list-item" href ="/" style={{marginLeft: "1700px", marginTop: "-530px", position: "absolute"}} class="menu__link menu__link--active">Logout</li>
                  </ul>
              </Grid>
            </nav>
            {/*** card from material UI holding messages information ***/}
          <div style={{marginTop: "50px"}}>
              <h2>Customer Services <Grid  pill color= "success"> {this.state.data.length} </Grid></h2>
            <Grid>
              {
                this.state.data.map((message) => (
                  <AdminMsg message = {message} />
                ))
              }
                <Widget handleNewUserMessage={this.handleNewUserMessage} profileAvatar={logo1}
                  color={"#aa1256"}
                  title="QLine Queue Management System"
                  subtitle="Your Queue Our Service"
                  />
              {
                this.state.data1.map((all) => (
                  <AdminMsgChat all = {all} />
                ))
              }
            </Grid>
        </div>
      </div>
    )
  }

}