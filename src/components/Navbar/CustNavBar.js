// src/components/NavBar.js

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { data } from '../../data/data';

export const CustNavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={data.navbar.logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {data.navbar.links.map((link, index) => (
                <Nav.Link 
                  key={index}
                  href={link.href} 
                  className={activeLink === link.name.toLowerCase() ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink(link.name.toLowerCase())}>
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {data.navbar.socialIcons.map((icon, index) => (
                  <a key={index} href={icon.href}><img src={icon.src} alt="" /></a>
                ))}
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default CustNavBar;