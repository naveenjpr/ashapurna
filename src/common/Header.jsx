import React, { useState } from "react"
import logo from "../Images/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp"
import { Link, useLocation, useParams } from "react-router-dom"
import { IoIosMenu } from "react-icons/io"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  let myLink = [
    { firstkey: "Home", to: "/" },
    { firstkey: " About us", to: "/about" },
    { firstkey: "Project", to: "/Project" },
    { firstkey: "Media and Event", to: "/Media-and-Event" },
    { firstkey: "Blogs", to: "/blog" },
    { firstkey: "Contact Us", to: "/contacr-us" },
    {
      firstkey: (
        <button className="text-white uppercase bg-[#be8553] py-[12px] px-[6px] rounded-">
          ENQUIRY
        </button>
      ),
    },
  ]
  return (
    <>
      <header className="w-[100%] shadow-2xl bg-[white]  sticky top-0 z-[999] md:block hidden ">
        <div className="max-w-[1170px]   mx-auto items-center flex justify-between">
          <IoIosMenu className="sm:hidden block" />

          <div className="py-[5px]  	 ">
            <img
              src={logo}
              width={150}
              height={150}
              alt=""
              className="absolute top-0"
            />
          </div>
          <div className="py-[15px] ">
            <ul className="flex flex-col sm:flex-row items-center poppins-regular text-[#32343b]">
              {myLink.map((v, i) => {
                return (
                  <li className="mr-[60px] relative group">
                    <Link
                      to={v.to}
                      className={`hover:text-[#be8553] ${
                        currentPath == v.to ? "text-[red]" : ""
                      } `}
                    >
                      {v.firstkey}
                    </Link>
                    <span className="w-[100%] left-[-10px] group-hover:bg-[#be8553] px-[30px]  absolute top-[140%] h-[2px] "></span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </header>

      <header className="w-full shadow-2xl bg-white fixed z-[9999999] top-0 left-0 sm:hidden block">
  {/* Top Navigation Bar */}
  <div className="max-w-[1170px] mx-auto flex items-center justify-between px-4 py-2">
    <div className="flex justify-between w-full items-center">
      <img src={logo} width={80} height={80} alt="Logo" />
      <button
        className="text-black focus:outline-none"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <RxCross1 className="text-[40px]" />
        ) : (
          <IoReorderThreeOutline className="text-[40px]" />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Sidebar Menu */}
  <div
    className={`fixed top-0 left-0 h-screen w-[85%] bg-white shadow-lg transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300`}
  >
    <ul className="flex flex-col max-h-[200px] mt-20 space-y-0 px-6 poppins-regular text-[#32343b]">
      {myLink.map((v, i) => (
        <li key={i} className="group py-1 text-[15px]">
          <Link
            to={v.to}
            className="hover:text-[#be8553] font-medium"
          >
            {v.firstkey}
          </Link>
          <span className="w-full h-[2px] bg-[#be8553] group-hover:block hidden"></span>
        </li>
      ))}
    </ul>

    {/* Contact Section */}
    <div className="border-t border-gray-300 mt-8 pt-4 px-6">
      <p className="uppercase text-blue-500 font-semibold mb-2">Connect</p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:marketing@ashapurna.com"
          className="text-blue-500 hover:underline"
        >
          marketing@ashapurna.com
        </a>
      </p>
      <p className="mt-2">
        <strong>Phone:</strong>{" "}
        <a
          href="tel:9314041747"
          className="text-blue-500 hover:underline"
        >
          9314041747
        </a>
      </p>
    </div>

    {/* Social Connect Section */}
    <div className="border-t border-gray-300 mt-8 pt-4 px-6">
      <p className="capitalize text-blue-500 font-semibold mb-4">Social Connect</p>
      <div className="flex justify-between items-center gap-4">
        <FaFacebook className="text-[#4267B2] w-6 h-6" />
        <FaTwitter className="text-[#1DA1F2] w-6 h-6" />
        <FaInstagram className="text-[#E4405F] w-6 h-6" />
        <FaLinkedin className="text-[#0077B5] w-6 h-6" />
        <FaYoutube className="text-[#FF0000] w-6 h-6" />
      </div>
    </div>
  </div>
</header>

      <div
        className="fixed top-[50%] translate-x-[-50%] z-50 text-white  lg:right-[-80px] right-[-60px] bg-[#be8553]  rotate-90 px-[20px] py-[10px]

"
      >
        <button className="uppercase">enquire</button>
      </div>
    </>
  )
}
