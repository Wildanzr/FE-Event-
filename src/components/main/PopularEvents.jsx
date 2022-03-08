import React, { useState, useEffect } from 'react'
import CardEvent from '../util/CardEvent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useResizeDetector } from 'react-resize-detector'
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import compfest1 from '../../images/temp/compfest1.jpg'
import compfest2 from '../../images/temp/compfest2.jpg'
import fair1 from '../../images/temp/fair1.jpg'
import fair2 from '../../images/temp/fair2.jpg'
import feskabi1 from '../../images/temp/feskabi1.png'
import feskabi2 from '../../images/temp/feskabi2.jpg'
import hology1 from '../../images/temp/hology1.png'
import hology2 from '../../images/temp/hology2.jpg'
import itcc1 from '../../images/temp/itcc1.jpg'
import itcc2 from '../../images/temp/itcc2.jpg'

const PopularEvents = () => {
  const { width, ref } = useResizeDetector()
  const [view, setView] = useState(3)
  const [space, setSpace] = useState(20)

  useEffect(() => {
    if (width >= 1021) {
      setSpace(150)
      setView(4)
    } if (width >= 1024) {
      setSpace(350)
      setView(4)
    } else if (width >= 768) {
      setSpace(300)
      setView(3)
    } else if (width >= 640) {
      setSpace(100)
      setView(2)
    } else if (width >= 481) {
      setSpace(230)
      setView(2)
    } else {
      setView(1)
    }
  }, [width])

  const events = [
    {
      name: 'Hology',
      img: hology2,
      ico: hology1,
      info: 'House of Technology (HOLOGY) merupakan event teknologi tahunan bertaraf nasional yang diselenggarakan oleh Fakultas Ilmu Komputer Universitas Brawijaya sejak tahun 2018. Di tahun keempat ini, HOLOGY terdiri dari 4 rangkaian acara yaitu webinar & workshop, competition, exhibition, dan awarding night.'
    },
    {
      name: 'Compfest',
      img: compfest2,
      ico: compfest1,
      info: 'COMPFEST adalah acara IT tahunan terbesar yang telah diselenggarakan lebih dari 10 tahun oleh mahasiswa Fakultas Ilmu Komputer, Universitas Indonesia.'
    },
    {
      name: 'Feskabi',
      img: feskabi2,
      ico: feskabi1,
      info: 'Festival Edukasi Bank Indonesia atau FesKaBI (sebelumnya dikenal sebagai BI Goes to Campus) merupakan salah satu program tahunan Bank Indonesia untuk mensosialisasikan dan mengkomunikasikan program-program strategis Bank Indonesia kepada publik, khususnya generasi muda.'
    },
    {
      name: 'Jakarta Fair',
      img: fair2,
      ico: fair1,
      info: "Pekan Raya Jakarta atau Jakarta Fair adalah acara pameran tahunan terbesar di Asia Tenggara. Walaupun dinamai 'pekan', biasanya berlangsung selama satu bulan penuh dari bulan Juni sampai bulan Juli untuk memperingati selamat hari ulang tahun Jakarta. PRJ pertama diadakan pada tahun 1968."
    },
    {
      name: 'ITCC',
      img: itcc2,
      ico: itcc1,
      info: 'Information Technology Creative Competition adalah kompetisi bidang teknologi informasi yang diselenggarakan oleh himpunan mahasiswa teknologi informasi (HMTI) Universitas Udayana.'
    }
  ]

  return (
    <div className="w-full bg-[#F2F5FA] text-[#003366] py-10" ref={ref}>
      <div className="flex flex-col pt-5">
        <h2 className="flex justify-center items-center font-black text-3xl">
          Popular Events
        </h2>
        <div className="flex flex-row">
          <Swiper
            slidesPerView={view}
            centeredSlides={true}
            spaceBetween={space}
            grabCursor={true}
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {events.map((event, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <CardEvent
                    image={event.img}
                    info={event.info}
                    title={event.name}
                    icon={event.ico}
                    color="bg-white"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PopularEvents
