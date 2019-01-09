// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import BusinessQueue from './businessQueue.jsx';
import $ from 'jquery';

// direct styling of components usage, one of the advantage of using react is suffecient and flexible usage of style
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    backgroundColor: "#7aeac2",
  },
  roots: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    marginLeft: 20,
    marginRight: 20
  },
  gridList: {
    width: 1250,
    height: 900,
  },
});

// component that renders the Grid List of the created Queue and will be used in the Business Main Page
// Material UI GridList View used to implement User Experience in GridList Interaction 
class BusinessGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queues:[]
    }
  }

  componentDidMount() {
    $.ajax({
      // mounting request for the display of all queues in Gridlist
      url: '/all_queue',
      type: 'POST',
      contentType: 'application/json',
      success: (res) => {
          this.setState({ queues: res.data })
      }
    })

    setInterval(()=>{
      $.ajax({
        // same request from above but with setinterval Complexity
        url: '/all_queue',
        type: 'POST',
        contentType: 'application/json',
        success: (res) => {
            this.setState({ queues: res.data })
        }
      })
    },5000)
  }


  // GridList Rendering for this component  using Algorithm to input number of Queues to be rendered
  // inside the gridList as requested by function ajax above maintained in database
  render() {
    const { classes } = this.props;
    return (
      // GridList View to be use in Business Main Page
      <div className={classes.root}>
          <GridList cellHeight={460} className={classes.gridList} cols={2}>
              {this.state.queues.map(queue => (
                <GridListTile key={queue} cols={queue.cols || 1}>
                    <BusinessQueue key = {queue} queue = {queue}/>
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

// deploying or exporting component with style usage
export default withStyles(styles)(BusinessGridList);