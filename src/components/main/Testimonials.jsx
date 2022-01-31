import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useResizeDetector } from 'react-resize-detector'
import { Pagination } from 'swiper'
import CardTestimony from "../util/CardTestimony"

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
    if (width >= 1024) {
      setSpace(150)
      setView(3)
    }else if (width >= 768) {
      setSpace(250)
      setView(3)
    }else if (width >= 640) {
      setSpace(100)
      setView(2)
    }else {
      setView(1)
    }
  }, [width])

  return (
    <div className="flex flex-col w-full justify-center items-center my-10" ref={ref}>
      <div className="flex items-center justify-center">
        <h2 className="flex justify-center items-center font-bold text-4xl">
          TESTIMONIALS
        </h2>
      </div>

      <div className="flex flex-row w-11/12 items-center justify-center">
        <Swiper
          slidesPerView={view}
          centeredSlides={true}
          spaceBetween={space}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full my-10"
        >
          {testimonies.map((res, id) => {
            return (
              <SwiperSlide key={id}>
                <CardTestimony
                  rate={res.rate}
                  testi={res.testi}
                  pic={res.pic}
                  name={res.name}
                  org={res.org}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
