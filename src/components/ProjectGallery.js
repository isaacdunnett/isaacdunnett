import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import '../css/ProjectGallery.css';
import { projectData } from '../data/projectData.js';

const ProjectGallery = (props) => {

    return (
        <div className="container" style={{
            maxHeight: props.show ? '500px' : '0',
            opacity: props.show ? 1 : 0
        }}>
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