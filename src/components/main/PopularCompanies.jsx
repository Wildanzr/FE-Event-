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
  const firstRow = [Alcatel, Aws, Bangkit, BSI, Ericson, Google];
  const secondRow = [IBM, Indosat, Kominfo, Intel, Kampus, Lenovo];
  const thirdRow = [Line, Linta, Micro, Samsung, Telkok, Xl];
  const companies = [firstRow, secondRow, thirdRow];
  var size = 6;
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F2F5FA] m-auto p-auto text-[#003366]">
      <h1 className="text-3xl text-center font-black pb-5">Popular Companies</h1>
      <div className="w-full flex flex-col">
        {companies.map((row, index) => {
          var style = index === 1 ? 5 : 10;
          return (
            <Marquee speed={30} gradient={false} key={index}>
              <div className="flex flex-row" key={index}>
                {row.map((company, index) => {
                  return (
                    <div
                      className={`flex w-48 h-16 bg-white rounded-md items-center justify-center drop-shadow-sm px-5 my-3 mx-${style} hover:bg-slate-300`}
                      key={index}
                    >
                      <img src={company} />
                    </div>
                  );
                })}
              </div>
            </Marquee>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCompanies;
