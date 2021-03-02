import '../css/Project.css';

const Project = (props) => {

    const handleTags = () => {
        return props.tags.map((tag, id) => {
            return <div key={id} className="tag-container">
                <img src={tag.icon} alt={tag.title} />
                <p>{tag.title}</p>
            </div>;
        });
    }

    return (
        <a href={props.link} className={"project " + props.tags.map((tag) => {
            return tag.title + " ";
        })} target="_blank" rel="noreferrer">
            <div className="project-card">
                <img className="project-img" src={props.img} alt={props.title} />
                <h3 className="project-title">{props.title}</h3>
                <div className="project-tags">{handleTags()}</div>
            </div>
        </a>

    );
}

export default Project;