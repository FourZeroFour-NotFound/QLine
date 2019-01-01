import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import SearchQueue from './SearchQueue.jsx';
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

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queues:[]
    }
  }
 
  render() {
    return (
        <div style={style.roots}>
          <GridList cols={3} style={style.gridList}>
          {this.props.queues.map((queue) => (
            <SearchQueue key = {queue} queue = {queue}/>
          ))}
          </GridList>
        </div>
    );
  }
}