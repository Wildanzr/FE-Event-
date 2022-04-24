import React from 'react'

import One from '../../images/web/no1.png'
import Two from '../../images/web/no2.png'
import Three from '../../images/web/no3.png'
import Arrow from '../../images/web/arrow.png'

const HowItWorks = () => {
  return (
    <div className="flex flex-col w-full bg-[#F2F5FA] text-[#003366] justify-center items-center py-10" id='work'>
      <div className="flex">
        <h3 className="text-3xl font-bold">How it Works</h3>
      </div>

      <div className="flex flex-row mt-10 items-start">
        <div className="flex h-64 w-64 items-center justify-center mx-5">
          <div className="flex flex-col items-center justify-center text-center">
            <img src={One} alt="1" className="h-2/6 w-2/6 mb-5"/>
            <p>
              Event organizer atau company dapat mengajukan proposal kepada calon partner yang diinginkan
            </p>
          </div>
        </div>

        <div className="flex h-32 w-14 items-center justify-center mx-5">
          <img src={Arrow} alt='arrow' className=''/>
        </div>

        <div className="flex h-64 w-64 items-center justify-center mx-5">
          <div className="flex flex-col items-center justify-center text-center">
            <img src={Two} alt="2" className="h-2/6 w-2/6 mb-5"/>
            <p>
              Kedua belah pihak akan saling terhubung dalam suatu forum chat untuk membuat kesepakatan bersama
            </p>
          </div>
        </div>

        <div className="flex h-32 w-14 items-center justify-center mx-5">
          <img src={Arrow} alt='arrow' className=''/>
        </div>

        <div className="flex h-64 w-64 items-center justify-center mx-5">
          <div className="flex flex-col items-center justify-center text-center">
            <img src={Three} alt="3" className="h-2/6 w-2/6 mb-5"/>
            <p>
              Kedua belah pihak harus menyelesaikan hak dan kewajiban yang telah disepakati sebelum mengakhiri perjanjian kerja sama
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
