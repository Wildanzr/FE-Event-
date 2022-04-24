/* eslint-disable react/prop-types */
import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter'

import '../../css/HideScrollBar.css'

const CardTestimony = ({ ava, name, sub, testi }) => {
  return (
    <div className="w-full mx-7 text-[#003366] drop-shadow-md">
      <div className="flex items-center">
        <div className="relative mt-5 mb-8">
          <div
            className={'rounded-2xl overflow-hidden shadow-md w-80 h-80 max-h-80 bg-white py-8 duration-300'}
          >
            <div className="flex flex-row px-5">
              <div className="flex w-3/12 items-center justify-center">
                <div className="flex h-14 w-14">
                  <img
                    src={ava}
                    className="rounded-full object-cover h-full w-full bg-white shadow-md hover:brightness-50 duration-300 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-col w-6/12 justify-start items-start py-1">
                <h2>{name}</h2>
                <p>{sub}</p>
              </div>
              <div className="flex w-3/12 items-center justify-center">
                <TwitterIcon color="primary" />
              </div>
            </div>
            <div className="flex flex-col items-center mt-10">
              <div className="flex justify-center w-10/12 h-32">
                <p className="text-sm text-justify">{testi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTestimony
