import React from "react";
import About from "../../images/about.png";
import Solution from "../../images/solution.png";

const Information = () => {
  return (
    <div className="w-full bg-[#F2F5FA] text-[#003366] py-10">
      <div className="flex flex-col justify-center items-center py-0 lg:flex-row" data-aos={"zoom-in-left"} data-aos-anchor="#about">
        <div className="flex w-full justify-center items-center my-2 mx-10 lg:justify-end">
          <img
            src={About}
            className="w-3/5 h-3/5 lg:h-3/5 lg:w-3/5 items-center justify-center"
          />
        </div>
        <div className="w-11/12 justify-center items-center my-2 mx-10">
          <h3 className="text-2xl uppercase font-bold text-center mb-2 lg:text-left">
            About Us
          </h3>
          <p className="text-lg text-center mx-auto lg:text-lg lg:text-left" id="about">
            Event plus merupakan platform yang dapat membantu kegiatan
            sponsorship dalam pencarian sponsor untuk pendanaan suatu acara
            maupun kegiatan yang tidak terbatas pada lembaga atau perusahaan
            tertentu.
          </p>

          <a
            href=""
            className="flex items-center justify-center lg:justify-start"
          >
            <button className="bg-[#003366] px-5 py-1 rounded-lg text-base font-nunito text-semibold text-white mt-2 lg:mt-5">
              About Us
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-0 lg:flex-row-reverse" data-aos={"zoom-in-right"} data-aos-anchor="#solution">
        <div className="flex w-full justify-center my-2 mx-10 lg:justify-start">
          <img
            src={Solution}
            className="w-3/5 h-3/5 lg:h-3/5 lg:w-3/5 items-center justify-center"
          />
        </div>
        <div className="w-11/12 justify-center items-center my-2 mx-10">
          <h3 className="text-2xl uppercase font-bold text-center mb-2 lg:text-right">
            Our Solutions
          </h3>
          <p className="text-lg text-center mx-auto lg:text-lg lg:text-right" id="solution">
            Sistem pada Eventplus akan memberikan kemudahan dan keamanan dalam
            perjanjian kerja sama sponsorship. Eventplus bertindak sebagai pihak
            penengah dalam komunikasi antara penyelenggara acara dengan sponsor
            atau mitra dalam melakukan kerja sama sponsorship.
          </p>

          <a
            href=""
            className="flex items-center justify-center lg:justify-end"
          >
            <button className="bg-[#003366] px-5 py-1 rounded-lg text-base font-nunito text-semibold text-white mt-2 lg:mt-5">
              Our Solutions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
