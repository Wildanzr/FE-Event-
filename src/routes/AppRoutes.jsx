import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import AboutUs from '../pages/AboutUs'

import '../css/Base.css'

const AppRoutes = () => {
  return (
    <div className="container mx-auto" style={{ margin: '0 auto' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
