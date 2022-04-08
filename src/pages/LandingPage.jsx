import React from 'react'

import Header from '../components/header/Header'
import Jumbotron from '../components/main/Jumbotron'
import Stats from '../components/main/Stats'
import Information from '../components/main/Information'
import PopularCompanies from '../components/main/PopularCompanies'
import Testimonials from '../components/main/Testimonials'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Stats />
      <Information />
      <PopularCompanies />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage
