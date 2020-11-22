import React from 'react';
import postscript from '../images/postscript.png';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarHeader.css";

function NavbarHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/home">
        <img alt="logo" src={postscript} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" />
    </Navbar>
  );
}

export default NavbarHeader;