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

const styles = theme => ({
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
});

class CreateQueueCard extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
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