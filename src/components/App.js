import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'

import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home';
//channel add function
class App extends Component {
  render() {
   return (
     
    <div>{ ( this.props.authenticated === false)?(
     
      <div>
        App
        <Router>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Login}/>
        </Switch>
        </Router>

      </div>       
   ):(
     (
      <div>
        App
        <Router>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
        </Router>

      </div>
    ))}</div>
   )}
}
const mapStateToProps = (state) =>({
  authenticated: state.authenticateUser
});
export default connect(mapStateToProps,{})(App);
