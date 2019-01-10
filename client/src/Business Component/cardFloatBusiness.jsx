// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import businessFlat from '../style/businessFlat.png';

// direct styling of components usage and here you can avoid confussion and can easily adjust styles for 
// this specific component
const styles = {
  media: {
    height: 350,
  },
};

// styling input to be rendered in Business Main Page to give static information for our User in order to better understand our services
function CardFloatBusiness(props) {
  const { classes } = props;
  return (
      <div>
        {/*** image shown to the main page of Business with static Card use from Material UI ***/}
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