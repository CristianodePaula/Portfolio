import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SoundBar from './components/SoundBar/SoundBar'
import Intro from "./pages/Intro/Intro"
import About from "./pages/About/About"
import Skills from "./pages/Skills/Skills"
import Porftolio from "./pages/Porftolio/Porftolio"
import Contact from "./pages/Contact/Contact"

export default function App() {
  return (
    <>
      <SoundBar />
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Porftolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}