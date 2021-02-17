import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import '../css/ProjectCard.css';



const ProjectCard = ({ title, image }) => {

    return (
        <div className="project-card" style={{
            backgroundImage: "url(" + process.env.PUBLIC_URL + image + ")"
        }}>
            <h1>{title}</h1>
        </div>
    );
}

export default ProjectCard;