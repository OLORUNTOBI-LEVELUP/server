import React from "react";
import "./abscencerequest.css";
import { Nav, Navbar } from "react-bootstrap";


export default class Abscencerequest extends React.Component {
    render(){
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Leave.Management</Navbar.Brand>
                <Nav className="mr-auto mr-auto1">
                <Nav.Link href="#home">Calendar</Nav.Link>
                <Nav.Link href="#features">Team View</Nav.Link>
                <Nav.Link href="/abscencerequest">Abscence Request</Nav.Link>
                </Nav>
            
               </Navbar>
    <div class="modal-dialog">
              
    <div class="modal-content">
    <form method="POST" >
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">New absence</h5>
        {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>*/}
       
      </div>
      <div class="modal-body">

          
          <div class="form-group">
            <label for="leave_type" class="control-label">Leave type:</label>
            <select class="form-control" id="leave_type" name="leave_type">
                <option value="0" data-tom="Holiday">Holiday</option>
                <option value="1" data-tom="Sick Leave">Sick Leave</option>
                <option value="2" data-tom="Maternity Leave">Maternity Leave</option>
                <option value="3" data-tom="Paternity Leave">Paternity Leave</option>
                <option value="4" data-tom="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="from" class="control-label">From:</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="from_date_part">
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date" class="form-control book-leave-from-input" id="from" data-provide="datepicker" data-date-autoclose="1" data-date-format="yyyy-mm-dd" data-date-week-start="1" value="2019-03-14" name="from_date" />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="to" class="control-label">To:</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="to_date_part">
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date" class="form-control book-leave-to-input" id="to" data-provide="datepicker" data-date-autoclose="1" data-date-format="yyyy-mm-dd" data-date-week-start="1" value="2019-03-14" name="to_date" />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="leave_type" class="control-label">Comment (optional):</label>
            <textarea class="form-control" id="leave_reason" name="reason"></textarea>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-success">Create</button>
          <input type="hidden" name="redirect_back_to" value="/calendar/" />
      </div>
    </form>
    </div>
  </div>
  </div>
  
        );
    }
}