import React from 'react'
import { useEffect, useState } from "react";

import CardEvent from "../util/CardEvent";

import Tok from "../../images/tokopedia.jpg";
import "../../css/HideScrollBar.css";

const PopularEvents = () => {
  const [eventColor, setEventColor] = useState("bg-white")
  const [categoryId, setCategoryId] = useState(0)
  const [fetch, setFetch] = useState(true)

  const eventData = [
    {
      name: "Tokopedia",
      info: "Perusahaan perdagangan",
    },
    {
      name: "Gojek",
      info: "Transportasi kendaraan",
    },
    {
      name: "Binar Academy",
      info: "Kelas Online",
    },
    {
      name: "BEM FILKOM",
      info: "Organisasi Mahasiswa",
    },
    {
      name: "Apple",
      info: "Perusahaan Elektronik",
    },
    {
      name: "Alibaba",
      info: "Perdagangan Online",
    },
    {
      name: "Oracle",
      info: "Software",
    },
    {
      name: "Kak Rose",
      info: "Ayam Geprek",
    },
  ];

  const unvisited = "border-[#003366] bg-transparent border-2 border-lg text-base text-center font-bold px-8 py-1 mx-2 rounded-full cursor-pointer lg:px-20 lg:my-5 lg:py-5 lg:rounded-xl lg:text-xl lg:hover:bg-white lg:hover:border-white duration-300"
  const visited = "bg-white border-white border-2 border-lg text-base text-center font-bold px-8 py-1 mx-2 rounded-full cursor-pointer lg:px-20 lg:my-5 lg:py-5 lg:rounded-xl lg:text-xl lg:hover:bg-white lg:hover:border-white duration-300"

  useEffect(() => {
    if(fetch)
      setFetch(false)

  },[fetch, setFetch])

  return (
    <div className="w-full bg-cyan-300 text-[#003366]">
      <div className="flex flex-col pt-5">
        <h2 className="flex justify-center items-center font-bold text-4xl uppercase">
          Event
        </h2>
        <a
          href=""
          className="self-end justify-end justify-items-end text-xl pb-3 mx-5 hover:font-bold duration-300"
        >
          See all {">"}
        </a>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-full mx-auto flex flex-col lg:flex-row">
          <div className="flex flex-row overflow-x-auto hide-scroll-bar lg:mx-10 lg:flex-col lg:overflow-visible">
            <div
              onClick={() => {
                setEventColor("bg-white")
                setFetch(true)
                setCategoryId(0)
              }}
              className={categoryId == 0 ? visited : unvisited}
            >
              Technology
            </div>
            <div
              onClick={() => {
                setEventColor("bg-pink-300")
                setFetch(true)
                setCategoryId(1)
              }}
              className={categoryId == 1 ? visited : unvisited}
            >
              Concert
            </div>
            <div
              onClick={() => {
                setEventColor("bg-indigo-300")
                setFetch(true)
                setCategoryId(2)
              }}
              className={categoryId == 2 ? visited : unvisited}
            >
              Seminar
            </div>
            <div
              onClick={() => {
                setEventColor("bg-rose-300")
                setFetch(true)
                setCategoryId(3)
              }}
              className={categoryId == 3 ? visited : unvisited}
            >
              Exhibition
            </div>
          </div>

          <div className="flex flex-row overflow-x-auto  hide-scroll-bar">
            {eventData.map((evt, idx) => {
              return (
                <CardEvent
                  image={Tok}
                  title={evt.name}
                  info={evt.info}
                  color={eventColor}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
