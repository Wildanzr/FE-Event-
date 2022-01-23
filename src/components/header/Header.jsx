import React from "react";

import "./Header.css"
import Logo from "../../images/logo.png"

const Header = () => {
    return(
        <section className="h-full w-full border-box transition-all duration-500 linear lg:px-24 md:px-20 px-3 py-3 bg-white">
            <div className="navbar-1-1">
            <div className="container mx-auto flex flex-wrap flex-row items-center justify-between">
                <a href="" className="flex font-medium items-center">
                    <img src={Logo} className="items-center" width="100" height="80" />
                </a>
                <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                <svg className="w-6 h-6" fill="none" stroke="#092A33" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full lg:ml-auto lg:mr-auto flex-wrap items-center text-base justify-center"
                id="menu">
                <nav
                    className="lg:space-x-12 space-x-0 lg:flex items-center justify-between text-base pt-8 lg:pt-0 lg:space-y-0 space-y-6">
                    <a href="" className="block nav-link active font-medium">Home</a>
                    <a href="" className="block nav-link">Event</a>
                    <a href="" className="block nav-link">Company</a>
                    <a href="" className="block nav-link">Contacts</a>
                </nav>
                </div>

                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <button
                    className="btn-fill text-white items-center border-0 py-1 px-6 focus:outline-none rounded-xl font-medium text-base mt-6 lg:mt-0">
                    Login
                </button>
                </div>
            </div>
            </div>            
        </section>
    )
}

export default Header