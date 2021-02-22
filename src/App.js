import './css/App.css';
import Nav from './components/Nav.js';
import Heading from './components/Heading.js';
import ProjectGallery from "./components/ProjectGallery.js";
import BackgroundCircles from "./components/BackgroundCircles.js";
import Resume from "./components/Resume.js";
import { useState } from 'react';

function App() {

  const [viewMyWork, setViewMyWork] = useState(false);
  const [viewResume, setViewResume] = useState(false);

  const toggleViewMyWork = () => {
    if (viewMyWork) {
      setViewMyWork(false);
    }
    else {
      setViewMyWork(true);
    }
  }

  return (
    <>
      <div className="app" style={{
        transform: viewResume ? 'translateX(-100vw)' : 'translateX(0)'
      }}>
        <section className="full-page">
          <div className="card">
            <Nav showWork={viewMyWork} setViewResume={setViewResume} />
            <Heading />
            <div className="button-wrapper" style={{
              maxHeight: viewMyWork ? '2px' : 'auto',
              background: viewMyWork ? 'white' : 'none'
            }}>
              <button className="view-work-btn" onClick={toggleViewMyWork} style={{
                opacity: viewMyWork ? 0 : 1,
                pointerEvents: viewMyWork ? 'none' : 'all'
              }}>View my work</button>
            </div>
            <ProjectGallery show={viewMyWork} />
          </div>
          <div className="bottom-margin"></div>
        </section>
        <section className="resume">
          <Resume setViewResume={setViewResume} />
        </section>
      </div>
      <section className="background">
        <BackgroundCircles />
      </section>
    </>
  );
}

export default App;
