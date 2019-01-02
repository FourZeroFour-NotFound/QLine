import React from "react";
import $ from 'jquery';
import AdminMsg from './adminMsg.jsx';
import AdminMsgChat from './adminMsgChat.jsx';
import {Card, Grid, Button} from "@material-ui/core";
import {Link} from 'react-router';
import logo from '../style/qline.png';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo1 from '../style/logo1.png';


export default class AdminDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        data1:[]
      }
  }

  componentDidMount() {
    this.getAllMessages();
    this.getAllMessages1();
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

  getAllMessages1() {
    $.ajax({
      url: "/customer-message",
      type: "GET",
      contentType: "application/json",
      success: res => {
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
  
  render() {
    return (
        <div>
        <nav style={{background: "white", height: "100px"}}>
        <img src={logo} width="122px" height="62px" style={{marginTop: "30px", marginLeft: "20px"}}/>
        <Grid>
        </Grid>
        <Grid>
            <ul>
            <li class="menu__list-item" href ="/" style={{marginLeft: "1700px", marginTop: "-530px", position: "absolute"}} class="menu__link menu__link--active">Logout</li>
            </ul>
        </Grid>
    </nav>
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
          <Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }

}