import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import $ from 'jquery';
import logo from '../style/qline.png';
const style = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  margin: {
    margin: theme.spacing.unit,

  },
});

let id = 0;
function createData(TiccketNumber, WindowNumber, QueueName) {
  id += 1;
  return { id, TiccketNumber, WindowNumber, QueueName};
}
const rows = [
  createData(1, 'window Number. : 2', 'Arabic Bank'),
  createData(2, 'window Number. : 5', 'Arabic Bank'),
  createData(3, 'window Number. : 1', 'Arabic Bank')
]

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    marginTop:"100px",
    marginLeft:"100px",
  },
});

export default class BusinessDashBord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
componentDidMount(match){
  console.log('sdsdsd', this.props.params.queue_id)


  
}
  handleChange = (event, value) => {
    this.setState({ value });
  };

  signOut() {

    $.ajax({
      url: '/log-out',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
      <nav className="menu"  style={{backgroundColor: "#aa1256",marginTop: "10px", marginLeft: "50px"}}>
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><a  class="menu__link" href="/">Logout</a></li>
                    </ul>
                </Grid>
      </nav>
      <Paper style={{paddingTop:"100px"}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="TV" />
          <Tab label="Kiosk" />
          <Tab label="Manage" />
          <Tab label="Statistics" />
          
        </Tabs>
      </Paper>
      {value === 0 && <TabContainer><Paper style={style.root}>
      <Table style={style.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ticket's Number</TableCell>
            <TableCell>Window's Number</TableCell>
            <TableCell >Queue's name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell >
                  {row.TiccketNumber}
                </TableCell>
                <TableCell >{row.WindowNumber}</TableCell>
                <TableCell >{row.QueueName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper></TabContainer>}
      {value === 1 && <TabContainer><div align="center">
        <Fab size="large" color="primary" aria-label="Add" style={style.margin}>
          <AddIcon/>
        </Fab> 
        <p>Add me to the Queue</p></div></TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      </div>
    );
  }
}