import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMailOpen } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"

export default function Footer() {
  return (
    //above footer
    <footer className="w-[100%] bg-[#32343b]">
      <div className="max-w-[85%] mx-auto grid lg:grid-cols-[35%_auto] grid-cols-1 gap-5 items-center border-b  border-solid border-[#314753]">
        <div className="py-[30px] lg:border-r-2 border-b border-green-500">
          <div>
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg"
              alt=""
            />
          </div>
          <div className="flex">
            <div className=" border-[1px] border-[solid] bprder-[white] p-[8px] rounded-lg">
              <FaPhoneAlt className="text-white h-[30px] w-[30px] " />
            </div>
            <div className="text-[white]">
              <a href="tel:9314041747" className="mx-[10px]">
                9314041747
              </a>
              <br />
              <a className="mx-[10px]" href="tel:02912514747">
                0291-2514747
              </a>
              <a href="tel:9610383747">
                <span>,</span> 9610383747
              </a>
            </div>
          </div>
          <div className="flex items-center my-[15px] text-[20px]">
            <div className=" border-[1px] border-[solid] bprder-[white] p-[8px] rounded-lg">
              <IoMailOpen className="text-white h-[30px] w-[30px] " />
            </div>
            <div className="text-[white] mx-[10px] ">
              <a href="mailto:marketing@ashapurna.com" className="text-[white]">
                marketing@ashapurna.com
              </a>
            </div>
          </div>
          <div className="flex items-center my-[15px] text-[20px]">
            <div className=" border-[1px] border-[solid] bprder-[white] p-[8px] rounded-lg">
              <FaLocationDot className="text-white h-[30px] w-[30px] " />
            </div>
            <div className="text-[white] mx-[10px]">
              <a
                href="https://maps.app.goo.gl/L2uCGSLUFWSgdQbs9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[white]"
              >
                4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE,
                Jodhpur, Rajasthan, 342011
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-white font-[600] text-[20px]">Useful Links</h2>
            <div className="flex items-center">
              <span className="w-[70px] h-[3px] bg-red-600"></span>
              <span className="w-[70px] h-[1px] bg-[green]"></span>
            </div>
          </div>
          <div className="my-[20px]">
            <ul className="text-white items-center justify-between grid lg:grid-cols-5 grid-cols-3 md:gap-5 gap-4 lg:text-[13px] text-[15px]">
              <li className=" flex items-center justify-between">
                {" "}
                Residential Projects
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Commercial projects
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Investors Club
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                NRI corner
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Career
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Become a Partner
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Our Testimonials
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between ">
                {" "}
                Privacy Policy
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Terms & Conditions
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-[600] text-[20px]">
              Important Links
            </h2>
            <div className="flex items-center">
              <span className="w-[70px] h-[3px] bg-red-600"></span>
              <span className="w-[70px] h-[1px] bg-[green]"></span>
            </div>
          </div>
          <div className="my-[20px]">
            <ul className="text-white items-center justify-between grid md:grid-cols-4 grid-cols-3 md:gap-5 gap-3 lg:text-[15px] text">
              <li className=" flex items-center justify-between">
                {" "}
                Social Responsibility{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Corporate Profile{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                Why invest in jodhpur?{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                RERA Disclaimer{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                EMI Calculator{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
              <li className=" flex items-center justify-between">
                {" "}
                referral Scheme{" "}
                <span className="border-r-2 border-white w-[1px] h-[20px]"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-white font-bold text-[20px] py-[10px]">
          Follow Us On
        </h2>
        <div className="flex text-center items-center justify-center text-white space-x-5">
          <div className="bg-white p-[5px] text-black rounded-lg hover:bg-[#be8553] hover:text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="" />
            </a>
          </div>
          <div className="bg-white p-[5px] text-black rounded-lg hover:bg-[#be8553] hover:text-white">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="" />
            </a>
          </div>
          <div className="bg-white p-[5px] text-black rounded-lg hover:bg-[#be8553] hover:text-white">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="" />
            </a>
          </div>
          <div className="bg-white p-[5px] text-black rounded-lg hover:bg-[#be8553] hover:text-white">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="" />
            </a>
          </div>
          <div className="bg-white p-[5px] text-black rounded-lg hover:bg-[#be8553] hover:text-white">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
