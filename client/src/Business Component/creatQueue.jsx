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
import { BottomNavigation, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:'500px',

  },
  textField: {
    maxWidth: 300
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
      accept_join :false,
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
      <FormGroup>
      <form style={{marginTop:"10px", marginLeft:"30px", width: "500px", alignItems: "center"}} noValidate autoComplete="off">
      <p> Queue Name: 
      <TextField
      InputProps={{
        classes: {
          input: styles.resize,
        },
      }}
          style={{marginTop: "-10px", marginLeft: "30px"}}
          type="input"
          name="Queue Name"
          margin="dense"

          onChange={(e)=>{
           
            this.setState({
              nameOfQueeu : e.target.value
            })

          }}
        /></p>
        
        <p style={{marginTop: "30px"}}> Start Time:
        <TextField
        onChange={(e)=>{
           
          this.setState({
            start_time : e.target.value 
          })
        }}
        id="time"
        type="time"
        margin='normal'
        defaultValue= {this.state.end_time}
        style={{marginLeft: "110px", marginTop: "-10px"}}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      /> </p>
        <p style={{marginTop: "30px"}}> End Time: 
        <TextField
         onChange={(e)=>{
           
          this.setState({
            end_time : e.target.value
          })
        }}
        id="time"
        type="time"
        defaultValue= {this.state.end_time}
        style={{marginLeft: "115px", marginTop: "-10px"}}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      /></p>
        <p style={{marginTop: "30px"}}> Date: 
        <TextField
        onChange={(e)=>{
           
          this.setState({
            date : e.target.value
          })
        }}
        id="date"
        type="date"
        style={{marginTop: "-10px", marginLeft: "90px"}}
        InputLabelProps={{
          shrink: true,
        }}
      /></p>
        <p style={{marginTop: "30px"}}> Time <p>per customer:</p>
      <TextField
      onChange={(e)=>{
           
        this.setState({
          timeforone : e.target.value
        })
      }}
      style={{marginTop: "-30px", marginLeft: "130px"}}
          type="input"
          name="Queue Name"
          margin="normal"

        /></p>
        <p style={{marginTop: "30px"}}> No. of windows: 
      <TextField
       onChange={(e)=>{
           
        this.setState({
          windows : e.target.value
        })
      }}
      style={{marginTop: "-10px",  marginLeft: "20px"}}
          type="input"
          name="Queue Name"
          margin="normal"

        /></p>
        <p style={{marginTop: "30px"}}>  Queue Photo: 
      <TextField
      onChange={(e)=>{
           
        this.setState({
          imgUrl : e.target.value
        })
      }}
      
      style={{marginTop: "-10px",  marginLeft: "30px"}}
          type="input"
          name="Queue Name"
          margin="normal"

        /></p>
        <p style={{marginTop: "30px"}}> Accept premium: </p>
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
        <p style={{marginTop: "30px"}}> Accept customer: </p>
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
        <p style={{marginTop: "30px"}}> Requirements: 
      <TextField
      onChange={(e)=>{
           
        this.setState({
          requierment : !e.target.value
        })
      }}
          
          
          name="Queue Name"
          margin="normal"
          style={{marginTop: "-10px",  marginLeft: "50px"}}
        /></p>
       
      </form>
      <Button
         style={{ backgroundColor: "#7aeac2",marginLeft : "50px" , font: "white", marginTop:"50px" }}
         onClick={this.submet}
         >create</Button>
      </FormGroup>
      </div>

    )
  }

}