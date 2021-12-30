import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from "./pages/Intro"
import About from "./pages/About"
import Porftolio from './pages/Porftolio'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Porftolio />} />
    </Routes>
  </Router>
  )
}
