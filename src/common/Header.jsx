import React, { useState } from "react"
import logo from "../Images/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp"
import { Link, useLocation, useParams } from "react-router-dom"
import { IoIosMenu } from "react-icons/io"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"

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
    { firstkey: "Media and Event", to: "/MediaandEvent" },
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

      <header className="w-[95%] shadow-2xl bg-white shadow-[black]   sm:hidden block fixed z-[99999999999] top-0 left-0  ">
        <div className="max-w-[1170px]   mx-auto items-center flex justify-between">
          <div className="flex justify-between w-[100%] relative">
            <img src={logo} width={100} height={100} alt="" className="" />
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleNavbar}
            >
              {isOpen == false ? (
                <IoReorderThreeOutline className="text-[50px] text-black" />
              ) : (
                <RxCross1 className="text-[50px] text-black" />
              )}
            </button>
          </div>
        </div>

        <div className="py-[15px]  shadow-2xl  ">
          <ul
            className={`  ${isOpen == false ? "left-[-500px]" : ""}
                } flex flex-col sm:flex-row items-start fixed left-0 bg-white   w-[80%]  h-screen poppins-regular  text-[#32343b] duration-1000`}
          >
            {myLink.map((v, i) => {
              return (
                <li className=" relative group py-[5px] text-[25px]">
                  <Link to={v.to} className="hover:text-[#be8553] font-bold  ">
                    {v.firstkey}
                  </Link>
                  <span className="w-[100%] left-[-10px] group-hover:bg-[#be8553] px-[30px]  absolute top-[140%] h-[2px] "></span>
                </li>
              )
            })}
          </ul>
        </div>
      </header>

      <div class="fixed top-0 left-0 right-0">Contacts</div>

    </>
  )
}
