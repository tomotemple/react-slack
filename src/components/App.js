import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';

class App extends Component {
  render() {
    return (
      <div>
        App
        <Router>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/" component={}/>
          
        </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
