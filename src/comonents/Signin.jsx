import React from "react";
import { Link } from "react-router-dom"
import { Nav, Navbar, Button} from "react-bootstrap"

import "./Signin.css";

export default class Signin extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["emailid"] = "";
		  fields["password"] = "";
          this.setState({fields:fields});
          window.location.href="/dashboard";
         // alert("Login successful");
          
          
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;


      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }


      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter a minimum of eight characters with at least a number and a letter.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    render() {
        return (
          <div>
          <div>
             <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Leave.Management</Navbar.Brand>
            <Nav className="ml-auto">
            
            <Nav.Link className="link" href="/Signin"><Button className="signin-btn">Login</Button></Nav.Link>
            <Nav.Link className="pricing" href="/dashboard">Pricing</Nav.Link>
            </Nav>
            </Navbar>
          </div>
        
        <div id="main-registration-container">
        
         <div id="register">
          <h5> </h5>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        
                        <label>Email ID:</label>
                        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input type="submit" className="button1" href="/dashboard"  value="Login" />
           
           <p className="secondp"><Link to="">Forgot password?</Link> || <Link to="/Signup">Create account</Link></p>
           </form>

       </div>
	
     </div>
     </div>
     
     
      );
  }


}


   