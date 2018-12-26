import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import $ from 'jquery';
import logo from '../style/qline.png';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:'500px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    }
  }
  handleChange = name => event => {
    this.setState({
      value: event.target.value,
    });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
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
        />
        <p> Start Time: </p>
        <TextField
        id="time"
        type="time"
        defaultValue="07:30"
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
        id="time"
        type="time"
        defaultValue="07:30"
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
        id="date"
        type="date"
        style={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <p> Time for each customer: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Number of windows: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Photo for this queue: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Accept premium: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
        <p> Requirements: </p>
      <TextField
          style={styles.textField}
          type="input"
          name="Queue Name"
          margin="normal"
        />
      </form>
      </FormGroup>
      </div>
      
    )
  }

}