import "../css/MobileNav.css"
import { ReactComponent as Home } from '../icons/home.svg'
import { useState, useEffect } from 'react'

const MobileNav = (props) => {

    useEffect(() => {
        let root = document.getElementById('root')
        let mobileTopBar = document.querySelector('.mobile-top-bar h1')
        root.addEventListener('scroll', () => {
            console.log(root.scrollTop)
            if (root.scrollTop > 300) {
                mobileTopBar.style.opacity = 1
            }
            else {
                mobileTopBar.style.opacity = 0
            }
        })
    })

    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNavLinkStyle = (e) => {
        let links = document.querySelectorAll('.mobile-nav-link')
        links.forEach(link => {
            link.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
        let id = e.currentTarget.id
        if (id === 'home') {
        }
        else if (id === 'resume') {
            toggleResumeView()
        }
    }

    const toggleMobileNav = () => {
        if (showMobileNav) {
            setShowMobileNav(false)
        }
        else {
            setShowMobileNav(true)
        }
    }

    const toggleResumeView = () => {
        toggleMobileNav()
        let root = document.getElementById('root')
        root.scrollTop = 0
        root.style.overflowY = "hidden"
        props.setViewResume(true)
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
                        <button className="mobile-nav-link home selected" id="home" onClick={handleMobileNavLinkStyle}><Home id="home-svg" /> Home</button>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="portfolio" onClick={handleMobileNavLinkStyle}>Portfolio</button>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="web-dev" onClick={handleMobileNavLinkStyle}>Web Development</button>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="resume" onClick={handleMobileNavLinkStyle}>Resume</button>
                    </li>
                    <li className="mobile-nav-list-item">
                        <button className="mobile-nav-link" id="automate-your-workflow" onClick={handleMobileNavLinkStyle}>Automate Your Workflow</button>
                    </li>
                </div>
                <div className="dismiss-mobile-nav" onClick={toggleMobileNav}></div>
            </div>
        </>
    )
}

export default MobileNav