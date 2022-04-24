import React from 'react'

import Header from '../components/base/Header'
import Jumbotron from '../components/main/Jumbotron'
import Stats from '../components/main/Stats'
import Information from '../components/main/Information'
import PopularCompanies from '../components/main/PopularCompanies'
import PopularEvents from '../components/main/PopularEvents'
import Testimonials from '../components/main/Testimonials'
import Footer from '../components/base/Footer'

const LandingPage = () => {
  const headerData = [
    {
      title: 'Events',
      link: '#popEvent'
    },
    {
      title: 'Companies',
      link: '#popCompany'
    }
  ]
  return (
    <>
      <Header headerData={headerData} />
      <Jumbotron />
      <Stats />
      <Information />
      <PopularCompanies />
      <PopularEvents />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage
