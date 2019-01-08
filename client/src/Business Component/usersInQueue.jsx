import React from 'react';
import GridList from '@material-ui/core/GridList';
import OneUser from './oneUser.jsx';


const style = theme => ({
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

export default class usersInQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div style={style.roots}>
        <GridList cols={3} style={style.gridList}>
          {this.props.users.map((user) => (
            <OneUser user={user} />
          ))}
        </GridList>
      </div>
    );
  }
}