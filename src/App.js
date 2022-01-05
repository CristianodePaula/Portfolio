import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SoundBar from './components/SoundBar'
import Intro from "./pages/Intro"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Porftolio from "./pages/Porftolio"
import Contact from "./pages/Contact"

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