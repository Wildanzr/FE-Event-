import Logo from "../../images/logo.png"

import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PinterestIcon from "@mui/icons-material/Pinterest"

const Footer = () => {
  return (
    <div className="bg-[#003366] mt-10">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col w-10/12 my-5">
          <div className=" w-full text-white mx-auto md:w-8/12">
            <img src={Logo} className="w-2/4 my-5" />
            <p className="text-white text-sm">
              Mulai dari acara musik, diskusi, workshop hingga online webinar
              bisa mendapat sponsor dengan mudah. Buat Event Online sekarang
              lebih mudah di EVENTPLUS
            </p>
          </div>
        </div>

        <div className="flex flex-row w-10/12 mt-10 justify-between text-white md:justify-around">
          <div className="flex flex-col">
            <p className="font-bold text-lg">More Info</p>
            <div className="flex flex-col my-4">
              <a href="" className="my-2 hover:font-semibold duration-300">
                About
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                Blog
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                How to find Sponsors
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                Find Sponsors
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                Carers
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                Term of Use
              </a>
              <a href="" className="my-2 hover:font-semibold duration-300">
                Suppliers
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-lg">Stay Connected</p>
            <div className="flex flex-col my-4">
              <a
                href=""
                className="flex flex-row my-2 hover:font-semibold duration-300"
              >
                <FacebookIcon className="w-6 h-6 mr-1" />
                <p className="text-sm items-center">Facebook</p>
              </a>
              <a
                href=""
                className="flex flex-row my-2 hover:font-semibold duration-300"
              >
                <TwitterIcon className="w-6 h-6 mr-1" />
                <p className="text-sm items-center">Twitter</p>
              </a>
              <a
                href=""
                className="flex flex-row my-2 hover:font-semibold duration-300"
              >
                <LinkedInIcon className="w-6 h-6 mr-1" />
                <p className="text-sm items-center">LinkedIn</p>
              </a>
              <a
                href=""
                className="flex flex-row my-2 hover:font-semibold duration-300"
              >
                <PinterestIcon className="w-6 h-6 mr-1" />
                <p className="text-sm items-center">Pinterest</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto h-[0.25px] bg-white mb-4 lg:w-11/12" />
      <p className="text-base pb-2 text-white text-center lg:text-lg">
        &copy; 2022 EventPlus | All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
