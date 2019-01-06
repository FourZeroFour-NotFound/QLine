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
    }
   
  
    render() {
      const { value, ...other } = this.props;

      return (
        <div class="blog-card spring-fever">
        <div class="title-content">
          <h3>Arab Bank</h3>
          <hr />
          <div class="intro">QLine Management System</div>
        </div>
        <div class="card-info">
        <DialogContent>
             <Grid container justify="center" alignItems="center">
               <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }}>H105</Avatar>
             </Grid>
             <span style={{ marginTop: '50px' }}>Estimated time: 1 hour</span>
           </DialogContent>
        </div>
        <div class="utility-info">
          <ul class="utility-list">
          <DialogActions>
          <Button onClick={(x)=> this.props.onDelete(x)} color="primary">Cancel</Button>
          <Button onClick={this.props.cancel} color="primary">Ok</Button>
          <Button onClick={this.handleOk} color="primary">Delay</Button>
          </DialogActions>
          </ul>
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
      );
    }
  }
  

  Confirmation.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
  };

  export default Confirmation;


  // >
        //   <DialogTitle id="confirmation-dialog-title">Arabic Bank</DialogTitle>
        //   <DialogContent>
        //     <Grid container justify="center" alignItems="center">
        //       <Avatar style={{ width: '100px', height: '100px', backgroundColor: '#CE93D8' }}>H105</Avatar>
        //     </Grid>
        //     <span style={{ marginTop: '50px' }}>Estimated time: 1 hour</span>
        //   </DialogContent>
  
        //   <DialogActions>
        //     <Button onClick={(x)=> this.props.onDelete(x)} color="primary">
        //       Cancel
        //     </Button>
        //     <Button onClick={this.props.cancel} color="primary">
        //       Ok
        //     </Button>
        //     <Button onClick={this.handleOk} color="primary">
        //       Delay
        //     </Button>
        //   </DialogActions>
        // </Dialog>