import { useRef } from 'react';
import '../css/Resume.css';
import profileImg from '../img/7FAF3C07-7A77-4276-AA70-6CFCD4AE97C9_1_105_c.jpeg'

const Resume = (props) => {
    const resumeBody = useRef(0);
    const darkLightBtn = useRef(0);
    const linksTitle = useRef(0);
    const name = useRef(0);

    // counter for even or odd to keep track of dark/light toggle
    var count = 0;

    // toggle dark/light mode function
    const toggleLightDarkMode = () => {
        var h2s = document.querySelectorAll(".resume-container h2");
        var as = document.querySelectorAll("#nav a");
        var mediaLinksText = document.querySelectorAll("#media-text a");
        var i = 0;
        // if current mode is light
        if (count % 2 === 0) {
            resumeBody.current.style.backgroundColor = "rgb(36, 36, 36)";
            resumeBody.current.style.color = "white";
            darkLightBtn.current.style.backgroundColor = "white";
            darkLightBtn.current.style.color = "black";
            darkLightBtn.current.innerHTML = "Light mode";
            linksTitle.current.style.color = "white";
            name.current.style.color = "white";
            for (i = 0; i < h2s.length; i++) {
                h2s[i].style.color = "orangered";
            }
            for (i = 0; i < as.length; i++) {
                as[i].style.backgroundColor = "rgb(255, 111, 0)";
            }
            for (i = 0; i < mediaLinksText.length; i++) {
                mediaLinksText[i].style.color = "white";
            }
        }
        // if current mode is light
        else {
            resumeBody.current.style.backgroundColor = "white";
            resumeBody.current.style.color = "black";
            darkLightBtn.current.style.backgroundColor = "black";
            darkLightBtn.current.style.color = "white";
            darkLightBtn.current.innerHTML = "Dark mode";
            linksTitle.current.style.color = "black";
            name.current.style.color = "black";
            for (i = 0; i < h2s.length; i++) {
                h2s[i].style.color = "rgb(0, 78, 138)";
            }
            for (i = 0; i < as.length; i++) {
                as[i].style.backgroundColor = "rgb(29, 157, 255)";
            }
            for (i = 0; i < mediaLinksText.length; i++) {
                mediaLinksText[i].style.color = "black";
            }
        }
        // increment counter
        count++;
    }

    const goBackToMainView = () => {
        document.body.style.overflowY = 'auto';
        props.setViewResume(false);
    }

    return (
        <div className="resume-body" ref={resumeBody}>
            <button className="resume-back-btn" onClick={goBackToMainView}>&#8592;</button>
            <div className="resume-container">
                {/* Contains my personal details */}
                <section id="personal-details">
                    <div id="img-name-flex-container">
                        <img src={profileImg} height="120" alt="Isaac Dunnett" />
                        <h1 id="name" ref={name}>Isaac Dunnett</h1>
                    </div>
                    <div id="media-info-container">
                        <div id="media-text">
                            <p><strong>Phone:</strong> 506-232-4124</p>
                            <p><strong>Email:</strong> <a href="mailto:is560393@dal.ca">is560393@dal.ca</a></p>
                            <p><strong>Github:</strong> <a href="https://github.com/isaacdunnett">github.com/isaacdunnett</a>
                            </p>
                        </div>
                    </div>
                </section>
                {/*  Contains links to other sections of the page and to external websites */}
                <section id="links">
                    <h2 className="resume-h2" ref={linksTitle}>Links</h2>
                    <ul id="nav">
                        <li><a href="#exp-summary">Exp. Summary</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#edu">Education</a></li>
                        <li><a href="https://www.dal.ca/faculty/computerscience.html">Dalhousie CompSci</a></li>
                    </ul>
                </section>
                {/*  Summary of my job experience */}
                <section id="exp-summary">
                    <h2 className="resume-h2">Experience Summary</h2>
                    <p>I am a third year transfer student with 2 years of Software Engineering at UNB and starting first
                    year of Computer Science at Dalhousie University.</p>
                </section>
                {/* Contains my job experience */}
                <section id="experience">
                    <h2 className="resume-h2">Experience</h2>
                    {/* Role 2  */}
                    <section id="role1" className="exp-role">
                        <h3>Full Stack Developer</h3>
                        <h4>NAV Canada, May 2019 - September 2019</h4>
                        <p>At NAV Canada, I was a Software Engineering/Computer Science summer student.</p>
                        <ul>
                            <li>Created an online photoboard for the employees</li>
                            <li>Offered tech support for SharePoint</li>
                            <li>Created tutorial videos on SharePoint embeded development</li>
                        </ul>
                    </section>
                    {/* Role 2 */}
                    <section id="role2" className="exp-role">
                        <h3>System Integration Consultant and Developer</h3>
                        <h4>Simple Stack Solutions, May 2020 - September 2020</h4>
                        <p>I joined forces with a property manager to create automations and integrations for other property
                        managers' businesses. Ex: Automating leases.</p>
                        <ul>
                            <li>Chat with clients about their needs for automation</li>
                            <li>Develop new integrations with third party apps from scratch or using
                            Zapier/Integromat/Automate.io</li>
                            <li>Create flow chart diagrams for clients laying out the steps of their integration(s)</li>
                        </ul>
                    </section>
                    {/* Role 3 */}
                    <section id="role3" className="exp-role">
                        <h3>Monday.com App Developer</h3>
                        <h4>Self-Employed, May 2020 - September 2020</h4>
                        <p>I took part in the launch of the Apps Marketplace in Monday.com by creating and submitting an app.</p>
                        <ul>
                            <li>Created a Flow Chart like app in React JS that uses the automation data in your boards</li>
                        </ul>
                    </section>
                </section>
                {/* Contains a list of my skills with proficiency levels  */}
                <section id="skills" className="">
                    <h2 className="resume-h2">Skills</h2>
                    <ul id="skills-ul">
                        <li>Experienced developer in the following programming languages:
                                <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML/CSS</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>SQL</li>
                            </ul>
                        </li>
                        <li>Experienced in using the Unity game engine</li>
                        <li>Intermediate in programming VHDL and logic circuit design</li>
                        <li>Intermediate skills in consulting and working with others</li>
                        <li>Intermediate skills in marketing techniques and producing marketing content</li>
                    </ul>
                </section>
                {/* Contains any prior education experience (Degrees) */}
                <section id="edu" className="">
                    <h2 className="resume-h2">Education</h2>
                    <h3>Bachelor of Science in Software Engineering</h3>
                    <h4>University of New Brunswick, 2018-2020</h4>
                    <p>In the two years that I studied Software Engineering I took plenty of base engineering courses,
                    calculus courses and physics courses. I also took a few
                        computer science courses and many electrical engineering courses.</p>
                    <ul>
                        <li>Engineering</li>
                        <li>Electrical</li>
                        <li>Computer Science</li>
                    </ul>
                </section>
            </div>
            <button id="btn-dark-light-mode" ref={darkLightBtn} onClick={toggleLightDarkMode}>Dark mode</button>
        </div>
    );
}

export default Resume;