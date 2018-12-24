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
  card: {
    width: "500px",
    maxHeight: "200px",

  },
  media: {
    height: 50,
    maxWidth: 50,
  },
};
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
    marginLeft : 20,
    marginRight: 20
  },
  gridList: {
      width: '100%',
      height: '100%',
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
          <div style={style.roots}>
      <GridList cols={3} style={style.gridList}>
      <div>
          <Card style={styles.card}>
      <CardActionArea>
        <CardMedia
          style={styles.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwBsJDX4ZzzCUiKWSdUtGq5vKRaEfPLORqgepy1soHwcuXF6-5A"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Queue Name
          </Typography>
          <Typography component="p">
            This is all the informations about this queue.
          </Typography>
          </CardContent>
         </CardActionArea>
         <CardActions>
        <Button style={{backgroundColor:"#7aeac2", marginLeft:"250px", font:"white"}}>
          Manage the Queue
        </Button>
        </CardActions>
         </Card>
         </div>
         </GridList>
    </div>
        </FormGroup>
      </div>
    );
  }
}

