import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './component/header';

ReactDOM.render(<Header />, document.getElementById('root'));
serviceWorker.unregister();
