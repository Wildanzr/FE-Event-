import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import AboutUs from '../pages/AboutUs'
import GetStarted from '../pages/GetStarted'
import ContactUs from '../pages/ContactUs'

import '../css/Base.css'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
