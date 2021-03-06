import './css/App.css'
import Nav from './components/Nav.js'
import Heading from './components/Heading.js'
import ProjectsContainer from './components/ProjectsContainer.js'
import BackgroundCircles from "./components/BackgroundCircles.js"
import Resume from "./components/Resume.js"
import MobileNav from "./components/MobileNav.js"
import Cinemegraph from "./img/coffee-cinemegraph.mp4"
import { useState, useEffect } from 'react'

function App() {

  const [viewMyWork, setViewMyWork] = useState(false)
  const [viewResume, setViewResume] = useState(false)
  const [nightView, setNightView] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setNightView(true)
      let rootStyle = document.querySelector(':root')
      rootStyle.style.setProperty('--textColor', 'white')
      rootStyle.style.setProperty('--oppositeTextColor', 'black')
      rootStyle.style.setProperty('--cardBackground', 'linear-gradient(165.76deg, rgba(55, 55, 55, 0.57) 0%, rgba(55, 55, 55, 0.38) 100%)')
      rootStyle.style.setProperty('--viewWorkBtnHoverBackground', 'linear-gradient(135deg, rgba(103, 33, 217, 0.8) 24.48%, rgba(1, 209, 255, 0.6) 95.31%)')
      rootStyle.style.setProperty('--viewWorkBtnBackground', 'rgba(0, 0, 0, 0.4)')
    }
  }, [nightView])

  const handleBackground = () => {
    if (nightView && window.innerWidth > 768) {
      return <BackgroundCircles />
    }
    else if (!nightView && window.innerWidth > 768) {
      return <div className="video-wrapper">
        <video autoPlay loop muted>
          <source src={Cinemegraph} type="video/mp4" />
        </video>
        <div className="video-overlay" style={{
          backdropFilter: viewMyWork ? "blur(10px)" : "blur(0px)"
        }}></div>
      </div>
    }
  }

  const handleCardBackground = () => {
    if (nightView) {
      return "linear-gradient(165.76deg, rgba(55, 55, 55, 0.57) 0%, rgba(55, 55, 55, 0.38) 100%)"
    }
    else if (!nightView && viewMyWork) {
      return "linear-gradient(165.76deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.32) 100%)"
    }
    else {
      return "rgba(0,0,0,0)"
    }

  }

  const toggleViewMyWork = () => {
    if (viewMyWork) {
      setViewMyWork(false)
    }
    else {
      setViewMyWork(true)
      let root = document.getElementById('root')
      root.style.overflowY = "auto"
    }
  }

  return (
    <>
      <div className="app" style={{
        transform: viewResume ? 'translateX(-100vw)' : 'translateX(0)'
      }}>
        <section className="full-page">
          <div className="card" style={{
            background: handleCardBackground(),
            boxShadow: nightView ? "5px 5px 10px 0px rgba(0, 0, 0, 0.3)" : "5px 5px 10px 0px rgba(0, 0, 0, 0)",
            maxHeight: viewMyWork ? "10000px" : "500px"
          }}>
            <Nav showWork={viewMyWork} setViewResume={setViewResume} />
            <Heading />
            <div className="button-wrapper" style={{
              maxHeight: viewMyWork ? '2px' : 'auto',
              background: viewMyWork ? 'var(--textColor)' : 'none'
            }}>
              <button className="view-work-btn" onClick={toggleViewMyWork} style={{
                opacity: viewMyWork ? 0 : 1,
                pointerEvents: viewMyWork ? 'none' : 'all'
              }}>View my work</button>
            </div>
            <div className="get-website-btn-wrapper" style={{
              opacity: viewMyWork ? 1 : 0
            }}>
              <button className="get-website-btn">Request a website tailored for you</button>
            </div>
            <ProjectsContainer showWork={viewMyWork} />
          </div>
          <div className="bottom-margin"></div>
        </section>
        <section className="resume">
          <Resume setViewResume={setViewResume} />
        </section>
      </div>
      <MobileNav setViewResume={setViewResume} />
      <section className="background">
        {handleBackground()}
      </section>
    </>
  )
}

export default App
