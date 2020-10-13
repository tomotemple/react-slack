import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
