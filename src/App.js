import './css/App.css';
import Heading from './modules/Heading.js';
import ProjectGallery from "./modules/ProjectGallery.js";
import BackgroundCircles from "./modules/BackgroundCircles.js";

function App() {
  return (
    <section className="full-page">
      <div className="card">
        <Heading />
        <ProjectGallery />
      </div>
      <BackgroundCircles />
    </section>
  );
}

export default App;
