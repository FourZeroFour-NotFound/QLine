// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import GridList from '@material-ui/core/GridList';
import OneUser from './oneUser.jsx';


// direct styling of components usage and here you can avoid confussion and can easily adjust styles for 
// this specific component
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

// Renders the Gridlist for <OneUser/> Component
// this component will show information for the business owner for the list of controlled
// waiting list users
export default class usersInQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    }
  }
 
  render() {
    return (
        <div style={style.roots}>
        {/*** GridList of Waiting List ***/}
          <GridList cols={3} style={style.gridList}>
              {this.props.users.map((user) => (
                <OneUser  user = {user} />
              ))}
          </GridList>
        </div>
    );
  }
}