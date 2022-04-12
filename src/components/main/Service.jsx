import React from 'react'

const Service = () => {
  return (
    <div className="flex flex-col w-full bg-[#F2F5FA] text-[#003366] justify-center items-center py-10">
      <div className="flex">
        <h3 className="text-3xl font-bold">Our Services</h3>
      </div>

      <div className="flex flex-row mt-10">
        <div className="flex flex-col h-72 w-64 bg-white rounded-xl shadow-xl items-center mx-10">
          <div className="flex w-20 h-20 bg-[#C4C4C4] my-7"></div>
          <h4 className="text-xl font-medium uppercase">Title</h4>
          <p className="px-2 py-2 text-center tracking-wide">
            Menghubungkan event organizer dan company untuk menjalin kerja sama
            sponsorship
          </p>
        </div>

        <div className="flex mx-10">
          <div className="flex flex-col h-72 w-64 bg-[#6096BA] -rotate-6 translate-x-4 translate-y-3 rounded-xl shadow-xl items-center"/>
          <div className="flex flex-col absolute h-72 w-64 bg-white rounded-xl shadow-xl items-center">
            <div className="flex w-20 h-20 bg-[#C4C4C4] my-7"/>
              <h4 className="text-xl font-medium uppercase">Title</h4>
              <p className="px-2 py-2 text-center tracking-wide">
                Menghubungkan event organizer dan company untuk menjalin kerja sama
                sponsorship
              </p>
          </div>
        </div>

        <div className="flex flex-col h-72 w-64 bg-white rounded-xl shadow-xl items-center mx-10">
          <div className="flex w-20 h-20 bg-[#C4C4C4] my-7"></div>
          <h4 className="text-xl font-medium uppercase">Title</h4>
          <p className="px-2 py-2 text-center tracking-wide">
            Menghubungkan event organizer dan company untuk menjalin kerja sama
            sponsorship
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service
