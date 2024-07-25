// src/components/Skills.js

import React from 'react';
import { data } from '../../data/data';
import './Skills.css';

const Skills = () => {
  const { frontend, backend, languages, others } = data.skills;

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
        <span>{skill.name}</span>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Here are some of my skills on which I have been working</p>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-list">
            {renderSkills(frontend)}
          </div>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-list">
            {renderSkills(backend)}
          </div>
        </div>
        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            {renderSkills(languages)}
          </div>
        </div>
        <div className="skills-category">
          <h3>Others</h3>
          <div className="skills-list">
            {renderSkills(others)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
