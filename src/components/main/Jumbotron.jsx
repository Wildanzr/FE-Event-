import React from 'react'
import Hero from "../../images/hero.png"

const Jumbotron = () => {
    return (
        <>
        <div className="flex flex-col-reverse py-8 items-center bg-cyan-300 text-center lg:py-20 lg:flex-row lg:text-justify">
            <div className="w-11/12 mx-auto my-auto text-[#003366] lg:mx-24">
                <h1 className="text-4xl font-bold uppercase py-3 md:py-5 md:text-6xl">Find your <br/> best partner! </h1>
                <p className="text-base lg:text-lg lg:mb-5">
                    Mulai dari acara musik, diskusi, workshop hingga online webinar bisa mendapat sponsor dengan mudah. Buat Event Online sekarang lebih mudah di EventPlus.
                </p>
                <button
                    className="bg-[#003366] text-white items-center py-2 px-8 rounded-full text-base focus:outline-none mt-5 lg:mt-0">
                    Get Started
                </button>
            </div>
            <div className="w-full">
                    <img src={Hero} className="mx-auto w-4/5" />
            </div>
        </div>
        <div className="inline-block w-full h-20 bg-gradient-to-b from-cyan-300 to-white" />
        </>
    )
}

export default Jumbotron