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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';



const styles = theme => ({
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    fontSize:'20px'
  }
});


export default class SearchQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      open: false,
      open1: false,
      allqueue :{},
      notes:'',
    }
  }

  componentDidMount = () => {
this.setState({
    allqueue:this.props.queue
})
  }

  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick = () => {
      console.log('gggggg', this.state.open1)
    this.setState({ open1: !this.state.open1 });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange =  event => {
    this.setState({
     notes: event.target.value,
    });
  };
  render() {
   
    const { classes } = this.props;
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
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button onClick={this.handleClickOpen}
            style={{ backgroundColor: "#7aeac2", marginTop: "90px", marginLeft: "200px", font: "white" }}>
             Join
             
        </Button>
        <Dialog
              open={this.state.open}
            >

              <DialogContent>
                <DialogContentText>
                  <h2>    {this.state.allqueue.nameOfQueeu}</h2>
                </DialogContentText>
               {"Start Time:" + this.state.allqueue.start_time}<br />
                {"End Time:" + this.state.allqueue.end_time}<br />
                {"Date:" + this.state.allqueue.date}<br />
                {"The time for each customer:" + this.state.allqueue.timeforone}<br /> 
                {"Number of windows:" + this.state.allqueue.windows}<br />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleClick} color="primary">
                 Book
            </Button>

                <Dialog
              open={this.state.open1}
            >

              <DialogContent>
                <DialogContentText>
                  <h2>Requerments</h2>
                </DialogContentText>
                 <h2> The requirements for attending this queue: </h2> 
                 <h3> {this.state.allqueue.requierment}</h3><br />
                 <h4>Notes:</h4>

                   <TextField
          id="outlined-multiline-static"
          label=""
       
          rows="10"
          value={this.state.notes}
          onChange={this.handleChange}
          style={styles.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleClickOpen} color="primary">
                Confirm
            </Button>
              </DialogActions>
            </Dialog>
              </DialogActions>
            </Dialog>
          </CardActions>
        </Card>
      </div>
    );
  }
}