import React, { useEffect } from 'react'

import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import ContactForm from '../components/contact/ContactForm'

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
        <ContactForm />
        <Footer />
    </>
  )
}

export default AboutUs
