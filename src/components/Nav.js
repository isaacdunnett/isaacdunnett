import '../css/Nav.css';

const Nav = (props) => {

    return (
        <nav style={{
            maxHeight: props.show ? '100px' : '0px',
            opacity: props.show ? 1 : 0
        }}>
            <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#webdevservices">Get a Website</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#systemintegration">Automate Your Workflow</a></li>
            </ul>
        </nav>
    );
}

export default Nav;