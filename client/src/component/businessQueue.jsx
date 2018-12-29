import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

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
    width: "600px",
    height: "350px",
    margin: 7,

  },
  media: {
    height: 100,
    maxWidth: 100,
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
    marginLeft: 20,
    marginRight: 20
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

export default class BusinessQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null
    }
  }
  render() {
    return (
      <div>
        <Card style={styles.card}>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"defult"}}>
                {this.props.queue.nameOfQueeu}
              </Typography>
            <CardContent>
            <CardMedia
              style={styles.media}
              image={this.props.queue.imgUrl}
            />
              <Typography component="p">
                {"Start Time:" + this.props.queue.start_time}<br />
                {"End Time:" + this.props.queue.end_time}<br />
                {"Date:" + this.props.queue.date}<br />
                {"The time for each customer:" + this.props.queue.timeforone}<br />
                {"Number of windows:" + this.props.queue.windows}<br />
                {"Premium permission:" + this.props.queue.take_premum}<br />
                {"Accept customers:" + this.props.queue.accept_join}<br />
                {"The requirements for attending this queue:" + this.props.queue.requierment}<br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button href = {`/BusinessDashBord/${this.props.queue.queue_id}`}
            style={{ backgroundColor: "#7aeac2", marginTop: "90px", marginLeft: "200px", font: "white" }}>
              Manage the Queue
             
        </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}