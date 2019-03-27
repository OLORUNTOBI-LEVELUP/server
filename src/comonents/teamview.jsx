import React from "react";
import { Nav, Navbar, Button} from "react-bootstrap";
import "./teamview.css";


export default class Teamview extends React.Component{
    render(){
        return (
            <div >
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Leave Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/teamview">Team view</Nav.Link>
                        <Nav.Link href="/abscencerequest">Abscence request</Nav.Link>      
                        <Nav.Link href="/Signin">Sign out</Nav.Link>
                    
                        </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>;

                <div>
                    <h1 className="teamview-head">Oloruntobi Awoderu's Messages</h1>
                    <h1 className="teamview-p">Leave request to approve</h1>
                    <div className="overflow">
                    <table className="table-teamview">
                            <tbody>
                             
                                <tr>
                                    <td>Employee</td>
                                    <td> Department</td>
                                    <td>Date of request</td>
                                    <td>Leave dates</td>
                                    <td>Type</td>
                                    <td colSpan="3">Days</td>
                                </tr>
                                <tr>
                                    <td>John doe</td>
                                    <td>Sales</td>
                                    <td>2019-01-10</td>
                                    <td>From 2019-01-15 to 2019-01-17</td>
                                    <td>Sick Leave</td>
                                    <td>2</td>
                                    <td><Button className="reject" variant="warning">Reject</Button></td>
                                    <td><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td>Tolu Daniels</td>
                                    <td>Product Design</td>
                                    <td>2019-01-15</td>
                                    <td>From 2019-01-19 to 2019-01-23</td>
                                    <td>Holiday</td>
                                    <td>4</td>
                                    <td><Button className="reject" variant="warning">Reject</Button></td>
                                    <td><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td>Yemi Osinbanjo</td>
                                    <td>Legal</td>
                                    <td>2019-02-10</td>
                                    <td>From 2019-02-15 to 2019-02-17</td>
                                    <td>Holiday</td>
                                    <td>2</td>
                                    <td><Button className="reject" variant="warning">Reject</Button></td>
                                    <td><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td>Babajide Sanwo-olu</td>
                                    <td>Cooperate Affairs</td>
                                    <td>2019-02-20</td>
                                    <td>From 2019-2-22 to 2019-02-25</td>
                                    <td>Paternity Leave</td>
                                    <td>3</td>
                                    <td><Button className="reject" variant="warning">Reject</Button></td>
                                    <td><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td>Mark Essien</td>
                                    <td>IT</td>
                                    <td>2019-03-10</td>
                                    <td>From 2019-03-15 to 2019-03-17</td>
                                    <td>Sick Leave</td>
                                    <td>2</td>
                                    <td><Button className="reject" variant="warning">Reject</Button></td>
                                    <td><Button>Approve</Button></td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                </div>
                <div>
                    <h1 className="teamview-p1">All Leaves</h1>
                    <div className="overflow">
                    <table className="table1">
                    <tbody>
                 
                             
                 <tr>
                     <td>Type</td>
                     <td> Deducted</td>
                     <td>Dates</td>
                     <td>Approved by</td>
                     <td>Status</td>
                   
                 </tr>
                 <tr>
                     <td>Holiday</td>
                     <td>2</td>
                     <td>From 2019-01-15 to 2019-01-17</td>
                     <td>Mayowa</td>
                     
                     <td><a href="https://imgplaceholder.com"><img src="https://imgplaceholder.com/30x30/cccccc/757575/glyphicon-trash" alt="ImgPlaceholder"/></a>Approved</td>
                    
                 </tr>
                 <tr>
                     <td>Sick leave</td>
                     <td>3</td>
                     <td>From 2019-01-19 to 2019-01-23</td>
                     <td>Mayowa</td>
                     <td><a href="https://imgplaceholder.com"><img src="https://imgplaceholder.com/30x30/cccccc/757575/glyphicon-trash" alt="ImgPlaceholder"/></a> Approved</td>
                     
                 </tr>
                 <tr>
                     <td>Holiday</td>
                     <td>2</td>
                     <td>From 2019-02-15 to 2019-02-17</td>
                     <td>Mayowa</td>
                     <td>Pending</td>
                   
                 </tr>
                 <tr>
                     <td>Paternity Leave</td>
                     <td>3</td>
                     <td>From 2019-2-22 to 2019-02-25</td>
                     <td>Mayowa</td>
                     <td>Pending</td>
                     
                 </tr>
                 </tbody>
                 </table>
                 </div>

                </div>
                <footer>&copy; Leave 2019</footer>
            </div>
        );
    }
}