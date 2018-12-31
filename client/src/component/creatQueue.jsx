import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import green from '@material-ui/core/colors/green';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import $ from 'jquery';
import logo from '../style/qline.png';
import { BottomNavigation } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:'500px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding: 20,
  },
  Time: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

export default class CreatQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: true,
      auth1: true,
      auth2: true,
      nameOfQueeu: "",
      start_time :"07:30",
      end_time :"08:00",
      date :"",
      timeforone: "",
      windows :"",
      imgUrl: "",
      take_premum:0,
      accept_join :true,
      requierment :false,
      creator_id :"",





    }
  }
  handleChange1 = event => {
    console.log(event.target.checked)

  this.setState({ take_premum: event.target.checked });
  console.log(this.state)
  
  };
  handleChange2 = event => {
    this.setState({ accept_join: event.target.checked });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  submet = ()=>{
    console.log(this.state)
    $.ajax({
      url: '/add-queue',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        nameOfQueeu: this.state.nameOfQueeu,
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        date: this.state.date,
        timeforone: this.state.timeforone,
        windows: this.state.windows,
        imgUrl: this.state.imgUrl,
        take_premum: this.state.take_premum,
        accept_join: this.state.accept_join,
        requierment: this.state.requierment,
        
      }),
      success: (data) => {
        console.log(data);
        alert("queue added sucssefuly")
      },
      error: (err) => {
        console.log(err);
      }
    });


  }

  render() {
    const { take_premum, accept_join } = this.state;
    return (
      <div>
      <nav className="menu"  style={{backgroundColor: "#aa1256",marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
      </nav>
      <FormGroup>
      <form style={{marginTop:"100px", marginLeft:"100px"}} noValidate autoComplete="off">
      <p> Queue Name: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
          onChange={(e)=>{
           
            this.setState({
              nameOfQueeu : e.target.value
            })

          }}
        />
        <p> Start Time: </p>
        <TextField
        onChange={(e)=>{
           
          this.setState({
            start_time : e.target.value 
          })
        }}
        id="time"
        type="time"
        defaultValue= {this.state.end_time}
        style={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
        <p> End Time: </p>
        <TextField
         onChange={(e)=>{
           
          this.setState({
            end_time : e.target.value
          })
        }}
        id="time"
        type="time"
        defaultValue= {this.state.end_time}
        style={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
        <p> Date: </p>
        <TextField
        onChange={(e)=>{
           
          this.setState({
            date : e.target.value
          })
        }}
        id="date"
        type="date"
        style={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <p> Time for each customer per minutes: </p>
      <TextField
      onChange={(e)=>{
           
        this.setState({
          timeforone : e.target.value
        })
      }}
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Number of windows: </p>
      <TextField
       onChange={(e)=>{
           
        this.setState({
          windows : e.target.value
        })
      }}
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Photo for this queue: </p>
      <TextField
      onChange={(e)=>{
           
        this.setState({
          imgUrl : e.target.value
        })
      }}
      
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Accept premium: </p>
        <FormControlLabel
            control={
        <Switch
          checked={take_premum} 
          onChange={this.handleChange1}
          color="primary"
        />
      }
      label={take_premum ? 'Yes' : 'No'}
    />
        <p> Accept customer: </p>
        <FormControlLabel
            control={
        <Switch
          checked={accept_join} 
          onChange={this.handleChange2}
          color="primary"
        />
      }
      label={accept_join ? 'Yes' : 'No'}
    />
        <p> Requirements: </p>
      <TextField
      onChange={(e)=>{
           
        this.setState({
          requierment : e.target.value
        })
      }}
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
       
      </form>
      <Button
         style={{ backgroundColor: "#7aeac2",marginLeft : "100px" , font: "white", marginTop:"50px" }}
         onClick={this.submet}
         >create</Button>
      </FormGroup>
      </div>
      
    )
  }

}