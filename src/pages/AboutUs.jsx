import React from 'react'

import Header from '../components/base/Header'
import AboutJumbotron from '../components/main/AboutJumbotron'
import AboutInfo from '../components/main/AboutInfo'
import Service from '../components/main/Service'
import HowItWorks from '../components/main/HowItWorks'

const AboutUs = () => {
  return (
    <>
        <Header ev='http://localhost:3000/#popEvent' co='http://localhost:3000/#popCompany'/>
        <AboutJumbotron />
        <AboutInfo />
        <Service />
        <HowItWorks />
    </>
  )
}

export default AboutUs
