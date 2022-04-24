import React from 'react'
import '../../css/Stats.css'

const Stats = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center bg-[#F2F5FA] text-[#003366] lg:flex-row">
      <div className="flex flex-col rounded-xl items-center justify-center bg-white drop-shadow-md w-72 h-52 py-2 px-2 mx-10 my-5 lg:mt-20" data-aos={'fade-up'}>
        <div className="flex flex-col">
            <p className="text-2xl text-center">Event organizer terdaftar</p>
            <br/>
            <h2 className="text-7xl text-center font-extrabold">500+</h2>
        </div>
      </div>
      <div className="flex flex-col rounded-xl items-center justify-center bg-white drop-shadow-md w-72 h-48 py-2 px-2 mx-10 my-5 lg:mt-20" data-aos={'fade-up'}>
        <div className="flex flex-col">
            <p className="text-2xl text-center">Event terlaksana</p>
            <br/>
            <h2 className="text-7xl text-center font-extrabold">300+</h2>
        </div>
      </div>
      <div className="flex flex-col rounded-xl items-center justify-center bg-white drop-shadow-md w-72 h-48 py-2 px-2 mx-10 my-5 lg:mt-20" data-aos={'fade-up'}>
        <div className="flex flex-col">
            <p className="text-2xl text-center">Sponsor dan Company terdaftar</p>
            <br/>
            <h2 className="text-7xl text-center font-extrabold">200+</h2>
        </div>
      </div>
    </div>
  )
}

export default Stats
