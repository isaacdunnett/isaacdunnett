import '../css/Nav.css';

const Nav = (props) => {

    const toggleResumeView = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.body.style.overflowY = 'hidden';
        props.setViewResume(true);
    }

    return (
        <nav style={{
            maxHeight: props.showWork ? '100px' : '0px',
            opacity: props.showWork ? 1 : 0
        }}>
            <ul className="nav-list">
                <li className="nav-list-item"><a className="nav-link">Portfolio</a></li>
                <li className="nav-list-item"><a className="nav-link">Web Development</a></li>
                <li className="nav-list-item"><a className="nav-link" onClick={toggleResumeView}>Resume</a></li>
                <li className="nav-list-item"><a className="nav-link">Automate Your Workflow</a></li>
            </ul>
        </nav>
    );
}

export default Nav;