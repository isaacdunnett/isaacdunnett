import { useRef } from 'react'
import '../css/Resume.css'
import profileImg from '../img/7FAF3C07-7A77-4276-AA70-6CFCD4AE97C9_1_105_c.jpeg'

const Resume = (props) => {
    const resumeBody = useRef(0)
    const darkLightBtn = useRef(0)
    const linksTitle = useRef(0)
    const name = useRef(0)

    // counter for even or odd to keep track of dark/light toggle
    var count = 0

    // toggle dark/light mode function
    const toggleLightDarkMode = () => {
        let h2s = document.querySelectorAll(".resume-container h2")
        let as = document.querySelectorAll("#nav a")
        let mediaLinksText = document.querySelectorAll("#media-text a")
        let i = 0
        // if current mode is light
        if (count % 2 === 0) {
            resumeBody.current.style.backgroundColor = "rgb(36, 36, 36)"
            resumeBody.current.style.color = "white"
            darkLightBtn.current.style.backgroundColor = "white"
            darkLightBtn.current.style.color = "black"
            darkLightBtn.current.innerHTML = "Light mode"
            linksTitle.current.style.color = "white"
            name.current.style.color = "white"
            for (i = 0; i < h2s.length; i++) {
                h2s[i].style.color = "orangered"
            }
            for (i = 0; i < as.length; i++) {
                as[i].style.backgroundColor = "rgb(255, 111, 0)"
            }
            for (i = 0; i < mediaLinksText.length; i++) {
                mediaLinksText[i].style.color = "white"
            }
        }
        // if current mode is light
        else {
            resumeBody.current.style.backgroundColor = "white"
            resumeBody.current.style.color = "black"
            darkLightBtn.current.style.backgroundColor = "black"
            darkLightBtn.current.style.color = "white"
            darkLightBtn.current.innerHTML = "Dark mode"
            linksTitle.current.style.color = "black"
            name.current.style.color = "black"
            for (i = 0; i < h2s.length; i++) {
                h2s[i].style.color = "rgb(0, 78, 138)"
            }
            for (i = 0; i < as.length; i++) {
                as[i].style.backgroundColor = "rgb(29, 157, 255)"
            }
            for (i = 0; i < mediaLinksText.length; i++) {
                mediaLinksText[i].style.color = "black"
            }
        }
        // increment counter
        count++
    }

    return (
        <div className="resume-body" ref={resumeBody}>
            <div className="resume-container">
                {/* Contains my personal details */}
                <section id="personal-details">
                    <div id="img-name-flex-container">
                        <img src={profileImg} height="120" alt="Isaac Dunnett" />
                        <h1 id="name" ref={name}>Isaac Dunnett</h1>
                    </div>
                    <div id="media-info-container">
                        <div id="media-text">
                            <p><strong>Email:</strong> <a href="mailto:is560393@dal.ca">is560393@dal.ca</a></p>
                            <p><strong>Website: </strong><a href="https://isaacdunnett.com/">isaacdunnett.com</a></p>
                            <p><strong>Github:</strong> <a href="https://github.com/isaacdunnett">github.com/isaacdunnett</a></p>
                        </div>
                    </div>
                </section>
                {/*  Contains links to other sections of the page and to external websites */}
                <section id="links">
                    <h2 className="resume-h2" ref={linksTitle}>Links</h2>
                    <ul id="nav">
                        <li><a href="#edu">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#other-edu">Other Education</a></li>
                        <li><a href="#extra-curricular">Extra-Curricular</a></li>
                        <li><a href="https://www.dal.ca/faculty/computerscience.html">Dalhousie CompSci</a></li>
                    </ul>
                </section>
                {/*  Summary of my job experience */}
                <section id="exp-summary">
                    <h2 className="resume-h2">Summary</h2>
                    <p>I am a third year transfer student with 2 years of Software Engineering at UNB and finishing my first
                    year of Computer Science at Dalhousie University.</p>
                </section>
                {/* Contains my job experience */}
                <section id="experience">
                    <h2 className="resume-h2">Experience</h2>
                    {/* Role 1  */}
                    <section id="role1" className="exp-role">
                        <h3>System Integrator/Consultant</h3>
                        <p>Self Employed</p>
                        <p>Remote</p>
                        <p>Summer 2020</p>
                    </section>
                    {/* Role 2  */}
                    <section id="role2" className="exp-role">
                        <h3>Student Full Stack Developer/Junior IT Technician</h3>
                        <p>NAV Canada</p>
                        <p>Riverview, NB</p>
                        <p>Summer 2019</p>
                    </section>
                    {/* Role 3 */}
                    <section id="role3" className="exp-role">
                        <h3>Landscape Technician</h3>
                        <p>CORE Property Care</p>
                        <p>Moncton, NB</p>
                        <p>Summer 2018</p>
                    </section>
                    {/* Role 4 */}
                    <section id="role4" className="exp-role">
                        <h3>Cabin Leader</h3>
                        <p>Camp Wildwood</p>
                        <p>McKees Mills, NB</p>
                        <p>Summer 2016 &amp; 2017</p>
                    </section>
                </section>
                {/* Contains any prior education experience (Degrees) */}
                <section id="edu" className="">
                    <h2 className="resume-h2">Education</h2>
                    <section className="education-section">
                        <h3>Dalhousie University</h3>
                        <p>Bachelor of Computer Science</p>
                        <p>Halifax, NS</p>
                        <p>September 2020 - present</p>
                    </section>
                    <section className="education-section">
                        <h3>University of New Brunswick</h3>
                        <p>Bachelor of Science in Software Engineering</p>
                        <p>Fredericton, NB</p>
                        <p>September 2018 - 2020</p>
                    </section>
                    <section className="education-section">
                        <h3>Riverview High School</h3>
                        <p>High School Diploma (Honors)</p>
                        <p>Riverview, NB</p>
                        <p>June 2018</p>
                    </section>
                    <section className="education-section">
                        <h3>Riverview High School</h3>
                        <p>Certificate of Oral Proficiency (Intermediate level french as a second language)</p>
                        <p>Riverview, NB</p>
                        <p>June 2018</p>
                    </section>
                </section>
                {/* Contains a list of my skills with proficiency levels  */}
                <section id="other-edu" className="">
                    <h2 className="resume-h2">Other Education</h2>
                    <ul id="skills-ul">
                        <li>Proficient in:
                            <ul>
                                <li>Java</li>
                                <li>JavaScript/React</li>
                                <li>HTML/CSS</li>
                                <li>PHP</li>
                                <li>C</li>
                                <li>C#</li>
                                <li>Bash</li>
                                <li>AJAX</li>
                                <li>Git</li>
                                <li>SQL</li>
                                <li>Python/Flask</li>
                            </ul>
                        </li>
                        <li>Completed Calculus Challenge Exam at UNB</li>
                    </ul>
                </section>
                <section id="extra-curricular" className="">
                    <h2 className="resume-h2">Extra-Curricular Activities</h2>
                    <ul>
                        <li>Personal Software Projects</li>
                        <li>Hockey</li>
                        <li>Music</li>
                        <li>Men's Fashion</li>
                    </ul>
                </section>
            </div>
            <button id="btn-dark-light-mode" ref={darkLightBtn} onClick={toggleLightDarkMode}>Dark mode</button>
        </div>
    )
}

export default Resume