// src/components/Header.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <h1>Maha Zainab's Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
