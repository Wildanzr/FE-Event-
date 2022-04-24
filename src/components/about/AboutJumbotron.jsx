import React from 'react'

import About from '../../images/web/about.png'

const AboutJumbotron = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col-reverse pt-16 items-center bg-[#F2F5FA] text-center lg:flex-row lg:text-justify">
        <div className="w-11/12 mx-auto my-auto text-[#003366] lg:mx-24">
          <h1 className="text-3xl font-bold py-3 md:py-5 md:text-6xl">
            Hi, <br /> Kepoin Kami Yuk.
          </h1>
          <p className="text-base mb-10 lg:text-lg">
            Informasi lengkap terkait EVENTPLUS ada di sini.
          </p>
        </div>
        <div className="w-full">
          <img src={About} className="mx-auto w-3/5" />
        </div>
      </div>
    </>
  )
}

export default AboutJumbotron
