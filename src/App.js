import './css/App.css';
import Nav from './components/Nav.js';
import Heading from './components/Heading.js';
import ProjectGallery from "./components/ProjectGallery.js";
import BackgroundCircles from "./components/BackgroundCircles.js";
import { useState } from 'react';

function App() {

  const [viewMyWork, setViewMyWork] = useState(false);

  const toggleViewMyWork = () => {
    if (viewMyWork) {
      setViewMyWork(false);
    }
    else {
      setViewMyWork(true);
    }
  }

  console.log(viewMyWork);

  return (
    <>
      <div className="card" style={{
        top: viewMyWork ? '10em' : '50vh',
        transform: viewMyWork ? 'translateX(-50%)' : 'translate(-50%, -50%)'
      }}>
        <Nav show={viewMyWork} />
        <Heading />
        <div className="button-wrapper" style={{
          maxHeight: viewMyWork ? '2px' : 'auto',
          background: viewMyWork ? 'white' : 'none'
        }}>
          <button onClick={toggleViewMyWork} style={{
            opacity: viewMyWork ? 0 : 1,
            pointerEvents: viewMyWork ? 'none' : 'all'
          }}>View my work</button>
        </div>
        <ProjectGallery show={viewMyWork} />
      </div>
      <section className="full-page">
        <BackgroundCircles />
      </section>
    </>
  );
}

export default App;
