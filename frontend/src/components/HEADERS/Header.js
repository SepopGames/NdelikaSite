import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Header.css'; 

const Header = () => {
  return (
    
    <Navbar bg="light" expand="lg" fixed="top" >
      <Container fluid className="backgroundheaders">
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png" 
            width="130"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/blog">Новости</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
   
};

export default Header;