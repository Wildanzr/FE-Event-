import React from 'react'

import Header from '../components/base/Header'
import AboutJumbotron from '../components/about/AboutJumbotron'
import AboutInfo from '../components/about/AboutInfo'
import Service from '../components/about/Service'
import HowItWorks from '../components/about/HowItWorks'

const AboutUs = () => {
  const headerData = [
    {
      title: 'About',
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
    </>
  )
}

export default AboutUs
