import React from 'react'
import Link from 'next/link';

const Footer = () =>(

  <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
    <Container>
    <ul>
      <li>
        <Link href="../pages/TermOfUse">
          <a>Term of use</a>
        </Link>
      </li>
      <li>
        <Link href="../pages/About">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="../pages/Cookies">
          <a>Cookies</a>
        </Link>
      </li>
      <li>
        <Link href="../pages/Privacy">
          <a>Privacy</a>
        </Link>
      </li>
    </ul>
    </Container>
    <Container>
      <p class="navbar-text">© 2021 Copyright</p>
    </Container>
  </Container>


)
export default Footer;
