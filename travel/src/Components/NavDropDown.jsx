import React from 'react';
import { NavDropdown } from 'react-bootstrap';

function PageDropdown() {
  return (
    <NavDropdown title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item href="/">Home</NavDropdown.Item>
      <NavDropdown.Item href="/about">About</NavDropdown.Item>
      <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
    </NavDropdown>
  );
}

export default PageDropdown;