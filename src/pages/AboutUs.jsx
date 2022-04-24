import React from 'react'

import Header from '../components/base/Header'
import AboutJumbotron from '../components/main/AboutJumbotron'
import AboutInfo from '../components/main/AboutInfo'
import Service from '../components/main/Service'
import HowItWorks from '../components/main/HowItWorks'

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
