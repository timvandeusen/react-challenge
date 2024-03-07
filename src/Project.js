import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Project = ({ title, description, demoLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default Project;