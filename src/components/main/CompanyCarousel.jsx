import Tokped from "../../images/tokopedia.jpg"


const CompanyCarousel = () => {
  return (
    <div className="flex flex-col bg-white m-auto p-auto text-[#003366]">
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center font-bold text-4xl">
          Company
        </h1>
        <a className="self-end justify-end justify-items-end pb-3 mx-5">See all {">"}</a>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-red-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-yellow-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-cyan-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="w-64 h-80 max-w-xs overflow-hidden bg-orange-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
                  <img src={Tokped} className="rounded-xl hover:brightness-50 cursor-pointer" />
              </div>
              <div className="flex flex-col mx-5 my-5 w-10/12">
                <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">Tokopedia</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
