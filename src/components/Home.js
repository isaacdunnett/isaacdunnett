import '../css/Home.css'
import React from 'react'
import Heading from './Heading.js'
import ProjectsContainer from './ProjectsContainer.js'

const Home = (props) => {

    const handleCardBackground = () => {
        if (props.nightView && props.viewMyWork) {
            return "linear-gradient(165.76deg, rgba(55, 55, 55, 0.57) 0%, rgba(55, 55, 55, 0.38) 100%)"
        }
        else if (!props.nightView && props.viewMyWork) {
            return "linear-gradient(165.76deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.32) 100%)"
        }
        else {
            return "rgba(0,0,0,0)"
        }

    }

    const toggleViewMyWork = () => {
        if (props.viewMyWork) {
            props.setViewMyWork(false)
        }
        else {
            props.setViewMyWork(true)
        }
    }

    return (
        <>
            <div className="card" style={{
                background: handleCardBackground(),
                boxShadow: props.viewMyWork ? "5px 5px 10px 0px rgba(0, 0, 0, 0.3)" : "5px 5px 10px 0px rgba(0, 0, 0, 0)",
                maxHeight: props.viewMyWork ? "10000px" : "500px"
            }}>
                <Heading />
                <div className="button-wrapper" style={{
                    maxHeight: props.viewMyWork ? '2px' : 'auto',
                    background: props.viewMyWork ? 'var(--textColor)' : 'none'
                }}>
                    <button className="view-work-btn" onClick={toggleViewMyWork} style={{
                        opacity: props.viewMyWork ? 0 : 1,
                        pointerEvents: props.viewMyWork ? 'none' : 'all'
                    }}>View my work</button>
                </div>
                <div className="get-website-btn-wrapper" style={{
                    opacity: props.viewMyWork ? 1 : 0
                }}>
                    <button className="get-website-btn">Request a website tailored for you</button>
                </div>
                <ProjectsContainer showWork={props.viewMyWork} />
            </div>
            <div className="bottom-margin"></div>
        </>
    )
}

export default Home;