import React from 'react'

import About from '../../images/web/big1.png'
import Solution from '../../images/web/big2.png'

const AboutInfo = () => {
  return (
    <div className="container mx-auto flex w-full bg-[#F2F5FA] text-[#003366] justify-center items-center py-10" id='about'>
      <div className="w-10/12">
        <div
          className="flex flex-col justify-center items-center pt-0 pb-10 lg:flex-row"
          data-aos={'zoom-in-left'}
          data-aos-anchor="#about"
        >
          <div className="flex w-full justify-center items-center my-2 mx-10 lg:justify-end">
            <img
              src={About}
              className="w-3/5 h-3/5 lg:h-3/5 lg:w-3/5 items-center justify-center"
            />
          </div>
          <div className="w-11/12 justify-center items-center my-2 mx-10">
            <h3 className="text-3xl font-bold text-black text-center tracking-wide mb-2 lg:text-left">
              What is <span className="text-[#003366]">EVENTPLUS?</span>
            </h3>
            <p
              className="text-lg text-center mx-auto lg:text-lg lg:text-left"
              id="about"
            >
              Event plus merupakan platform yang menghubungkan event organizer
              dan perusahaan dalam kerja sama sponsorship. Eventplus akan
              membantu sebuah event dalam mencari sponsor untuk pendanaan suatu
              kegiatan yang tidak terbatas pada lembaga atau perusahaan
              tertentu.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center pt-10 pb-0 lg:flex-row-reverse"
          data-aos={'zoom-in-right'}
          data-aos-anchor="#solution"
        >
          <div className="flex w-full justify-center my-2 mx-10 lg:justify-start">
            <img
              src={Solution}
              className="w-3/5 h-3/5 lg:h-3/5 lg:w-3/5 items-center justify-center"
            />
          </div>
          <div className="w-11/12 justify-center items-center my-2 mx-10">
            <h3 className="text-3xl font-bold text-black text-center tracking-wide mb-2 lg:text-right">
              What has <span className="text-[#003366]">EVENTPLUS</span> <br />{' '}
              done?
            </h3>
            <div className="flex flex-col">
              <div className="flex flex-row my-5 mb-10">
                <p className="w-10/12 text-right">Menciptakan solusi baru untuk menyelesaikan permasalahan event organizer dan perusahaan mitra</p>
                <div className="flex w-2/12 justify-end items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#003366] border-dashed">
                    <p className="text-2xl text-[#003366]">01</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <p className="w-10/12 text-right">Memudahkan event organizer mendapatkan benefit dari perusahaan mitra dan sebaliknya</p>
                <div className="flex w-2/12 justify-end items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#003366] border-dashed">
                    <p className="text-2xl text-[#003366]">02</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
