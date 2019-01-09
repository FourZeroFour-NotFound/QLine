// Import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import $ from 'jquery';
import Button from '@material-ui/core/Button';


// direct styling of components usage and here you can avoid confussion for component styling 
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

// This component is in type form which allow user to fill up in order for them to create there own queue
// if they have business specifically or want to create there own queue for specific reasons
// you can say input types in this component that uses Material Ui as there bases for input creation 
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

  // group of stateless functions or functions that has minimal usage for User Interface
  handleChange1 = event => {
    console.log(event.target.checked)
    this.setState({ take_premum: event.target.checked });
  };

  handleChange2 = event => {
    this.setState({ accept_join: event.target.checked });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  // Submit function with ajax request from the server to post submited values and information of the
  // user, here you can see all the info to be passed in the server to be rendered on other component
  submit = () => {
    console.log(this.state)
    $.ajax({
      // add information to the queue
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
        alert("Queue added Successfully")
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Form to be filled in input to be rendered in DOM
  render() {
    const { take_premum, accept_join } = this.state;

    return (
      <div>
        {/*** Form to fill by user in business section ***/}
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
                    />
                </p>
                  
                <p style={{marginTop: "30px"}}> Start Time:
                  <TextField
                    onChange={ (e) => {
                      this.setState({
                        start_time : e.target.value 
                      })
                    }}
                    id="time"
                    type="time"
                    margin="normal"
                    defaultValue= {this.state.end_time}
                    style={{marginLeft: "110px", marginTop: "-10px"}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300,
                    }}
                  /> 
                </p>

                <p style={{marginTop: "30px"}}> End Time: 
                  <TextField
                    onChange={ (e) => {
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
                  />
                </p>

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
                  />
                </p>

                <p style={{marginTop: "30px"}}> Time <p>per customer:</p>
                  <TextField
                      onChange={ (e) => {   
                        this.setState({
                          timeforone : e.target.value
                        })
                      }}
                      style={{marginTop: "-30px", marginLeft: "130px"}}
                          type="input"
                          name="Queue Name"
                          margin="normal"
                    />
                </p>
                <p style={{marginTop: "30px"}}> No. of windows: 
                  <TextField
                      onChange={ (e) => {
                        this.setState({
                          windows : e.target.value
                        })
                      }}
                      style={{marginTop: "-10px",  marginLeft: "20px"}}
                          type="input"
                          name="Queue Name"
                          margin="normal"
                    />
                </p>

                <p style={{marginTop: "30px"}}>  Queue Photo: 
                  <TextField
                  onChange={ (e) => {  
                    this.setState({
                      imgUrl : e.target.value
                    })
                  }}
                  style={{marginTop: "-10px",  marginLeft: "30px"}}
                      type="input"
                      name="Queue Name"
                      margin="normal"
                  />
                </p>
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
                  onChange={ (e) => {  
                    this.setState({
                      requierment : !e.target.value
                    })
                  }} 
                      name="Queue Name"
                      margin="normal"
                      style={{marginTop: "-10px",  marginLeft: "50px"}}
                  />
                </p>
                  
                </form>
                <Button
                  style={{ backgroundColor: "#7aeac2",marginLeft : "50px" , font: "white", marginTop:"50px" }}
                  onClick={this.submit}
                >
                Create
                </Button>
          </FormGroup>
      </div>

    )
  }

}