import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import BusinessQueue from './businessQueue.jsx';
import $ from 'jquery';


const styles = theme => ({
  gridList: {
    width: 1250,
    height: 900,
  },
});

class BusinessGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queues: []
    }
  }
  componentDidMount() {
    $.ajax({
      url: '/all_queue',
      type: 'GET',
      contentType: 'application/json',
      success: (res) => {
        this.setState({ queues: res.data })
      }
    })
    setInterval(() => {
      $.ajax({
        url: '/all_queue',
        type: 'GET',
        contentType: 'application/json',
        success: (res) => {
          this.setState({ queues: res.data })
        }
      })

    }, 5000)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={460} className={classes.gridList} cols={2}>
          {this.state.queues.map(queue => (
            <GridListTile key={queue} cols={queue.cols || 1}>
              <BusinessQueue key={queue} queue={queue} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

BusinessGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessGridList);