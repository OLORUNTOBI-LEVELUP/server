import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./comonents/Landingpage";
import Navbar from "./comonents/CustomNavbar";
import Signup from "./comonents/Signup";
import Signin from './comonents/Signin';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landingpage} />  
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" component={Signin} /> 

        </div>
      </Router>
    );
  }
}

export default App;
