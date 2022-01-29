import { Swiper, SwiperSlide } from "swiper/react";
import CardTestimony from "../util/CardTestimony";

import Avatar from "../../images/avatar.png"

import "swiper/css";

const Testimonials = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center my-10">
      <CardTestimony
        rate={9}
        testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
        name="Pinoy"
        pic={Avatar}
        org="BEM FILKOM"
        className="mx-10"
      />
      <CardTestimony
        rate={9}
        testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
        name="Pinoy"
        pic={Avatar}
        org="BEM FILKOM"
        className="mx-10"
      />
      <CardTestimony
        rate={9}
        testi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae."
        name="Pinoy"
        pic={Avatar}
        org="BEM FILKOM"
        className="mx-10"
      />
    </div>
  );
};

export default Testimonials;
