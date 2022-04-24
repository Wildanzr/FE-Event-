import React, { useEffect } from 'react'

import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import AboutJumbotron from '../components/about/AboutJumbotron'
import AboutInfo from '../components/about/AboutInfo'
import Service from '../components/about/Service'
import HowItWorks from '../components/about/HowItWorks'

const AboutUs = () => {
  // Force page to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const headerData = [
    {
      title: 'Info',
      link: '/about/#about'
    },
    {
      title: 'Our Service',
      link: '/about/#service'
    },
    {
      title: 'How it Works',
      link: '/about/#work'
    }
  ]

  return (
    <>
        <Header headerData={headerData}/>
        <AboutJumbotron />
        <AboutInfo />
        <Service />
        <HowItWorks />
        <Footer />
    </>
  )
}

export default AboutUs
