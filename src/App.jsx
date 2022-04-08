import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import AppRoutes from './routes/AppRoutes'

import './App.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-sine',
      once: true
    })
    AOS.refresh()
  }, [])

  return (
    <AppRoutes/>
  )
}

export default App
