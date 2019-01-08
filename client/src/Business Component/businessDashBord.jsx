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
import GridList from '@material-ui/core/GridList';
import BusinessQueue from './businessQueue.jsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Router, Route, browserHistory } from 'react-router';
import blankTV from '../style/blankTV.png';
import GridListTile from '@material-ui/core/GridListTile';
import Swiper from 'react-id-swiper';


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
      allusersinqueue :[{},{},{},{},{},{},{}],
      email: "",
      newsername: "",
      emailnew:"",
      queueDetalse:{},
      arr: [{id:"Loading..."},{id:"Loading..."},{id:"Loading..."},{id:"Loading..."},{id:"Loading..."},{id:"Loading..."},{}],
    };
  }
componentDidMount(match){

  setInterval(() => {
    $.ajax({
      url: '/get-users-in-queue',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        queueid: this.props.params.queue_id,
      }),
      success: (data) => {

        this.setState({
          allusersinqueue: data.success
        })

      }
    })
  }, 3000);

 
  setInterval(()=>{
  $.ajax({
    url: '/get-users-in-waitingList',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      queueid: this.props.params.queue_id,
    }),
    success: (data) => {
     
  this.setState({
    allusers: data.data
  })
 
    }
  })  },3000);


  
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
        alert("you joined the queue successfully ")
      }
    });
    
  
        }else{
  alert("email not exest")
}
}
});
}
start = ()=>{
  setInterval(() => {
    $.ajax({
      url: '/queue-data',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        queue_id: this.props.params.queue_id,
      }),
      success: (data) => {

        this.setState({
          queueDetalse: data.success[0]
        })
       
        var arrr = []
        for (var i = 0; i < this.state.allusersinqueue.length; i++) {
          arrr[this.state.allusersinqueue[i].onwindow] = this.state.allusersinqueue[i]
        }

        arrr.splice(0, 1)
     
        if (arrr.length == 0 ){
          if ( this.state.allusersinqueue.length == 0 ){
            alert("no one in the queue")
          }else{
          for (var i = 0 ; i<this.state.queueDetalse.windows  ; i++){
            $.ajax({
              url: '/UPDATEtickt',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                id: this.state.allusersinqueue[i].id,
                counter: i+1
              }),
              success: (data) => {
               

              }
            })
            
          }}
        }

        if (arrr.length == 0 ){
          arrr= [{id:"no users in this queue"}]
          
        }
        this.setState({ arr: arrr })


      }
    })

  }, 3000);
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

  logOut() {
    $.ajax({
      url: '/log-out',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        browserHistory.push('/')
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  render() {
   var next = (x ,y)=>{
      console.log(x ,y)
    //x is i 
// y is the ticket i want to delete
 // this.state.allusersinqueue[this.state.queueDetalse.windows]
if (this.state.allusersinqueue[this.state.queueDetalse.windows] == undefined){
  alert("no more customer in the Queue")
}else{
      $.ajax({
        url: '/UPDATEtickt',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          id: this.state.allusersinqueue[this.state.queueDetalse.windows].id,
          counter: x+1
        }),
        success: (data) => {

      

        }
      }).then(  
          $.ajax({
        url: '/deleteTickt',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          id: y.id ,
          
        }),
        success: (data) => {
         

        }
      }))
    }
    }
var nextTickit = () => {if (this.state.allusersinqueue[this.state.arr.length  ] ){return this.state.allusersinqueue[this.state.arr.length ].id } else{return "no more"}}
 
    var estmatedTime = ()=>{ if ( Math.floor(this.state.allusersinqueue.length/this.state.queueDetalse.windows)* Number(this.state.queueDetalse.timeforone) < this.state.queueDetalse.timeforone){return 0}else{return Math.floor(this.state.allusersinqueue.length/this.state.queueDetalse.windows)* Number(this.state.queueDetalse.timeforone) }}
    const { value } = this.state;
    return (
      <div>
       <nav className="menu6"  style={{backgroundColor: "transparent",  marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "1px", marginLeft: "-20px"}}/>
                <Grid className="centerNav">
                    <ul className="centerNavMenu">
                    <li className="menuItem" ><a className="itemLink" style={{color: "black"}} href="/business">Home</a></li>
                    <li className="menuItem" ><a style={{color: "black"}} className="itemLink" href="/feature">Features</a></li>
                    <li className="menuItem" ><a style={{color: "black"}} className="itemLink">Contact Us</a></li>
                    
                    </ul>
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item" ><a  style={{color: "black"}} class="menu__link" onClick={this.logOut.bind(this)}>Logout</a></li>
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
        <Card style={{width: "300px",height: "400px", marginTop: "100px", position: "absolute", backgroundColor: "#e33a2e", marginLeft: "1550px"}}>
        <h1 style={ {lineHeight: 1.5, marginLeft: "10px", color: "white",marginTop: "50px", textAlign: "center"}} >Customer's waiting  <h1 style={{color: "#7aeac2"}}>{this.state.allusersinqueue.length - this.state.queueDetalse.windows }</h1></h1>
        <h1 style={ {lineHeight: 1.5, marginLeft: "10px", color: "white", marginTop: "50px", textAlign: "center"}} >Upcoming ticket  <h1 style={{color: "#7aeac2"}}> { nextTickit ()}</h1></h1>
        </Card>
        <Card style={{margin : 5, width: "300px",marginTop: "30px",marginLeft: "150px", height: "80px", borderRadius: "999px",  backgroundColor:"#e33a2e" }} >
                <Typography gutterBottom variant="h5" component="h2" >
               <h2 style={{color: "white", marginTop: "20px"}}>counter</h2>
               </Typography>
            </Card>
            <Card style={{margin : 5, width: "1000px", height: "80px",marginTop: "-80px", borderRadius: "999px", backgroundColor: "#e33a2e", marginLeft: "500px", color: "white" }} >
            <Typography  variant="h7" component="p">
               <h2 style={{marginTop: "30px"}}> Ticket Number</h2>
               </Typography>
            </Card>
          {this.state.arr.map((queue ,i) => (
            <div>
            <Card style={{margin : 5, width: "300px",marginTop: "50px",marginLeft: "150px", height: "80px", borderRadius: "999px", border: "4px solid #e33a2e", }} >
         
               <h2 style={{color: "#e33a2e", marginTop: "20px"}}> {i +1} </h2>

            </Card>
           <Card style={{margin : 5, width: "1000px", height: "80px", marginTop: "-85px", borderRadius: "999px", border: "4px solid #e33a2e", marginLeft: "500px" }} >
           <CardActionArea>
             <CardContent>
             <CardMedia />
               <Typography  variant="h7" component="p">
               <h2 style={{color: "#e33a2e"}}>{this.state.arr[i].id} </h2>
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
         </div>
          ))}

        
      </TabContainer>}
      {value === 1 && 
      <div>
        <div>
                    <h3 style={ {lineHeight: 1.5,}} >Customers in queue : {this.state.allusersinqueue.length  - this.state.queueDetalse.windows}</h3>
              <h3 style={ {lineHeight: 1.5,}} >Customers in counter : {this.state.queueDetalse.windows}</h3>
                <h3 style={ {lineHeight: 1.5,}} >Estimated time until your turn  :  { estmatedTime() } m</h3>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><h3> you use Qline and you have your phone ? </h3> </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h2 style={ {lineHeight: 1.5,}}>enter queue id in your mobile app : { this.props.params.queue_id}<br /> or scan the barcode :</h2>
          <Barcode  value ={this.props.params.queue_id} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography > <h3>you use Qline but you dont have your phone ? </h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h3 style={ {lineHeight: 1.5,}}> input your email :</h3>
          <input style={ {lineHeight: 1.5, margin : 10 , padding : 10 ,  width : 500,}} onChange={e => {this.setState({email:e.target.value})}} type="text"   placeholder="input ur email ..."/>
                              <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" color="primary" onClick={this.addme} type="submit">
                                add me !!
                            </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><h3> you never heard of Qline and you need ticket ?</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
          
          <h3> enter your name :</h3>
          <input  style={ {lineHeight: 1.5, margin : 10 , padding : 10 ,  width : 500,}} onChange={e => {this.setState({newsername:e.target.value})}} type="text"   placeholder="input ur name . . ."/>
          <h3>and your email:</h3>
          <input  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , width : 500,}} onChange={e => {this.setState({emailnew:e.target.value})}} type="text"   placeholder="input ur email . . ."/>
                              <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" color="primary" onClick={this.addnewuser} type="submit">
                                give me ticket !!
                            </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
    </div>}
      {value === 2 && <TabContainer>
        <h1 style={ {lineHeight: 1.5,}} >Unserved Customers : {this.state.allusersinqueue.length - this.state.queueDetalse.windows}</h1>
        <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" onClick={this.start}  color="primary" type="submit">
                            start 
                            </Button>
        <GridList cols={1} style={style.gridList}>
          {this.state.arr.map((queue ,i) => (
           <Card style={{margin : 20 ,}} >
           <CardActionArea>
           <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
               <h2>counter : {i +1} </h2>
               </Typography>
             <CardContent>
             <CardMedia />
               <Typography  style={{paddingBottom: 50,}} variant="h7" component="p">
               <h2> ticket number   :{this.state.arr[i].id} </h2>
               <h2> user notes  : {this.state.arr[i].Notes} </h2>
               <Button  style={ {lineHeight: 1.5, margin : 10 , padding : 10 , border: 10 ,}} variant="contained" onClick={()=>{next(i,this.state.arr[i] )}}  color="primary" type="submit">
                              next custumer >>
                            </Button>
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           </CardActions>
         </Card>
          ))}
          </GridList>

      </TabContainer>}
      {value === 3 && <TabContainer>
        <h1 style={{margin : "20px"}}> client in waiting list: { this.state.allusers.length }</h1>
        <UsersInQueue  users = { this.state.allusers}/>
        
      </TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
    
      </div>
    );
  }
}