import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet,Link } from 'react-router-dom';

const Home=()=> {
  return (
<>
    <nav class="navbar navbar-expand-sm bg-primary  navbar-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">SmartAndFit.com</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
    
    
        <ul class="navbar-nav ">
            <li class="nav-item">
                <Link class="nav-link nav-dark"  to="/trainee" >Trainee</Link> 
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/trainer" >Trainer</Link> 
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/login" >Login</Link> 
            </li>
        </ul>
    
        </div>
        </div>
    </nav>
  
  <Outlet/>
</>


//       <>
//   <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">SmatAndFit.com</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link to="/trainee">Trainee</Nav.Link>
//             <Nav.Link to="/trainer">Trainer</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

   
// </>
  );
}

export default Home;