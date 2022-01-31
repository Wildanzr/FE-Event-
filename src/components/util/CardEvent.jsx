import React from 'react'

const CardEvent = ({image, title, info, color}) => {
  return (
    <div className="w-full  px-3 pt-0 mx-auto text-[#003366]">
      <div className="flex items-center justify-around">
        <div className="relative mt-16 mb-8">
          <div className={`rounded-2xl overflow-hidden shadow-md w-72 max-w-72 h-80 max-h-80 ${color} py-10 duration-300`}>
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <img
                  src={image}
                  className="rounded-full object-cover h-full w-full shadow-md hover:brightness-50 duration-300 cursor-pointer"
                />
              </div>
            </div>
            <div className="px-6 mt-20">
              <h1 className="font-bold text-3xl text-center">{title}</h1>
              <p className="text-center text-base pt-3">
                {info}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
