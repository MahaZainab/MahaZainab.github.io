// src/components/ProjectCard.js

import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './ProjectCard.css';

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Button variant="primary" href={gitUrl} target="_blank" className="github-btn">GitHub</Button>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;