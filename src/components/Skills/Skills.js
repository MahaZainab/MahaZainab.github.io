// src/components/Skills.js

import React from 'react';
import { data } from '../../data/data';
import './Skills.css';

const Skills = () => {
  const { skills } = data;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">Here are some of my skills on which I have been working</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-category" key={index}>
              <h3 className="skill-category-title">{skill.title}</h3>
              <div className="skill-list">
                {skill.skills.map((item, idx) => (
                  <div className="skill-item" key={idx}>
                    <img src={item.image} alt={item.name} className="skill-icon" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
