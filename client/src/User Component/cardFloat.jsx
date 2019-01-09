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
import flatpng from '../style/flatpng.png';


const styles = {
  media: {
    height: 350,
  },
};

// Floating card in the User Main Page with static pictures and styling
function CardFloat(props) {
  const { classes } = props;
  return (
    <div>
      <img src={flatpng} style={{ marginLeft: "60px", marginTop: "-10px" }} width="800px" height="500px" />
      <Card className="floatcard1">
        <CardActionArea>
          <CardMedia
            className={classes.media}
          />
          <CardContent style={{ width: "300px", marginLeft: "40px", marginTop: "20px" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Queue Management System
          </Typography>
            <Typography component="p">
              This ‘waste of time’ might seem as inevitable as having to sleep, or having lunch, but with QLine,
              you can reclaim those wasted hours and use them more productively, to benefit yourself. Get started today!
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

CardFloat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardFloat);