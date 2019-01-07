import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import businessFlat from '../style/businessFlat.png';
const styles = {
  media: {
    height: 350,
  },
};

function CardFloatBusiness(props) {
  const { classes } = props;
  return (
      <div>
    <img src={businessFlat} style={{marginLeft: "60px", marginTop: "-10px"}} width="900px" height="500px"/>
    <Card className="floatcard">
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent style={{width: "300px", marginLeft: "900px", marginTop: "-340px"}}>
          <Typography gutterBottom variant="h5" component="h2">
          Know how long your customers
          have been waiting
          </Typography>
          <Typography component="p">
          The ability to see the length of your customers’ waiting times allows you to take a proactive, empathetic approach. 
          As well as welcoming them warmly, you can make them feel appreciated by acknowledging how long they’ve been queuing for.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

CardFloatBusiness.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardFloatBusiness);