import './css/App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import BackgroundCircles from "./components/BackgroundCircles.js"
import Resume from "./components/Resume.js"
import MobileNav from "./components/MobileNav.js"
import WebDev from "./components/WebDev.js"

const App = () => {

  const [viewMyWork, setViewMyWork] = useState(false)
  const [nightView, setNightView] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setNightView(true)
      let rootStyle = document.querySelector(':root')
      rootStyle.style.setProperty('--textColor', 'white')
      rootStyle.style.setProperty('--oppositeTextColor', 'black')
      rootStyle.style.setProperty('--cardBackground', 'linear-gradient(165.76deg, rgba(55, 55, 55, 0.57) 0%, rgba(55, 55, 55, 0.38) 100%)')
      rootStyle.style.setProperty('--viewWorkBtnHoverBackground', 'linear-gradient(135deg, rgba(103, 33, 217, 0.8) 24.48%, rgba(1, 209, 255, 0.6) 95.31%)')
      rootStyle.style.setProperty('--mobileNavBackdrop', 'rgba(255, 255, 255, 0.4)')
    }

  }, [nightView])

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <section className="full-page">
            <Nav showWork={viewMyWork} />
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home">
                <Home viewMyWork={viewMyWork} setViewMyWork={setViewMyWork} nightView={nightView} />
              </Route>
              <Route path="/web-development">
                <WebDev />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </section>
        </div>
        {/* fixed elements */}
        <MobileNav />
        <section className="background">
          <BackgroundCircles />
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
