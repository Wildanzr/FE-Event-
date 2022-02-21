import React from "react";
import Marquee from "react-fast-marquee";
import Alcatel from "../../images/alcatel.png";
import Aws from "../../images/aws.png";
import Bangkit from "../../images/bangkit.png";
import BSI from "../../images/bsi.png";
import Ericson from "../../images/ericson.png";
import Google from "../../images/google.png";
import IBM from "../../images/ibm.png";
import Indosat from "../../images/indosat.png";
import Kominfo from "../../images/info.png";
import Intel from "../../images/intel.png";
import Kampus from "../../images/kampus.png";
import Lenovo from "../../images/lenovo.png";
import Line from "../../images/line.png";
import Linta from "../../images/linta.png";
import Micro from "../../images/micro.png";
import Samsung from "../../images/samsung.png";
import Telkok from "../../images/telkok.png";
import Xl from "../../images/xl.png";

const PopularCompanies = () => {
  const companies = [
    Alcatel,
    Aws,
    Bangkit,
    BSI,
    Ericson,
    Google,
    IBM,
    Indosat,
    Kominfo,
    Intel,
    Kampus,
    Lenovo,
    Line,
    Linta,
    Micro,
    Samsung,
    Telkok,
    Xl,
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F2F5FA] m-auto p-auto text-[#003366]">
      <h1 className="text-3xl font-black pb-10">Company That Join With Us</h1>
      <div className="w-full flex flex-col">
        <Marquee speed={30} gradient={false}>
          <div className="flex flex-row">
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Alcatel} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Aws} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
            <img src={Bangkit} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
            <img src={BSI} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Ericson} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Google} />
            </div>
          </div>
        </Marquee>
        <Marquee speed={30} gradient={false}>
          <div className="flex flex-row">
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={IBM} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={Indosat} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={Kominfo} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={Intel} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={Kampus} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-8 hover:bg-slate-300">
              <img src={Lenovo} />
            </div>
          </div>
        </Marquee>
        <Marquee speed={30} gradient={false}>
          <div className="flex flex-row">
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Line} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Linta} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Micro} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Samsung} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Telkok} />
            </div>
            <div className="flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-5 mx-6 hover:bg-slate-300">
              <img src={Xl} />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default PopularCompanies;
