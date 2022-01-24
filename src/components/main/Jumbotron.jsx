import React from "react"
import Hero from "../../images/hero.png"

const Jumbotron = () => {
    return (
        <div className="flex items-center justify-center bg-cyan-300 text-justify py-20">
            <div className="w-full px-6 pt-6 md:px-24 md:pt-0">
                <h1 className="text-2xl md:text-6xl text-[#003366] font-bold uppercase py-5">Find your <br/> best partner! </h1>
                <p className="text-base text-[#003366] mb-5">
                    Mulai dari acara musik, diskusi, workshop hingga online webinar bisa mendapat sponsor dengan mudah. Buat Event Online sekarang lebih mudah di EVENTPLUS.
                </p>
                <button
                    className="bg-[#003366] text-white items-center border-0 py-1 px-6 focus:outline-none rounded-full text-base mt-6 lg:mt-0">
                    Get Started
                </button>
            </div>
            <div className="w-full">
                <div className="container">
                    <img src={Hero} width="80%" className="mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron