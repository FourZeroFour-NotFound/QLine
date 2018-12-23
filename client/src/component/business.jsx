import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  uper: {
    backgroundColor: "#7aeac2",
  },

};
const style = theme => ({
  margin: {
    margin: theme.spacing.unit,
    backgroundColor: "#7aeac2",
  },
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
    }
  }
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  render() {
    const { auth } = this.state;
    return (
      <div style={styles.root}>
        <AppBar  position="static" style={styles.uper}>
          <Toolbar>
            <Typography variant="h6" color="inherit" style={styles.grow}>
            </Typography>
            <Button color="black">Sign Out</Button>
          </Toolbar>
        </AppBar>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="RoleSwitch" />
            }
            label={auth ? 'Business' : 'User'}
          />
          <Button size="large" style={{backgroundColor:"#7aeac2", marginLeft:"1500px", font:"white"}} >
          + Create New Queue
          </Button>
        </FormGroup>
      </div>
    );
  }
}

