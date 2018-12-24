import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Business from './component/business.jsx';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
