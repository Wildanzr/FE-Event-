import React from 'react'
import AboutUs from "../../images/group1.png"
import Solution from "../../images/group2.png"

const Information = () => {
    return (
        <>
        <div className="w-full flex flex-col justify-center items-center bg-white text-[#003366] py-0 lg:flex-row">
            <div className="flex w-full justify-center items-center my-5 mx-10 lg:justify-end">
                <img src={AboutUs} className="w-3/5 h-3/5 lg:h-4/6 lg:w-4/6 items-center justify-center"/>
            </div>
            <div className="w-11/12 justify-center items-center my-5 mx-10">
                <h3 className="text-2xl uppercase font-bold text-center mb-2 lg:text-left">About Us</h3>
                <p className="text-base text-center mx-auto lg:text-lg lg:text-left">
                    EventPlus merupakan sosial media yang diperuntukkan untuk mendokumentasikan, mempromosikan, dan sebagai jembatan untuk mempertemukan pihak event organizer dengan perusahaan atau organisasi yang ingin memberikan sponsor. 
                </p>
                
                <a href="" className="flex items-center justify-center lg:justify-start">
                    <button className="bg-[#4DB6AC] px-3 py-1 rounded-full text-base text-semibold text-white mt-2 lg:mt-5">
                        About Us
                    </button>
                </a>
            </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-white text-[#003366] py-0 lg:flex-row-reverse">
            <div className="flex w-full justify-center my-5 mx-10 lg:justify-start">
                <img src={Solution} className="w-3/5 h-3/5 lg:h-4/6 lg:w-4/6 items-center justify-center"/>
            </div>
            <div className="w-11/12 justify-center items-center my-5 mx-10">
                <h3 className="text-2xl uppercase font-bold text-center mb-2 lg:text-right">Our Solution</h3>
                <p className="text-base text-center mx-auto lg:text-lg lg:text-right">
                    Dengan menggunakan EventPlus, event organizer dapat mengirimkan proposal sponsorship kepada perusahaan atau organisasi. Begitu juga perusahaan atau organisasi dapat menawarkan pendanaan kegiatan kepada event yang dikehendaki.
                </p>
                
                <a href="" className="flex items-center justify-center lg:justify-end">
                    <button className="bg-[#4DB6AC] px-3 py-1 rounded-full text-base text-semibold text-white mt-2 lg:mt-5">
                        Our Solution
                    </button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Information