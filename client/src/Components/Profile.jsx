import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import '../style/App.css';
import $ from "jquery";



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    color: {
        background: '#a077a7'
    },
   
});

class Profile extends Component {
    state = {
        Full_name: '',
        Email:'',
        PhoneNum:''
    };
/* send data after edit the information*/
    EditInfo = () => {
        const InfObj = {
            Full_name: this.state.Full_name,
            Email:this.state.Email,
            PhoneNum:this.state.PhoneNum
            
        }
        console.log(InfObj)
        $.ajax({
          url: "/info",
          type: "POST",
          data: JSON.stringify(InfObj),
          contentType: "application/json",
          success: function (data) {
            window.localStorage.setItem("EditInfo", data)
            console.log("send", data);
          },
          error: function (error) {
            console.error("dont send", error);
          }
        });
      };

/*when edit full name call the function */
    handleChange = (e) => {
        this.setState({
            Full_name: e.target.value,
        });
    };
/* when edit email call this function*/
    handleChangeEmail = (e) => {
        this.setState({
            Email: e.target.value,
        });
    };
    /* when edit phone number call this function*/
    handleChangeNum = (e) => {
        this.setState({
            PhoneNum: e.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            // navbar place
            <div className={classes.root}>
                <AppBar position="static" className={classes.color}>
                    <Toolbar>
                        <div position="static" className={classes.grow}>
                            <h1 style={{
                                backgroundImage: 'url(' + this.props.logo + ')'
                            }} className="menu__logo">QLine</h1>
                        </div>

                        <Button color="inherit">Log Out</Button>
                    </Toolbar>
                </AppBar>
             
                   {/* body of the profile */}
              
                <div className="container" style={{ paddingTop: '60px' }}>
                    <h1 className="page-header">Edit Profile</h1>
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="text-center">
                                <img src="http://lorempixel.com/200/200/people/9/" className="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6>Upload a different photo...</h6>
                                <input type="file" className="text-center center-block well well-sm" />
                            </div>
                        </div>
                        {/* edit form column */}
                        <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
                     
                            <h3>Personal info</h3>
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Full name:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control"  defaultValue="Jane Bishop" type="text" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Email:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" defaultValue="janesemail@gmail.com" type="text"onChange={this.handleChangeEmail} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Phone Num:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" defaultValue="0786214593" type="text" onChange={this.handleChangeNum} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label" />
                                    <div className="col-md-8">
                                        <input className=" bottom" defaultValue="Save Changes" type="button" onClick={this.EditInfo}/>
                                        <span />
                                        <input className=" bottom" defaultValue="Cancel" type="reset" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    

    }
}



Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);