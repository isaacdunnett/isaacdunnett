import '../css/Project.css';
import { useRef, useEffect } from 'react';

const Project = (props) => {
    const projectLink = useRef(0);

    useEffect(() => {
        props.tags.forEach(tag => {
            projectLink.current.classList.add(tag.title);
        });
    });


    const handleTags = () => {
        return props.tags.map((tag, id) => {
            return <div key={id} className="tag-container">
                <img src={tag.icon} alt={tag.title} />
                <p>{tag.title}</p>
            </div>;
        });
    }

    return (
        <a href={props.link} ref={projectLink} className="project" target="_blank" rel="noreferrer">
            <div className="project-card">
                <img className="project-img" src={props.img} alt={props.title} />
                <h3 className="project-title">{props.title}</h3>
                <div className="project-tags">{handleTags()}</div>
            </div>
        </a>

    );
}

export default Project;