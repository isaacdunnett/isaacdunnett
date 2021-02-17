import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.js';
import '../css/ProjectGallery.css';
import { projectData } from '../data/projectData.js';

function ProjectGallery() {

    return (
        <div className="container">
            <h1>Project Gallery</h1>
            <div className="project-card-flex-container">
                {projectData.map((data, key) => {
                    console.log(typeof data.img);
                    return (
                        <ProjectCard key={key} title={data.title} image={data.img} />
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectGallery;