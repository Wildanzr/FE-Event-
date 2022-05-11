import React from 'react'
import Hero from '../../images/web/hero.png'

import { Link } from 'react-router-dom'

const Jumbotron = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse py-16 items-center bg-[#F2F5FA] text-center lg:flex-row lg:text-justify">
      <div className="w-11/12 mx-auto my-auto text-[#003366] lg:mx-24">
        <h1 className="text-4xl font-bold uppercase py-3 md:py-5 md:text-6xl">
          Find your <br /> best partner!{' '}
        </h1>
        <p className="text-base mb-10 lg:text-lg">
          Mulai dari acara musik, diskusi, workshop hingga online webinar bisa
          mendapat sponsor dengan mudah. Buat Event Online sekarang lebih mudah
          di EventPlus.
        </p>
        <Link to="/getstarted">
          <button className="bg-[#003366] font-nunito text-white items-center py-2 px-8 rounded-lg text-base focus:outline-none mt-5 lg:mt-0">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-full">
        <img src={Hero} className="mx-auto w-3/5" />
      </div>
    </div>
  )
}

export default Jumbotron
