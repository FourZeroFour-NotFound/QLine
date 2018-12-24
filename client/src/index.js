import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
 import User from './Components/User';
import * as serviceWorker from './serviceWorker';

//import a from "./LogInandSignUp.jsx";



import Business from './component/business.jsx';
import Profile from './Components/Profile';
import BusinessQueue from './component/businessQueue.jsx';
import BusinessGridList from './component/businessGridList.jsx';


// ReactDOM.render(<Business/>, document.getElementById('root'));
// serviceWorker.unregister();

ReactDOM.render(<App/>, document.getElementById('root'));

