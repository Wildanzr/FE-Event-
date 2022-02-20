import React from "react";
import Marquee from "react-fast-marquee";
import IBM from "../../images/ibm.png";
import Bangkit from "../../images/bangkit.png";
import Google from "../../images/google.png";
import Alcatel from "../../images/alcatel.png";
import Aws from "../../images/aws.png";
import BSI from "../../images/bsi.png";

const PopularCompanies = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F2F5FA] m-auto p-auto text-[#003366] py-10">
      <div className="w-11/12 flex flex-col">
        <div className="flex flex-row">
          <Marquee speed={25} gradient={false}>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={IBM} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={Bangkit} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={Google} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={Alcatel} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={Aws} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 mx-5 hover:bg-slate-300">
              <img src={BSI} />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
