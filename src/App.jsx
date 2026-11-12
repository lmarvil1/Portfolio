
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import ProjectDetail from './pages/ProjectDetail'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0)
      return
    }

    if (location.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView()
      })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="portfolio">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/proyectos/:slug"
          element={<ProjectDetail />}
        />
      </Routes>
    </div>
  )
}

export default App
