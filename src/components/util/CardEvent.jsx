import React from "react";

const CardEvent = ({ image, title, info, color, icon }) => {
  
  if(info.length > 178 ? info = `${info.substring(0, 150)} ...................... ${info.substring(info.length - 20, info.length)}` : info = info)

  return (
    <div className="w-full mx-7 text-[#003366] drop-shadow-md">
      <div className="flex items-center">
        <div className="relative mt-16 mb-8">
          <div 
            className={`rounded-2xl overflow-hidden shadow-md w-80 h-80 max-h-80 ${color} py-8 duration-300`}
          >
            <div className="absolute w-full ml-10 -mt-20 flex justify-start">
              <div className="h-20 w-20">
                <img
                  src={icon}
                  className="rounded-full object-cover h-full w-full bg-white shadow-md hover:brightness-50 duration-300 cursor-pointer"
                />
              </div>
            </div>
            <h1 className="ml-6 font-bold text-xl">{title}</h1>
            <div className="flex flex-col items-center mt-2">
              <div className="flex items-center justify-center w-10/12 h-32">
                <img src={image} className="object-cover h-full w-full rounded-lg hover:brightness-50 duration-300 cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center mt-3">
              <div className="flex justify-center w-10/12 h-32">
                <p className="text-sm text-center">{info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
