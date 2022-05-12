import React from 'react'

import Pop1 from '../../images/web/pop1.png'
import Pop2 from '../../images/web/pop2.png'
import Pop3 from '../../images/web/pop3.png'

const Service = () => {
  return (
    <div className="container mx-auto flex flex-col w-full bg-[#F2F5FA] text-[#003366] justify-center items-center py-10" id='service'>
      <div className="flex">
        <h3 className="text-3xl font-bold">Our Services</h3>
      </div>

      <div className="flex flex-col lg:flex-row mt-10">
        <div className="flex flex-col h-72 w-64 my-10 lg:my-0 bg-white rounded-xl shadow-xl items-center mx-10">
          <div className="flex w-52 h-28 my-7 items-center justify-center">
            <img src={Pop1} className='object-contain grayscale'/>
          </div>
          <p className="px-2 py-2 text-center tracking-wide">
            Menyediakan forum diskusi untuk event organizer dan pihak sponsor
          </p>
        </div>

        <div className="flex mx-10">
          <div className="flex flex-col h-72 w-64 my-10 lg:my-0 bg-[#6096BA] -rotate-6 translate-x-4 translate-y-3 rounded-xl shadow-xl items-center"/>
          <div className="flex flex-col absolute h-72 w-64 my-10 lg:my-0 bg-white rounded-xl shadow-xl items-center">
          <div className="flex w-52 h-28 my-7 items-center justify-center">
            <img src={Pop2} className='object-contain grayscale'/>
            </div>
              <p className="px-2 py-2 text-center tracking-wide">
                Memberikan sistem yang aman dalam melakukan kerja sama sponsorship
              </p>
          </div>
        </div>

        <div className="flex flex-col h-72 w-64 my-10 lg:my-0 bg-white rounded-xl shadow-xl items-center mx-10">
          <div className="flex w-52 h-28 my-7 items-center justify-center">
          <img src={Pop3} className='object-contain grayscale'/>
          </div>
          <p className="px-2 py-2 text-center tracking-wide">
            Menghubungkan event organizer dan company untuk menjalin kerja sama sponsorship
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service
