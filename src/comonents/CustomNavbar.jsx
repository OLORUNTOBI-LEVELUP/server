import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import "./CustomNavbar.css";

class CustomNavbar extends Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">TimeOff.Management</Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Login</Button></Nav.Link>
      <Nav.Link className="pricing" href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
        );

    }
}
export default CustomNavbar;