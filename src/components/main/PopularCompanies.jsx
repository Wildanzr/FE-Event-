import React from 'react'
import Marquee from 'react-fast-marquee'
import Alcatel from '../../images/company/alcatel.png'
import Aws from '../../images/company/aws.png'
import Bangkit from '../../images/company/bangkit.png'
import BSI from '../../images/company/bsi.png'
import Ericson from '../../images/company/ericson.png'
import Google from '../../images/company/google.png'
import IBM from '../../images/company/ibm.png'
import Indosat from '../../images/company/indosat.png'
import Kominfo from '../../images/company/info.png'
import Intel from '../../images/company/intel.png'
import Kampus from '../../images/company/kampus.png'
import Lenovo from '../../images/company/lenovo.png'
import Line from '../../images/company/line.png'
import Linta from '../../images/company/linta.png'
import Micro from '../../images/company/micro.png'
import Samsung from '../../images/company/samsung.png'
import Telkok from '../../images/company/telkomtel.png'
import Xl from '../../images/company/xl.png'

const PopularCompanies = () => {
  const firstRow = [Alcatel, Aws, Bangkit, BSI, Ericson, Google]
  const secondRow = [IBM, Indosat, Kominfo, Intel, Kampus, Lenovo]
  const thirdRow = [Line, Linta, Micro, Samsung, Telkok, Xl]
  const companies = [firstRow, secondRow, thirdRow]
  return (
    <div className="container mx-auto flex flex-col items-center justify-center bg-[#F2F5FA] m-auto p-auto text-[#003366]" id='popCompany'>
      <h1 className="text-3xl text-center font-black pb-5">
        Popular Companies
      </h1>
      <div className="w-full flex flex-col">
        {companies.map((row, index) => {
          const style = 10
          return (
            <Marquee speed={30} gradient={false} key={index}>
              <div className="flex flex-row" key={index}>
                {row.map((company, index) => {
                  return (
                    <div
                      className={`flex w-48 h-16 bg-white rounded-md items-center justify-center blur-sm drop-shadow-sm px-5 my-3 mx-${style} hover:bg-slate-300`}
                      key={index}
                    >
                      <img src={company}/>
                    </div>
                  )
                })}
              </div>
            </Marquee>
          )
        })}
      </div>
    </div>
  )
}

export default PopularCompanies
