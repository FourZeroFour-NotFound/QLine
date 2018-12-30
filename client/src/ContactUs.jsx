import React from 'react';
import "./style/App.css";
import {FormGroup, Grid, Button} from '@material-ui/core';
import $ from "jquery";
import Customer from './style/customer.png';

// Customer Service Render Part, Organize the front-end version with styling from App css file
// Adding some image for marketing appearance of website as well as form in order for the user to use if they need assistance in there booking
// Added in form such as name, email and information needed to better understand the user such as there comments
export default class CustomerService extends React.Component {
    constructor () {
        super()
        this.state = {
          toggleButton: false,
          toggleButtonSpin: false,
          name: "",
          email: "",
          phoneNumber: "",
          comments: "",
          errorPhone: "",
          errorEmail: "",
          validation: false, 
        }
      }


      handleChange(e) {
        e.preventDefault();
        let target = e.target;
        this.setState({ [target.name]: target.value });
        console.log('am I working?')
        // checking for phone number validation where the condition is if the number inputed is less that required validation will be false and provide error
        if (this.state.phoneNumber.length < 9) {
          this.setState({
            errorPhone: "The phone number should be in this format 0790011200",
            validation: false
          });
        } else {
          this.setState({
            errorPhone: "",
            validation: true
          });
        }
        }

        handleOnClick(e) {
            e.preventDefault();
            this.toggleButtonNow();
            this.toggleButtonSpinNow();
            this.reset();
            // if the validation true  send data
            if (this.state.validation) {
              $.ajax({
                url: '/customer-services',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  phoneNumber: this.state.phoneNumber,
                  comments: this.state.comments
                }),
                success: (res) => {
                console.log("Thank you, we will be in touch")
                },
                error: (err) => {
                  console.log('err', err);
                }
              });
            } 
        }

        toggleButtonNow () {
           setTimeout( () => {
            this.setState({
                toggleButton: !this.state.toggleButton,
                toggleButtonSpin: !this.state.toggleButtonSpin
            })
           }, 5000)
           clearTimeout(this.toggleButtonNow)
        }

        toggleButtonSpinNow () {
                this.setState({
                    toggleButtonSpin: !this.state.toggleButtonSpin,
                    toggleButton: false
                })
        }
          
        reset () {
          this.setState({
          name: "",
          email: "",
          phoneNumber: "",
          comments: ""})
        }

  render() {
    return (

      <div className="customerService" id="serv">
         <div id="advertisement">
            <img src={Customer} width="500px" height="500px" style={{marginLeft: "300px", marginTop: "150px"}}/>
          </div>
          <div className="customer" style={{marginTop: "-600px"}}>
                <form>    
                    <FormGroup>
                        
                            <Grid className="headCustomer">
                                <h1>Find out more today</h1>
                                    <p>
                                        Fill out the form below for more information about how we can work with 
                                        you and your queue management system.</p>
                                        <p>Need help with your queue? <span id="contact" link="">Contact customer support here.</span>
                                    </p>
                            </Grid>
                            <Grid>
                                <input style={{width: "650px", textAlign: "left",  marginLeft: "1000px", marginBottom: "20px"}} type="text" name="name"  value={this.state.name} onChange={this.handleChange.bind(this)}  placeholder="Name" required={true}/>
                            </Grid>
                    
                        <Grid>
                                <input style={{width: "650px", textAlign: "left",  marginLeft: "1000px", marginBottom: "20px"}} type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Email" required={true}/>
                        </Grid>
                    
                        <Grid>
                                <input style={{width: "650px", textAlign: "left",  marginLeft: "1000px", marginBottom: "20px"}} type="number" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange.bind(this)} placeholder="Phone Number" required={true}/>
                        </Grid>
                    
                        <Grid>
                                <input style={{width: "650px", textAlign: "left",  marginLeft: "1000px", marginBottom: "20px", marginTop: "-100px"}} type="textarea" name="comments" id="exampleText" value={this.state.comments} onChange={this.handleChange.bind(this)}  placeholder="Comments" required={true}/>
                        </Grid>
                    </FormGroup>
                    <FormGroup  handleOnClick={this.handleOnClick} >
                            <Button type = "submit" id="submit" onClick={this.handleOnClick.bind(this)}>{this.state.toggleButtonSpin && <i className="fa fa-spinner fa-spin"></i>}SEND</Button>
                                {this.state.toggleButton && <p align="center" style={{marginLeft: "800px"}}  className="label"><i class="fa fa-check icon"></i><b>Thanks, we'll be in touch as soon as possible.</b></p>}
                    </FormGroup>
                </form>
           </div>
      </div>
    );
  }
}
