import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";

export default class Dashboard extends React.Component{
    render(){
        return (
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Leave.Management</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Calendar</Nav.Link>
                <Nav.Link href="#features">Team View</Nav.Link>
                <Nav.Link href="#pricing">Abscence Request</Nav.Link>
                </Nav>
            
               </Navbar>
               <h1 className="calendar">Employee calendar</h1>
               <h4>Users calendar for 2019</h4>
               <div><br></br>
                   <h4>Statistics</h4>
                   <Container>
                        <Row>
                            <Col><h2>16</h2> days available out of 16 in total</Col>
                            <Col>
                                                                
                                <table >
                                <tr>
                                    <th colSpan="2">Allowance breakdown</th>
                                </tr>
                                <tr>
                                    <td>Nominal allowance</td>
                                    <td>  20</td>
                                </tr>
                                <tr>
                                    <td>Carried over from 2018</td>
                                    <td>  0</td>
                                </tr>
                                <tr>
                                    <td>Individual adjustment</td>
                                    <td>  0</td>
                                </tr>
                                <tr>
                                    <td>Start/end of employment</td>
                                    <td>  -4</td>
                                </tr>
                                <tr>
                                    <td>Used so far</td>
                                    <td>  0</td>
                                </tr>
                                
                               
                                </table>

                            </Col>
                            <Col><h2>Used so far</h2><hr></hr>No approved requests so far</Col>
                            <Col><h2>Details</h2><hr></hr>Supervisor: User<br></br>Department: sales<br></br>Allowance in 2019: 16 days</Col>
                        </Row>
                    </Container><br></br>
                    <h2>Upcoming months</h2><br></br>
                    <Container>
                    
                        <Row>
                            <Col>
                            <div class="month">      
                                <ul>
                                    
                                    <li>
                                    March<br></br>
                                    <span >2019</span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li><span class="active">6</span></li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                </ul>
                                                                
                            </Col>
                            <Col><div class="month">      
                                <ul>
                                   
                                    <li>
                                    April<br></br>
                                    <span >2019</span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li><span class="active">10</span></li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                            
                                </ul>
                            </Col>
                            <Col>
                             <div class="month">      
                                <ul>
                                    
                                    <li>
                                    May<br></br>
                                    <span >2019</span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li><span class="active">8</span></li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                </ul>
                            </Col>
                            <Col>
                            <div class="month">      
                                <ul>
                                    
                                    <li>
                                    june<br></br>
                                    <span >2019</span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li><span class="active">5</span></li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>;
               </div>
               <h4 className="head">All my abscences in 2019</h4><br></br>
               <h6 className="bottom">There are no leave requests yet.</h6>
               <hr></hr>
               <footer>&copy; Leave 2019</footer>

            </div>
        );
    }
}