import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Resume from './components/nav_components/Resume'
import About from './components/nav_components/About'
import Projects from './components/nav_components/Projects'
import { useGLTF } from "@react-three/drei";

useGLTF.preload('../../public/myHead/MyHeaders');

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      
      </Router>
    </>
  )
}

export default App
