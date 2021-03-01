import '../css/ProjectsContainer.css';
import Project from '../components/Project.js';

const ProjectsContainer = (props) => {

    return (
        <div className="projects-container">
            <h1 id="projects-h1">Featured Projects</h1>
            <div className="projects-flex-container">
                <Project img={process.env.PUBLIC_URL + '/img/weston.png'} title="Weston Excavation and Construction Website" />
                <Project />
                <Project />
                <Project />
            </div>
        </div>

    );
}

export default ProjectsContainer;