// src/components/Main.js

import React from 'react';
import { data } from '../../data/data';
import './Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <section id="about">
        <h2>{data.about.title}</h2>
        <p>{data.about.description}</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
