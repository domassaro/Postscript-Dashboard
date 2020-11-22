import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import './Sidebar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
      // Beause of limited time and requirements for projects, only wired up campaign and dashboard tabs
      <Navbar id="side-nav-container" className="bg-light">
        <Nav defaultActiveKey="/home" className="flex-column" bg="primary" variant="dark">
          <Link className="d-flex align-items-center nav-item nav-link" to="/home" >Dashboard</Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Automations">Automations</Nav.Link>
          <Link className="d-flex align-items-center nav-item nav-link" to="/campaigns" >Campaigns</Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Segments">Segments</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Keywords">Keywords</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Responses">Responses</Nav.Link>
          <NavDropdown.Divider />

          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Grow-List">Grow List</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Popups">Popups</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Checkout">Checkout</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Integrations">Integrations</Nav.Link>
          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Analytics">Analytics</Nav.Link>
          <NavDropdown.Divider />

          <Nav.Link className="d-flex align-items-center nav-item" eventKey="Refer">Refer and Earn!</Nav.Link>
        </Nav>
      </Navbar>
  );
};

export default Sidebar;
