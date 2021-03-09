import "../css/MobileNav.css"
import { ReactComponent as Home } from '../icons/home.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileNav = (props) => {

    useEffect(() => {
        let root = document.getElementById('root')
        let mobileTopBar = document.querySelector('.mobile-top-bar h1')
        root.addEventListener('scroll', () => {
            if (root.scrollTop > 300) {
                mobileTopBar.style.opacity = 1
            }
            else {
                mobileTopBar.style.opacity = 0
            }
        })
    })

    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNavLink = (e) => {
        let links = document.querySelectorAll('.mobile-nav-link')
        links.forEach(link => {
            link.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
        toggleMobileNav()
    }

    const toggleMobileNav = () => {
        if (showMobileNav) {
            setShowMobileNav(false)
        }
        else {
            setShowMobileNav(true)
        }
    }

    return (
        <>
            <div className="mobile-top-bar">
                <h1>isaac dunnett</h1>
                <button className="nav-burger-btn" onClick={toggleMobileNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className="mobile-nav-backdrop" style={{
                opacity: showMobileNav ? 1 : 0,
                transition: showMobileNav ? 'none' : 'all 0.1s ease 0.2s',
                pointerEvents: showMobileNav ? 'all' : 'none'
            }}>
                <div className="mobile-nav" style={{
                    maxWidth: showMobileNav ? '75%' : '0%'
                }}>
                    <img src={process.env.PUBLIC_URL + '/isaacdunnett-logo.svg'} alt="" />
                    <h2>Isaac Dunnett</h2>
                    <li className="mobile-nav-list-item">
                        <Link to="/home"><button className="mobile-nav-link home selected" id="home" onClick={handleMobileNavLink}><Home id="home-svg" /> Home</button></Link>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="portfolio" onClick={handleMobileNavLink}>Portfolio</button>
                    </li>
                    <li className="mobile-nav-list-item">
                        <Link to="/web-development"><button className="mobile-nav-link" id="web-dev" onClick={handleMobileNavLink}>Web Development</button></Link>
                    </li>
                    <li className="mobile-nav-list-item">
                        <Link to="/resume"><button className="mobile-nav-link" id="resume" onClick={handleMobileNavLink}>Resume</button></Link>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="automate-your-workflow" onClick={handleMobileNavLink}>Automate Your Workflow</button>
                    </li>
                </div>
                <div className="dismiss-mobile-nav" onClick={toggleMobileNav}></div>
            </div>
        </>
    )
}

export default MobileNav