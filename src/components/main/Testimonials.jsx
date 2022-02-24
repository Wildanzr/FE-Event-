import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useResizeDetector } from 'react-resize-detector'
import CardTestimony from "../util/CardTestimony"
import { Pagination } from "swiper";

import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {
  const testimonies = [
    {
      rate: 9,
      testi:
        "Bahannya bagus, gak mengecewakan barangnya, datangnya cepet syekali terimakasih",
      pic: "images/avatar.png",
      name: "Vina",
      org: "BEM FILKOM",
    },
    {
      rate: 9,
      testi:
        "Seller nya langsung gece ngirimnya dan produknya bagus❤️tapi ekspedisi J&T sekarang sering bermasalah yahh Bahannya bagus, gak mengecewakan barangnya, datangnya cepet syekali terimakasih",
      pic: "images/avatar.png",
      name: "Utara",
      org: "Gojek",
    },
    {
      rate: 10,
      testi:
        "Seriuss ini bagus bgtt lucu gitu loh yaampun, mana harganya murah lagi dan terjangkau",
      pic: "images/avatar.png",
      name: "Wildann",
      org: "Tokopedia",
    },
    {
      rate: 8,
      testi:
        "Bagus bgt produknya dan emg udh kepengen beli dr kapan tau. Pengiriman agak lama tapi ini bukan salah sellernya ya",
      pic: "images/avatar.png",
      name: "Dilla",
      org: "MalangFood",
    },
    {
      rate: 9,
      testi:
        "sorry gak ad fotonya. punya ponakan udh dkasih gak sempet kefoto tp barangnya oke punyaaaa😍😍😍",
      pic: "images/avatar.png",
      name: "Wisnu",
      org: "Boss NFT",
    },
  ]

  const { width, height, ref } = useResizeDetector()
  const [view, setView] = useState(3)
  const [space, setSpace] = useState(20)

  useEffect(() => {
    if (width >= 1021) {
      setSpace(150)
      setView(4)
    }if (width >= 1024) {
      setSpace(350)
      setView(4)
    }else if (width >= 768) {
      setSpace(300)
      setView(3)
    }else if (width >= 640) {
      setSpace(100)
      setView(2)
    }else if (width >= 481) {
      setSpace(230)
      setView(2)
    }else {
      setView(1)
    }
  }, [width])

  return (
    <div className="w-full bg-[#F2F5FA] text-[#003366] py-10" ref={ref}>
      <div className="flex flex-col pt-5">
        <h2 className="flex justify-center items-center font-black text-3xl">
          Testimonials
        </h2>
        <div className="flex flex-row py-">
        <Swiper
            slidesPerView={view}
            centeredSlides={true}
            spaceBetween={space}
            grabCursor={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonies.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <CardTestimony name={data.name} sub={data.org} testi={data.testi}/>
                </SwiperSlide>
              )
            })}
            
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
