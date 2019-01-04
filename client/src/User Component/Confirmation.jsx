import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import $ from "jquery";



import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';
import '../style/App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';



class Confirmation extends Component {
    constructor(props) {
      super();
      this.state = {
        value: props.value,
      
     
      };
      // console.log("deleeeeet",this.props);
    }
   

    // onDelete =() =>{
    //   $.ajax({
    //           url: "/confirm",
    //           type : "DELETE",
    //           contentType : 'application/json',
    //           data : JSON.stringify({'queue_id' : this.props.user_queue.queue_id}),
    //           success: function (data) {
    //             window.localStorage.setItem("DeleteInfo", data)
    //             console.log("delelte", data);
    //           console.log("deleeeeet",this.props.ticket);

    //           },
    //           error: function (error) {
    //             console.error("dont delete", error);
    //           }
    //       });
    // }
   
  
    // handleCancel = () => {
    //     console.log('hiiiii',this.props)
    //     this.props.onClose(this.state.value);
    //       };
    
    // handleClose = value => {
    //     console.log('value', value)
    //     this.setState({ value, open: false });
    //   };
  
    // handleOk = () => {
    //     console.log('what is it',this.state.value)
    //   this.props.onClose(this.state.value);
    // };
  
    render() {
      const { value, ...other } = this.props;

  
      return (
        <Dialog
          maxWidth="xs"
          {...other}
      
        >
          <DialogTitle id="confirmation-dialog-title">Arabic Bank</DialogTitle>
          <DialogContent>
            <Grid container justify="center" alignItems="center">
              <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }}>H105</Avatar>
            </Grid>
            <span style={{ marginTop: '50px' }}>Estimated time: 1 hour</span>
          </DialogContent>
  
          <DialogActions>
            <Button onClick={(x)=> this.props.onDelete(x)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.cancel} color="primary">
              Ok
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Delay
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
  

  Confirmation.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
  };

  export default Confirmation;




  // handle single row deletion
// onDelete: function(e){
 
//   // product to delete
//   var productId = this.props.productId;

//   // submit form data to api
//   $.ajax({
//       url: "http://localhost/api/product/delete.php",
//       type : "POST",
//       contentType : 'application/json',
//       data : JSON.stringify({'id' : productId}),
//       success : function(response) {
//           this.props.changeAppMode('read');
//       }.bind(this),
//       error: function(xhr, resp, text){
//           // show error in console
//           console.log(xhr, resp, text);
//       }
//   });
// },