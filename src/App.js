// src/App.js

import React from 'react';
import CustNavBar from './components/Navbar/CustNavBar';
import Banner from './components/Banner/Banner';
import Skill from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <CustNavBar />
      <Banner />
      <Skill />
      <Education />
      <Projects />

    </div>
  );
}

export default App;
