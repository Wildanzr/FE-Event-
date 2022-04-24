import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import AboutUs from '../pages/AboutUs'

import '../css/Base.css'

const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
  )
}

export default AppRoutes
