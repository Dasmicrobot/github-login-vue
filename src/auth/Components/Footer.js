import React from 'react'
import About from '../Components/About';
import Cookies from '../Components/Cookies';
import TermOfUse from '../Components/TermOfUse';
import Privacy from '../Components/Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Footer = () =>(

  <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
    <Container>
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cookies">
            <Cookies />
          </Route>
          <Route path="/termOfUse">
            <TermOfUse />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
    <Container>
      <p class="navbar-text">© 2021 Copyright:</p>
    </Container>
  </Container>


)
export default Footer;
