/* eslint-disable react/prop-types */
import React from 'react'
import '../../css/Header.css'
import Logo from '../../images/web/logoevent.jpg'

import { Link } from 'react-router-dom'

const Header = ({ headerData }) => {
  return (
    <section className="container mx-auto h-full w-full border-box transition-all duration-500 linear lg:px-24 md:px-20 px-3 py-3 bg-[#F2F5FA]">
      <div className="navbar-1-1">
        <div className="mx-auto flex flex-wrap flex-row items-center justify-between md:px-0 md:py-1">
          <Link
            to="/"
            className="flex font-medium items-center"
          >
          <img
              src={Logo}
              className="items-center rounded-lg"
              width="120"
              height="80"
            />
          </Link>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#092A33"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full lg:ml-auto lg:mr-auto flex-wrap items-center text-base justify-center"
            id="menu"
          >
            <nav className="items-center justify-center text-base text-[#5C7B99] pt-4 space-x-0 space-y-4 lg:space-x-20 lg:flex lg:pt-0 lg:space-y-0">
              <Link
                to="/"
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Home
              </Link>

              {headerData.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                )
              })}

              <Link
                to='/'
                className="text-center font-semibold block nav-link hover:font-bold hover:text-[#003366]"
              >
                Contacts
              </Link>
            </nav>
          </div>

          <div
            className="hidden text-center lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <Link
              to="/"
            >
              <button className="bg-[#003366] font-nunito text-white items-center border-0 py-1 px-10 focus:outline-none rounded-lg font-medium text-base mt-6 lg:mt-0">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
