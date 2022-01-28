import CardEvent from "../util/CardEvent"

import Tok from "../../images/tokopedia.jpg"
import "../../css/HideScrollBar.css"

const PopularEvents = () => {
  return (
    <div className="flex flex-col w-full bg-cyan-300 text-[#003366]">
      <div className="w-10/12 mx-auto my-4">
        <h2 className="text-4xl font-bold text-center">Event</h2>
      </div>
      <div className="w-full mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-row overflow-x-auto hide-scroll-bar">
          <div className="bg-white text-base font-bold px-8 py-1 mx-2 rounded-full cursor-pointer">
            Technology
          </div>
          <div className="bg-white text-base font-bold px-8 py-1 mx-2 rounded-full cursor-pointer">
            Concert
          </div>
          <div className="bg-white text-base font-bold px-8 py-1 mx-2 rounded-full cursor-pointer">
            Seminar
          </div>
          <div className="bg-white text-base font-bold px-8 py-1 mx-2 rounded-full cursor-pointer">
            Exhibition
          </div>
        </div>

        <div className="flex flex-row overflow-x-auto mx-2 hide-scroll-bar">
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
            <CardEvent image={Tok} title="Tokopedia" info="Lorem ipsum dolor sit amet" />
        </div>
      </div>
      <div className="w-full flex self-end justify-end justify-items-end mx-5 mb-5">
        <a href="" className="text-xl justify-center items-center hover:font-bold">See all {">"}</a>
      </div>
    </div>
  );
};

export default PopularEvents;
