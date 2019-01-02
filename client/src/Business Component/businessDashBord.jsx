import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import $ from 'jquery';
import logo from '../style/qline.png';
import UsersInQueue from './usersInQueue.jsx';
import Barcode from 'react-barcode';
import TextField from '@material-ui/core/TextField';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  margin: {
    margin: theme.spacing.unit,

  },
});

let id = 0;
function createData(TiccketNumber, WindowNumber, QueueName) {
  id += 1;
  return { id, TiccketNumber, WindowNumber, QueueName};
}
const rows = [
  createData(1, 'window Number. : 2', 'Arabic Bank'),
  createData(2, 'window Number. : 5', 'Arabic Bank'),
  createData(3, 'window Number. : 1', 'Arabic Bank')
]

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    marginTop:"100px",
    marginLeft:"100px",
  },
});

export default class BusinessDashBord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      allusers:[],
      allusersinqueue :[],
      email: "",
      newsername: "",
      emailnew:""
    };
  }
componentDidMount(match){

  
  console.log('sdsdsd', this.props.params.queue_id)
  setInterval(()=>{
  $.ajax({
    url: '/get-users-in-waitingList',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      queueid: this.props.params.queue_id,
    }),
    success: (data) => {
      console.log(data)
  this.setState({
    allusers: data.data
  })
 
    }
  })  },5000);


  setInterval(()=>{
    $.ajax({
      url: '/get-users-in-queue',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        queueid: this.props.params.queue_id,
      }),
      success: (data) => {
        console.log(data)
    this.setState({
      allusersinqueue: data.success
    })
    console.log(this.state.allusersinqueue)
      }
    })  },5000);
  
}
addme=() => {
  console.log(this.state.email)

  $.ajax({
    url: "/profile2",
    type: "POST",
    data:  {email :this.state.email},
    success:  (data) =>{
     
       if( !(data.success.length == 0)){
    
     $.ajax({//add to the queue dirictly
      url: '/add-userto-queue1',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        user_id: data.success[0].user_id,
        queue_id: this.props.params.queue_id,
       

      }),
      success: (data) => {
        console.log(data);
        alert("u joind the queue sucssfuly ")
      }
    });
    
  
        }else{
  alert("email not exest")
}
}
});
}

addnewuser = ()=>{
console.log(this.state.newsername)
if (this.state.newsername == "" || this.state.emailnew == ""  ){
  alert("email or name cant be empty .. try agean " )
  
}else{

$.ajax({
  url: '/sign-up-fake',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({
    firstName:this.state.newsername,
    lastName: this.state.newsername,
    email: this.state.emailnew,
    password: "123456789",
    organizationName: "added from kiosk",
    phoneNumber: "0799795083"
  }),
  success: (res) => {
    console.log( "dfsfsdfsfsdfsdfdsfsdfsdf",res.data.id)
    $.ajax({//add to the queue dirictly
      url: '/add-userto-queue1',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        user_id: res.data.id,
        queue_id: this.props.params.queue_id,
       

      }),
      success: (data) => {
        console.log(data);
        alert("u joind the queue sucssfuly  take ur ticket ")
      }
    });
  },
 
}); 
}
}
  handleChange = (event, value) => {
    this.setState({ value });
  };

  signOut() {

    $.ajax({
      url: '/log-out',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
      <nav className="menu"  style={{backgroundColor: "#aa1256",marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><a  class="menu__link" href="/">Logout</a></li>
                    </ul>
                </Grid>
      </nav>
      <Paper style={{paddingTop:"100px"}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="TV" />
          <Tab label="Kiosk" />
          <Tab label="Manage" />
          <Tab label="Accept customer join" />
          
        </Tabs>
      </Paper>
      {value === 0 && <TabContainer>



        
      </TabContainer>}
      {value === 1 && <TabContainer>
        <h1 style={ {lineHeight: 1.5,}} >Custmers in queue now : {this.state.allusersinqueue.length}</h1>
        <h2 style={ {lineHeight: 1.5,}} >Choose what suits u :</h2>
        <div >
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><h3> you use Qline and u have ur phone ? </h3> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h2 style={ {lineHeight: 1.5,}}>inter queue id in your mobile app : { this.props.params.queue_id}<br /> or scan the barcode :</h2>
          <Barcode  value ={this.props.params.queue_id} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography > <h3>you use Qline but u dont have ur phone ? </h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h3 style={ {lineHeight: 1.5,}}> input ur email :</h3>
          <input style={ {lineHeight: 1.5, margin : 10 , padding : 10 ,  width : 500,}} onChange={e => {this.setState({email:e.target.value})}} type="text"   placeholder="input ur email ..."/>
                              <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" color="primary" onClick={this.addme} type="submit">
                                add me !!
                            </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><h3> you never heard of Qline and u need tickit ?</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
          
          <h3> inter ur name :</h3>
          <input  style={ {lineHeight: 1.5, margin : 10 , padding : 10 ,  width : 500,}} onChange={e => {this.setState({newsername:e.target.value})}} type="text"   placeholder="input ur name . . ."/>
          <h3>and ur email:</h3>
          <input  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , width : 500,}} onChange={e => {this.setState({emailnew:e.target.value})}} type="text"   placeholder="input ur email . . ."/>
                              <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" color="primary" onClick={this.addnewuser} type="submit">
                                give me tickit !!
                            </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
        
       </TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>
        <h1 style={{margin : "20px"}}> clent in waiting list: { this.state.allusers.length }</h1>
        <UsersInQueue  users = { this.state.allusers}/>
        
      </TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
    
      </div>
    );
  }
}