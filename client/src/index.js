import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './First Page Component/App';
import User from './User Component/User.jsx';
import Business from './Business Component/business.jsx';
import Profile from './User Component/Profile.jsx';
import { Router, Route, browserHistory } from 'react-router';
import Login from './First Page Component/popLogin.js';
import SignUp from './First Page Component/popSignUp.js';
import Loading from './First Page Component/Loading.js';
import BusinessDashBord from './Business Component/businessDashBord.jsx';
import ContactUs from "./First Page Component/ContactUs.jsx";
import AdminDash from './First Page Component/AdminDashboard.jsx'
import FeaturePage from './First Page Component/FeaturesHomePage.jsx';

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
              <Route path="/profile" exact component={Profile} />
              <Route path="/business" exact component={Business} />
              <Route path="/user" exact component={User} />
              <Route path="/BusinessDashBord/:queue_id" exact component={BusinessDashBord} />
              <Route path="/feature" exact component={FeaturePage}/>
              <Route path="/ContactUs" exact component={ContactUs} />
              <Route path="/admin" exact component={AdminDash} />
              <Route path="/feature" exact component={FeaturePage}/>
        </Router>
      );
    }
  }

ReactDOM.render(<HomePage/>, document.getElementById('root'));

// setTimeout(()=>{
//   window.responsiveVoice.speak("Welcome to Q Line........ How can I Help you?")
// }, 5000)

