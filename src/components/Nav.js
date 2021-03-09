import '../css/Nav.css'
import { ReactComponent as Home } from '../icons/home.svg'
import { Link, useLocation } from 'react-router-dom'

const Nav = (props) => {

    const handleNavStyle = (path) => {
        if (path === '/home') {
            return {
                maxHeight: props.showWork ? '100px' : '0px',
                opacity: props.showWork ? 1 : 0
            }
        }
    }

    return (
        <nav style={handleNavStyle(useLocation().pathname)}>
            <ul className="nav-list">
                <div className="nav-list-left">
                    <li className="nav-list-item"><Link to="/home" className="nav-link home selected"><Home id="home-svg" /></Link></li>
                </div>
                <div className="nav-list-right">
                    <li className="nav-list-item"><Link to="/home" className="nav-link home selected"><Home id="home-svg" /></Link></li>
                    <li className="nav-list-item"><button className="nav-link">Portfolio</button></li>
                    <li className="nav-list-item"><Link to="/web-development" className="nav-link">Web Development</Link></li>
                    <li className="nav-list-item"><Link to="/resume" className="nav-link">Resume</Link></li>
                    <li className="nav-list-item"><button className="nav-link">Automate Your Workflow</button></li>
                </div>
            </ul>
        </nav >
    )
}

export default Nav