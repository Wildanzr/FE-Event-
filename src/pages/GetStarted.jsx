import React from 'react'

import Header from '../components/base/Header'
import HowItWorks from '../components/main/HowItWorks'
import Footer from '../components/base/Footer'

const LandingPage = () => {
  const headerData = [
    {
      title: 'Event',
      link: '/#popEvent'
    },
    {
      title: 'Company',
      link: '/#popCompany'
    }
  ]
  return (
    <>
        <Header headerData={headerData} />
        <HowItWorks />
        <Footer />
    </>
  )
}

export default LandingPage
