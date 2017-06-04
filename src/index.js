import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
