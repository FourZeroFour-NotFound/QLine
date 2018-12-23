import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  }
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div style={styles.root}>
        <AppBar  position="static" style={styles.uper}>
          <Toolbar>
            <Typography variant="h6" color="inherit" style={styles.grow}>
            </Typography>
            <Button color="inherit">Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

