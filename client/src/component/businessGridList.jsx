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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import BusinessQueue from './businessQueue.jsx';
import $ from 'jquery';

const style = theme => ({
  margin: {
    margin: theme.spacing.unit,
    backgroundColor: "#7aeac2",
  },
  roots: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 20,
    marginLeft: 20,
    marginRight: 20
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

export default class BusinessGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queues:[]
    }
  }
  getAllQueues() {
    $.ajax({url: '/business',
    type: 'GET',
    data : JSON.stringify({user_id: this.props.location.state.user.user_id }),
    contentType: 'application/json',
    success: (res) => {
      this.setState({ queues: res.data })
    },
    error: (err) => {
      console.log(err);
    }})
  }
  render() {
    return (
        <div style={style.roots}>
          <GridList cols={3} style={style.gridList}>
          {this.state.queues.map((queue) => (
            <BusinessQueue key = {queue} queue = {queue}/>
          ))}
          </GridList>
        </div>
    );
  }
}