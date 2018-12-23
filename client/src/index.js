import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import User from './Components/User';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<User />, document.getElementById('root'));
serviceWorker.unregister();
 