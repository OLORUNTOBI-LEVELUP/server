import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Image, Button, Nav, Navbar} from "react-bootstrap";
import "./Landingpage.css";




export default class Landingpage extends Component{
    render(){
        return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Leave.Management</Navbar.Brand>
            <Nav className="ml-auto">
            
            <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Login</Button></Nav.Link>
            <Nav.Link className="pricing" href="/dashboard"><Button>Dashboard</Button></Nav.Link>
            </Nav>
            </Navbar>
                    
            
            <Jumbotron>
                <h2>Welcome to Leave Management</h2>
                <p>A comprehensive time off manager your team will love</p>
                <div className="button">
                    <Link to="/Signup">
                        <Button  bsStyle = "primary">Sign Up</Button>
                    </Link>
                </div>
            </Jumbotron>
            <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/images.jpg" circle className="profile-pic"/>
                    <p>Are you going on a maternity leave?</p>
                </Col>
                
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/vacation2.jpg" circle className="profile-pic"/>
                    <p>Are you going on a vacation?</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/download.jpg" circle className="profile-pic"/>
                    <p>Do you need time off for your health?</p>
                </Col>


            </Row>
            <h3>We help Companies manage Time off days for their Employees.</h3>
            <footer>&copy; Leave 2019</footer>
           
            
        </div>
        );
        
    }
}