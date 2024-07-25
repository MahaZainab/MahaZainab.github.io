// src/components/Education.js

import React from 'react';
import { data } from '../../data/data';
import './Education.css';

const Education = () => {
  const { education } = data;

  return (
    <section id="education" className="education-section">
      <div className="education-wrapper">
        <h2 className="education-title">Education</h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <div className="education-item" key={index}>
              <h3 className="degree">{edu.degree}</h3>
              <p className="period">{edu.period}</p>
              <p className="institute">{edu.institute}</p>
              {edu.thesisTitle && (
                <>
                  <h4 className="thesis-title">{edu.thesisTitle}</h4>
                  <p className="thesis-domain"><strong>Domain:</strong> {edu.thesisDomain}</p>
                  <p className="technologies-used"><strong>Technologies Used:</strong> {edu.technologiesUsed.join(', ')}</p>
                  <p className="thesis-detail">{edu.thesisDetail}</p>
                </>
              )}
              {edu.finalYearProject && (
                <>
                  <h4 className="project-title">{edu.finalYearProject}</h4>
                  <p className="project-domain"><strong>Domain:</strong> {edu.projectDomain}</p>
                  <p className="technologies-used"><strong>Technologies Used:</strong> {edu.technologiesUsed.join(', ')}</p>
                  <p className="project-detail">{edu.projectDetail}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
