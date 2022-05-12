import React, { useEffect } from 'react'

import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import AboutJumbotron from '../components/about/AboutJumbotron'
import AboutInfo from '../components/about/AboutInfo'
import Service from '../components/about/Service'

const AboutUs = () => {
  // Force page to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const headerData = [
    {
      title: 'Info',
      link: '/about/#about'
    },
    {
      title: 'Our Service',
      link: '/about/#service'
    }
  ]

  return (
    <>
        <Header headerData={headerData}/>
        <AboutJumbotron />
        <AboutInfo />
        <Service />
        <Footer />
    </>
  )
}

export default AboutUs
