import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Footer = () =>(

  <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
    <Container>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Privacy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cookie">Cookies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/termUse">Term of use</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    <Container>
      <p class="navbar-text">© 2021 Copyright:</p>
    </Container>
  </Container>


)
export default Footer;
