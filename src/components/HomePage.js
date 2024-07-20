// src/components/HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
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
      <main className="main-content">
        <section id="about">
          <h2>About Me</h2>
          <p>Hi, I'm Maha Zainab, a passionate developer with a knack for creating elegant and efficient solutions. Welcome to my portfolio!</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here you will find some of my recent work.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Maha Zainab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
