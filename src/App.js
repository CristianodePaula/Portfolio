import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from "./pages/Intro"

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  </Router>
  )
}
