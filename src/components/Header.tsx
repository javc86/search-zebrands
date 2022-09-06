import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Image
          src={require('../assets/logo.png').default}
          alt=""
          width="100"
          thumbnail
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/')}>Repositories</Nav.Link>
          <Nav.Link onClick={() => navigate('/users')}>Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
