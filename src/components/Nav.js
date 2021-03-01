import '../css/Nav.css';
import { ReactComponent as Home } from '../icons/home.svg';

const Nav = (props) => {

    const toggleResumeView = () => {
        let root = document.getElementById('root');
        root.scrollTop = 0;
        root.style.overflowY = "hidden";
        props.setViewResume(true);
    }

    return (
        <nav style={{
            maxHeight: props.showWork ? '100px' : '0px',
            opacity: props.showWork ? 1 : 0
        }}>
            <ul className="nav-list">
                <div>
                    <li className="nav-list-item"><button className="nav-link selected"><Home id="home-svg" /></button></li>
                </div>
                <div>
                    <li className="nav-list-item"><button className="nav-link">Portfolio</button></li>
                    <li className="nav-list-item"><button className="nav-link">Web Development</button></li>
                    <li className="nav-list-item"><button className="nav-link" onClick={toggleResumeView}>Resume</button></li>
                    <li className="nav-list-item"><button className="nav-link">Automate Your Workflow</button></li>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;