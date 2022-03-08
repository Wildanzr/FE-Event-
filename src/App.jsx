import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/header/Header'
import Jumbotron from './components/main/Jumbotron'
import Stats from './components/main/Stats'
import Information from './components/main/Information'
import PopularCompanies from './components/main/PopularCompanies'
import PopularEvents from './components/main/PopularEvents'
import Testimonials from './components/main/Testimonials'
import Footer from './components/footer/Footer'

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
    <>
    <Header/>
    <Jumbotron/>
    <Stats/>
    <Information/>
    <PopularCompanies/>
    <PopularEvents/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
