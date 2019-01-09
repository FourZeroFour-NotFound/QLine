// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Q from '../style/qline.jpg';
import CreateQueue from './creatQueue.jsx';
import Button from '@material-ui/core/Button';


// direct styling of components usage and here you can avoid confussion 
const styles = theme => ({
  card: {
    maxWidth: 400,
    marginLeft: 1430,
    marginTop: -400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  actions: {
    display: 'flex',
  },
  expand: {
    backgroundColor: '#7aeac2',
    marginLeft: '60px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
});


// Component that rendered in Business Home Page and to be used by CreateQueue Component for User Usage
// This component help user to Create his own Queue and Managing his own preferences
class CreateQueueCard extends React.Component {
    state = { 
      expanded: false 
    };

    // stateless function that helps user to click and view his Create Queue Section with click button
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    // Renders Card View for User UI experience
    render() {
      const { classes } = this.props;
  
      return (
        // Card with the collapse which will render Customers/ Users Create Queue Page
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Q}
          />
          <CardContent>
            <Typography component="p">
              Want to improve your Business Revenue? Click, Create, and Manage your Queue Now!
            </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          > Create Your Queue Here
              <ExpandMoreIcon />
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CreateQueue />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CreateQueueCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateQueueCard);