import React from 'react';
import GridList from '@material-ui/core/GridList';
import SearchQueue from './SearchQueue.jsx';


const style = theme => ({
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
        <div className="theSearch">
          <GridList cols={2} style={style.gridList}>
          {this.props.queues.map((queue) => (
            <SearchQueue key = {queue} queue = {queue}/>
          ))}
          </GridList>
        </div>
    );
  }
}