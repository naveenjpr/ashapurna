import React from "react"
import Header from "../common/Header"
import { Link } from "react-router-dom"
import { Media_Events } from "../AllsliderData/slider"
import { FaLocationDot } from "react-icons/ci"
import { FaMapLocationDot } from "react-icons/fa6"
import { IoMdTime } from "react-icons/io"

export default function MediaandEvent() {
  return (
    <>
      <Header />

      <section className="w-full">
        <div className="bg-[url('https://ashapurna.com/images/banner/team-banner.webp')] h-[320px] w-full bg-cover bg-center flex items-center justify-center ">
          <div className="">
            <h1 className=" text-[white] text-[25px] text-center">
              <span>
                <Link to={"/"}>Home</Link>
              </span>{" "}
              / Media and Events
            </h1>
            <h1 className="text-center font-bold text-[#be8553] text-[45px]">
              Media and Events
            </h1>
          </div>
        </div>
      </section>
      {/*  Utsav and Camps start */}
      <section className="bg-[#f4efeb]">
        <div className=" w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
          {Media_Events.map((v, i) => {
            return <Carddesign eventData={v} key={i} />
          })}
        </div>
      </section>
    </>
  )
}

function Carddesign({ eventData }) {
  console.log(eventData)
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-68 object-cover"
        src={eventData.image}
        alt={eventData.title}
      />
      <div className="p-4">
        <h2 className="text-[15px] font-[400] text-gray-800">
          {eventData.title}
        </h2>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="text-[#be8553] pr-2 py-1">
            <FaMapLocationDot />
          </span>
          {eventData.location}
        </p>
        <p className="text-sm text-gray-600 flex items-center  ">
          <span className="text-[#be8553]  pr-2 py-1">
            <IoMdTime />
          </span>
          {eventData.date}
        </p>
        <p className="mt-2 text-[15px] text-gray-700">
          {eventData.description.slice(0, 80)}
        </p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          <Link to={`/Media-and-Event/${eventData.title}`}>
            {eventData.buttonText}
          </Link>
        </button>
      </div>
    </div>
  )
}
