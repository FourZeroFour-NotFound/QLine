import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Q from '../style/qline.jpg';
import CreateQueue from './creatQueue.jsx';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  card: {
    maxWidth: 400,
    marginLeft: 1430,
    marginTop: -800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
              <CreateQueue/>
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