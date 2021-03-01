import '../css/Project.css';

const Project = (props) => {

    return (
        <div className="project">
            <div className="project-card">
                <img className="project-img" src={props.img} alt={props.title} />
                <h3 className="project-title">{props.title}</h3>
                <p className="project-tags">tag1 tag2</p>
            </div>
        </div>

    );
}

export default Project;