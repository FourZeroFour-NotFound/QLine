import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import User from './Components/User';
import * as serviceWorker from './serviceWorker';
import Business from './component/business.jsx';
import Profile from './Components/Profile';
import { Router, Route, browserHistory } from 'react-router';
import Login from './popLogin.js';
import SignUp from './popSignUp.js';
import BusinessQueue from './component/businessQueue.jsx';
import BusinessGridList from './component/businessGridList.jsx';
import Loading from './Loading.js';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="/sign-in" exact component={Login} />
              <Route path="/sign-up" exact component={SignUp} />
            </Route>
            <Route path="/user" exact component={Profile} />
            <Route path="/business" exact component={Business} />
        </Router>
      );
    }
  }

ReactDOM.render(<Loading/>, document.getElementById('root'));
setTimeout(()=>{
ReactDOM.render(<HomePage/>, document.getElementById('root1'));
},5000);
setTimeout(()=>{
  window.responsiveVoice.speak("Welcome to Q Line........ How can I Help you?")
}, 6500)
serviceWorker.unregister();



