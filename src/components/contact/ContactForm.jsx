import React from 'react'

import { Link } from 'react-router-dom'

import CS from '../../images/web/customerservice.png'
import Check from '../../images/web/check.png'

const ContactForm = () => {
  return (
    <div className="container mx-auto items-center justify-center w-full flex">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
            <img src={Check} className='h-2/6'/>
          <p className="py-4">
          Terima kasih atas kritik, saran dan masukannya yang telah disampaikan
          </p>
          <div className="modal-action">
            <Link to='/' className='font-semibold leading-none text-white py-4 px-10 bg-[#003366] cursor-pointer rounded'>
                Go to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto w-full my-20">
        <div className="flex w-full md:w-6/12 items-center justify-center">
          <div className="flex flex-col w-10/12">
            <h2 className="text-5xl font-bold text-[#000000]">
              Hi, Event Folks!
            </h2>
            <p className="text-sm mt-5">
              Ada kritik, saran, atau masukan yang ingin disampaikan?
              <br />
              Yuk kirim sekarang!
            </p>
            <img src={CS} className="w-5/6" />
          </div>
        </div>

        <div className="flex w-full md:w-6/12 items-center justify-center">
          <div className="flex flex-col w-10/12 items-start justify-start">
            <h2 className="font-nunito text-3xl font-bold">Contact Us</h2>

            <form className="w-full">
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border-2 rounded border-[#BFD9D7]"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border-2 rounded border-[#BFD9D7]"
                    required
                  />
                </div>
              </div>

              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border-2 rounded border-[#BFD9D7]"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border-2 rounded border-[#BFD9D7]"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none">Message</label>
                  <textarea
                    name="message"
                    type="text"
                    className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none mt-4 bg-gray-100 border-2 rounded border-[#BFD9D7]"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end w-full">
                <label
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#003366] cursor-pointer rounded modal-button"
                  type="submit"
                  value="Send Message"
                  htmlFor="my-modal"
                >
                  Send Message
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
