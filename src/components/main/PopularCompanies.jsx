import React from "react";
import Tokped from "../../images/tokopedia.jpg";
import CardCompany from "../util/CardCompany";

import "../../css/HideScrollBar.css";

const PopularCompanies = () => {
  const companyData = [
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

  return (
    <div className="flex flex-col bg-white m-auto p-auto text-[#003366]">
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center font-bold text-4xl uppercase">
          Company
        </h1>
        <a
          href=""
          className="self-end justify-end justify-items-end text-xl pb-3 mx-5 hover:font-bold duration-300"
        >
          See all {">"}
        </a>
      </div>
      <div className="flex overflow-x-auto pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap md:ml-10 ml-5 ">
          {companyData.map((comp, idx) => {
            return (
              <CardCompany
                key={idx}
                image={Tokped}
                title={comp.name}
                info={comp.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
