import '../css/ProjectsContainer.css';
import Project from '../components/Project.js';
import ReactIcon from '../icons/react-icon.svg';
import HTML5Icon from '../icons/html5-icon.svg';
import SwiftIcon from '../icons/swift-icon.svg';
import JavaIcon from '../icons/java-icon.svg';
import PythonIcon from '../icons/python-icon.svg';

const ProjectsContainer = (props) => {

    const handleSlider = (e) => {
        let sliderOptions = document.querySelectorAll(".slider-option");
        let slideFactor = 0;
        for (let i = 0; i < sliderOptions.length; i++) {
            sliderOptions[i].classList.remove("selected");
            if (sliderOptions[i] === e.currentTarget) {
                slideFactor = i;
            }
        }
        e.currentTarget.classList.add("selected");

        let slider = document.querySelector(".slider");
        slider.style.transform = `translate(calc((100% + 1.5em)*${slideFactor}), -50%)`;

        let projects = document.querySelectorAll(".project");
        let id = e.currentTarget.id;
        if (id === "all") {
            projects.forEach(project => {
                project.style.display = "block";
            });
        }
        else if (id === "react") {
            projects.forEach(project => {
                if (project.classList.contains("React")) {
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
            });
        }
        else if (id === "html") {
            projects.forEach(project => {
                if (project.classList.contains("HTML/CSS/JS")) {
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
            });
        }
        else if (id === "swift") {
            projects.forEach(project => {
                if (project.classList.contains("Swift")) {
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
            });
        }
        else if (id === "python") {
            projects.forEach(project => {
                if (project.classList.contains("Python")) {
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
            });
        }
        else if (id === "java") {
            projects.forEach(project => {
                if (project.classList.contains("Java")) {
                    project.style.display = "block";
                }
                else {
                    project.style.display = "none";
                }
            });
        }
    }

    return (
        <div className="projects-container">
            <h1 id="projects-h1" style={{
                opacity: props.showWork ? 1 : 0
            }}>Featured Projects</h1>
            <div className="projects-filter-container" style={{
                opacity: props.showWork ? 1 : 0
            }}>
                <div className="slider-container">
                    <div className="slider"></div>
                    <div id="all" className="slider-option selected" onClick={(e) => handleSlider(e)}>
                        <p>All</p>
                    </div>
                    <div id="react" className="slider-option" onClick={(e) => handleSlider(e)}>
                        <img src={ReactIcon} alt="" />
                        <p>React</p>
                    </div>
                    <div id="html" className="slider-option" style={{ fontSize: "12px" }} onClick={(e) => handleSlider(e)}>
                        <img src={HTML5Icon} alt="" />
                        <p>HTML/CSS/JS</p>
                    </div>
                    <div id="swift" className="slider-option" onClick={(e) => handleSlider(e)}>
                        <img src={SwiftIcon} alt="" />
                        <p>Swift</p>
                    </div>
                    <div id="python" className="slider-option" onClick={(e) => handleSlider(e)}>
                        <img src={PythonIcon} alt="" />
                        <p>Python</p>
                    </div>
                    <div id="java" className="slider-option" onClick={(e) => handleSlider(e)}>
                        <img src={JavaIcon} alt="" />
                        <p>Java</p>
                    </div>
                </div>
            </div>
            <div className="projects-flex-container" style={{
                opacity: props.showWork ? 1 : 0
            }}>
                <Project className="project-component" img={process.env.PUBLIC_URL + '/img/weston.png'}
                    title="Weston Excavation and Construction Website"
                    link="https://happy-austin-36389a.netlify.app/"
                    tags={[
                        { title: "HTML/CSS/JS", icon: HTML5Icon }
                    ]}
                />
                <Project className="project-component"
                    img={process.env.PUBLIC_URL + '/img/isaacdunnett.png'}
                    title="isaacdunnett.com (This web app!)"
                    tags={[
                        { title: "React", icon: ReactIcon },
                        { title: "HTML/CSS/JS", icon: HTML5Icon }
                    ]}
                />
                <Project className="project-component"
                    img={process.env.PUBLIC_URL + '/img/DriveMeCollage.png'}
                    title="DriveMe IOS app"
                    link="https://github.com/isaacdunnett/DriveMe"
                    tags={[
                        { title: "Swift", icon: SwiftIcon }
                    ]}
                />
                <Project className="project-component"
                    img={process.env.PUBLIC_URL + '/img/flowgrate.png'}
                    title="Flowgrate app"
                    link="https://github.com/isaacdunnett/flowgrate-app"
                    tags={[
                        { title: "React", icon: ReactIcon },
                        { title: "Python", icon: PythonIcon },
                        { title: "HTML/CSS/JS", icon: HTML5Icon }
                    ]}
                />
            </div>
        </div>

    );
}

export default ProjectsContainer;