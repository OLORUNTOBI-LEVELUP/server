import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./comonents/Landingpage";
import Signup from "./comonents/Signup";
import Signin from './comonents/Signin';
import Dashboard from './comonents/dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Landingpage} />  
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" component={Signin} /> 
          <Route path="/dashboard" component={Dashboard} />

        </div>
      </Router>
    );
  }
}

export default App;
