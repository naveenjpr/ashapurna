import React, { useState } from "react"
import Header from "../common/Header"
import { CiPhone } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { Link, useParams } from "react-router-dom"
import { FaArrowDown } from "react-icons/fa6"
import { amenities, data } from "../AllsliderData/slider"
export default function Residentia() {
  let useparsm = useParams()
  console.log(useparsm.id)
  let leturl = useparsm.id
  const [isopen, setisopen] = useState(false)

  let popupopen = () => {
    setisopen(!isopen)
  }
  return (
    <>
      <Header />
      <section className="max-w-[1170px]  mx-auto">
        <img
          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/slider/mb_web_banner__04-1732967971.jpg"
          alt=""
          className="w-full h-auto max-h-screen object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-[60%_auto] justify-between gap-4 mt-4 items-center border-b-8 border-b-[#be8553] rounded-[4px] p-4">
          <div className="flex flex-col md:flex-row items-center border-[2px] border-[solid]">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/mb_logo_a-1699176365.jpg"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto md:mx-[15px]"
              alt=""
            />
            <img
              src="https://ashapurna.com/images/icons/vertical-line.svg"
              className="hidden md:block mx-[15px]"
              alt=""
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-[#212529] font-bold text-lg md:text-2xl py-2">
                Ashapurna Mohan Bagh
              </h1>
              <p className="font-[300] py-2 text-sm md:text-base">
                Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
              </p>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <button className="border-[1px] p-2 border-[solid] border-[#be8553] flex items-center text-[#be8553] rounded-[3px] text-sm">
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/k2jaxVaGAsEzaqh18"
                    className="flex items-center gap-2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      className="w-4 h-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    <span>Get Directions</span>
                  </a>
                </button>
                <button className="bg-[#062f43] text-white font-bold py-2 px-4 rounded">
                  33.5 Lakh*
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-[#c08958] hover:text-white font-bold gap-4 md:gap-6">
            <button
              className="hover:bg-[#c08958] p-2 rounded"
              onClick={popupopen}
            >
              <Link
                to="#"
                className="flex justify-between items-center border-[1px] border-[solid] border-[#c08958] rounded-[3px] font-[300] p-2"
              >
                <span className="px-[6px]">
                  <FaArrowDown />
                </span>
                <span>Brochure</span>
              </Link>
            </button>
            <button className="bg-[#32343b] text-white flex px-4 py-2 rounded-[4px] items-center">
              <CiPhone className="text-white mr-2" />
              <a href="tel:8619916687">8619916687</a>
            </button>
          </div>
        </div>
      </section>
      {isopen == true ? (
        <div className="fixed w-[90%] md:w-[78%] h-auto md:h-[78%] border-[1px] border-[solid] border-[grey] z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px] p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
            {/* Image Section */}
            <div>
              <img
                src="https://ashapurna.com/images/sections/modal-bg.jpg"
                className="w-full h-auto max-h-[300px] md:max-h-full object-cover rounded-[4px]"
                alt=""
              />
            </div>

            {/* Form Section */}
            <div>
              <h2 className="text-black py-2 text-lg md:text-[25px] font-light">
                Download Brochure
              </h2>
              <p className="text-sm md:text-base mb-4">
                Feel free to connect with us. We will contact with you shortly.
              </p>
              <form className="space-y-4">
                {/* Name and Email Inputs */}
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-[1px] border-[solid] border-black rounded-[4px] w-full md:w-[48%] h-[50px] px-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-[1px] border-[solid] border-black rounded-[4px] w-full md:w-[48%] h-[50px] px-2"
                  />
                </div>
                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-[1px] border-[solid] border-black rounded-[4px] w-full h-[50px] px-2"
                />
                {/* Select Dropdown */}
                <div className="border-[1px] border-[solid] border-black rounded-[4px] w-full h-[50px] px-2 relative">
                  <select
                    name="enqProperty"
                    required=""
                    className="w-full h-full bg-transparent"
                  >
                    <option value="Ashapurna Mohan Bagh">
                      {/* Ashapurna Mohan Bagh */}
                    </option>
                  </select>
                </div>
                {/* Textarea */}
                <textarea
                  name=""
                  placeholder="Explain your query"
                  id=""
                  cols="30"
                  rows="5"
                  className="border-[1px] border-[solid] border-black rounded-[4px] w-full h-auto px-2"
                ></textarea>
              </form>
              {/* Submit Button */}
              <button className="text-center flex justify-center mt-4 mx-auto text-white bg-[#682a2d] py-2 rounded-[4px] px-6 text-sm md:text-base">
                SUBMIT
              </button>
            </div>
          </div>
          {/* Close Button */}
          <span
            className="absolute top-2 right-2 text-black text-2xl md:text-[45px] cursor-pointer hover:text-red-500"
            onClick={() => setisopen(false)}
          >
            ×
          </span>
        </div>
      ) : (
        ""
      )}
      <ResidentiaCommon />
      <section className="w-[100%] bg-[#32343b] mt-[70px]">
        <div className="max-w-[90%] mx-auto grid md:grid-cols-[55%_auto] grid-cols-1 py-[50px] gap-10">
          <div className="">
            <h2 className="text-[35px] text-[#be8553] font-bold">
              Master Plan
            </h2>
            <div className="w-[130px] my-[20px] h-1 bg-[#b58051]"></div>
            <p className="text-[white] leading-[28px] font-[400] text-[18px] text-justify">
              Depending on the present and future needs of the residents of the
              Township, the master plan defines how much area will be allocated
              to different types of asset classes. The land uses mentioned in
              the Key-plan are further divided into subcategories, creating a
              long list of land-use types needed for the seamless development
              and functioning of a township.
            </p>
          </div>
          <div className="">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/master_plan/MohanBagh_site_layout-1723281812.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <FloorPlan />

      <Construction />
    </>
  )
}

export function ResidentiaCommon() {
  const [isopen, setisopen] = useState(false)
  const [Amenitiespopup, setAmenitiespopup] = useState(false)

  let Amenities_popup = () => {
    setAmenitiespopup(!Amenitiespopup)
  }

  let popupopen = () => {
    setisopen(!isopen)
  }
  return (
    <>
      {isopen == true ? (
        <div className="fixed w-[90%] md:w-[78%] max-h-screen md:h-[78%] overflow-scroll border-[1px] border-[solid] border-[grey] duration-500 z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px] p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Image Section */}
            <div>
              <img
                src="https://ashapurna.com/images/sections/modal-bg.jpg"
                className="w-full h-auto max-h-[300px] md:max-h-full object-cover rounded-[4px]"
                alt=""
              />
            </div>

            {/* Form Section */}
            <div>
              <h2 className="text-[black] py-2 text-lg md:text-[25px] font-light">
                Download Brochure
              </h2>
              <p className="text-sm md:text-base mb-4">
                Feel free to connect with us. We will contact with you shortly.
              </p>
              <form className="space-y-4">
                {/* Name and Email Inputs */}
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-[1px] border-[solid] border-[black] rounded-[4px] w-full md:w-[48%] h-[50px] px-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-[1px] border-[solid] border-[black] rounded-[4px] w-full md:w-[48%] h-[50px] px-2"
                  />
                </div>
                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-full h-[50px] px-2"
                />
                {/* Select Dropdown */}
                <div className="border-[1px] border-[solid] border-[black] rounded-[4px] w-full h-[50px] px-2 relative">
                  <select
                    name="enqProperty"
                    required=""
                    className="w-full h-full bg-transparent"
                  >
                    <option value="Ashapurna Mohan Bagh">
                      Ashapurna Mohan Bagh
                    </option>
                  </select>
                </div>
                {/* Textarea */}
                <textarea
                  name=""
                  placeholder="Explain your query"
                  id=""
                  cols="30"
                  rows="5"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-full h-auto px-2"
                ></textarea>
              </form>
              {/* Submit Button */}
              <button className="text-center flex justify-center mt-4 mx-auto text-white bg-[#682a2d] py-2 rounded-[4px] px-6 text-sm md:text-base">
                SUBMIT
              </button>
            </div>
          </div>
          {/* Close Button */}
          <span
            className="absolute top-2 right-2 text-black text-2xl md:text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setisopen(false)}
          >
            ×
          </span>
        </div>
      ) : (
        ""
      )}
      {/* Amenities_popup start */}
      {Amenitiespopup ? (
        <div className="fixed w-[90%] h-[90%] border border-[grey] duration-500 z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px] p-4 overflow-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h2 className="text-[black] py-[10px] text-[20px] md:text-[25px] font-bold">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {amenities.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <figcaption>
                        <img
                          src={v.icon}
                          alt=""
                          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                        />
                      </figcaption>
                      <article className="mt-2">
                        <h5 className="text-[#c08958] font-bold text-sm md:text-base">
                          {v.title}
                        </h5>
                        <p className="text-xs md:text-sm">{v.subtitle}</p>
                      </article>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <span
            className="absolute top-2 right-2 text-black text-[30px] md:text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setAmenitiespopup(false)}
          >
            &times;
          </span>
        </div>
      ) : (
        ""
      )}

      {/* Amenities_popup End */}
      <main className="max-w-[1170px] mx-auto  mt-12">
        <section className="grid md:grid-cols-[65%_auto] grid-cols-1 gap-[40px]">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-black text-[28px] sm:text-[35px] text-center">
              Project Overview
            </h2>
            <span className="border-b-2 border-[#be8554] w-[80px] sm:w-[110px] block mx-auto mt-2"></span>

            {/* Subheading */}
            <h3 className="py-4 text-[#5c5c5c] text-center">
              <b className="text-[22px] sm:text-[30px] font-medium block">
                2 BHK Villas in Jodhpur | 3 BHK Villas in Jodhpur
              </b>
            </h3>

            {/* Paragraph */}
            <p className="font-normal text-[14px] sm:text-[15px] text-[#888888] leading-relaxed text-justify">
              Ashapurna Buildcon picked the Spanish theme for MohanBagh to
              provide its residents with a unique and lavish living experience.
              Mohan Bagh features a collection of exquisitely designed 2 & 3 BHK
              <span className="text-[#be8554] ml-1">
                villas in Jodhpur
              </span>{" "}
              that blend timeless beauty with modern amenities. Spanish
              architecture is renowned for its grandeur, intricate details, and
              timeless beauty. By incorporating these elements into the design
              of the township, Ashapurna Buildcon aims to create a sense of
              ultra-luxury and exclusivity.
              <br />
              <br />
              Additionally, Spain is known for its passion for art, music, and
              outdoor activities. Mohan Bagh is filled with a variety of
              amenities, which draw inspiration from the vibrant Spanish
              lifestyle, providing residents with a range of recreational and
              leisure options. The Spanish theme adds a touch of sophistication
              and cultural richness to Mohan Bagh, making it an ideal choice for
              those seeking a luxurious and indulgent living experience.
            </p>
            <section className="w-full grid grid-cols-1 md:grid-cols-[75%_auto] items-center gap-4 my-4">
              <div>
                <h3 className="text-lg md:text-2xl font-semibold">Amenities</h3>
                <span className="border-b-2 border-[#be8554] w-[100px] mt-2 block"></span>
              </div>
              <button
                className="w-full text-[white]  md:w-auto mx-auto md:mx-4 bg-[#c08958] py-2 px-4 rounded-lg flex justify-center items-center"
                onClick={popupopen}
              >
                <span className="px-2">
                  <FaArrowDown />
                </span>
                <span>E-Brochure</span>
              </button>
            </section>
            <aside className="grid grid-cols-3 gap-6">
              {data.map((v, i) => {
                return (
                  <>
                    <div className="border border-[solid] flex border-[#c08958] rounded-[4px] p-[2px]">
                      <figcaption className="">
                        <img
                          src={v.icon}
                          alt=""
                          className="w-[50px] h-[50px]"
                        />
                      </figcaption>
                      <article className="px-[10px]">
                        <h5 className="text-[#c08958] font-[bold]  md:text-[15px]     text-[10px]">
                          {v.title}
                        </h5>
                        <p className="md:text-[15px] text-[10px]">
                          {v.subtitle}
                        </p>
                      </article>
                    </div>
                  </>
                )
              })}
              <button
                className="w-[100%] bg-[#c08958] flex items-center justify-center rounded-[6px]"
                onClick={Amenities_popup}
              >
                <img
                  src="https://ashapurna.com/images/icons/ellips.svg"
                  alt=""
                />
              </button>
            </aside>
          </div>
          <div className="w-full max-h-[450px] max-w-md mx-auto  bg-white p-6 rounded-lg shadow-lg border-b-[6px] border-b-[solid] border-b-[red]">
            <h2 className="text-lg font-semibold text-[#D17A45]">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#D17A45] mt-1 mb-6"></div>
            <form onSubmit className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  // value={form.name}
                  // onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#D17A45] focus:outline-none"
                />
                {/* {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )} */}
              </div>

              {/* Phone Input */}
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile number"
                  // value={form.phone}
                  // onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#D17A45] focus:outline-none"
                />
                {/* {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )} */}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  // value={form.email}
                  // onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#D17A45] focus:outline-none"
                />
                {/* {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )} */}
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  // value={form.message}
                  // onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#D17A45] focus:outline-none"
                ></textarea>
                {/* {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )} */}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#D17A45] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#b56938] transition duration-300"
                >
                  Enquire Now
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export function FloorPlan() {
  const [activTab, setactivTab] = useState(0)
  console.log(activTab)
  let tabs = [
    "LA CASTLE (30X60)",
    "LA GRAND MANSION (25X50)",
    "LA MENOR MANSION (25X45)",
    "LA GRAND CASA (20X45)",
    "LA MENOR CASA (20X40)",
  ]
  let tabscontent = [
    {
      firstImg:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/floor_plan/img_30x60-1700303299.jpg",
      heading: "LA CASTLE (30X60)",
    },
    {
      firstImg:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/floor_plan/img_25x50-1700303299.jpg",
      heading: "LA GRAND MANSION (25X50)",
    },
    {
      firstImg:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/floor_plan/img_25x45-1700303300.jpg",
      heading: "LA MENOR MANSION (25X45)",
    },
    {
      firstImg:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/floor_plan/img_20x45-1700303300.jpg",
      heading: "LA GRAND CASA (20X45)",
    },
    {
      firstImg:
        "https://ashapurna.com/images/projects-banners/heritage/852-780.jpg",
      heading: "LA MENOR CASA (20X40)",
    },
  ]

  const locations = [
    {
      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/airport-1699704719.svg",
      name: "Airport",
      distance: "7.0 KM",
    },
    {
      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/railway_station-1699704719.svg",
      name: "Raikabagh Junction",
      distance: "11.0 KM",
    },
    {
      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/schoola8fc2d80-f894-4e1f-b679-88d0a7f95d16-1668424039-1700051358.svg",
      name: "Bodhi International School",
      distance: "3.5 KM",
    },
    {
      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/high_court-1699704856.svg",
      name: "High Court",
      distance: "12.0 KM",
    },
  ]
  return (
    <>
      <section className="bg-[#f4efeb] relative pb-[200px]">
        <h1 className="text-center font-bold text-[35px] py-[15px]">
          Floor Plan
        </h1>
        <div className="max-w-[90%] mx-auto py-8">
          <div className="flex flex-wrap justify-between items-center mb-[50px] space-y-2 sm:space-y-0 sm:flex-row">
            {tabs.map((v, i) => {
              return (
                <button
                  className={`border border-[solid] border-[#ca9d75] py-[15px] px-[7px] rounded-[6px] ${
                    activTab === i ? "text-[#ca9d75]" : ""
                  }`}
                  key={i}
                  onClick={() => setactivTab(i)}
                >
                  {v}
                </button>
              )
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[70%_auto] mt-6 gap-6 sm:gap-8">
            {tabscontent.map((img, index) => (
              <div
                key={index}
                style={{ display: activTab === index ? "block" : "none" }}
              >
                <img
                  src={img.firstImg}
                  alt={`Floor plan ${tabs[index]}`}
                  className="w-full max-h-[400px] object-cover"
                />
              </div>
            ))}
            <div>
              {tabscontent.map((hea, ind) => {
                return (
                  <div
                    key={ind}
                    style={{ display: activTab === ind ? "block" : "none" }}
                  >
                    <h1 className="font-bold text-[20px] text-center">
                      {hea.heading}
                    </h1>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Nearby Landmarks start */}
        <div className="w-[85%] mx-auto bg-[#fdfdfe] shadow-2xl md:h-[300px] h-auto absolute top-[90%] left-[50%] translate-x-[-50%]">
          <h2 className="font-bold text-center text-[35px] py-[25px] text-[#0a3346]">
            Nearby Landmarks
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
            {locations.map((v, i) => (
              <div key={i} className="text-center">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-[50px] h-[50px] mx-auto"
                />
                <h5 className="py-2">{v.name}</h5>
                <p className="text-[#be8654] font-bold">{v.distance}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Nearby Landmarks End */}
      </section>
      {/*       <Construction  start */}

      <section></section>
      {/*       <Construction  End */}
    </>
  )
}
// Construction Update section start

function Construction() {
  const [ConstructionUpdate, setConstructionUpdate] = useState(0)
  let Buttontabs = [
    "December 2024",
    "Novemeber 2024",
    "October 2024",
    "September 2024",
    "August 2024",
    "July 2024",
  ]
  console.log(Buttontabs)

  return (
    <>
      <section className="w-[100%] bg-[#ffffff] mt-[300px] text-center">
        <h1 className="text-[35px] font-[500]">Construction Update</h1>
      </section>
      <div className="my-[30px] max-w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Buttontabs.map((tab, index) => (
          <button
            key={index}
            className="table text-center py-4 px-4 border-[1px] border-[solid]   cursor-pointer hover:border-[black] rounded-md"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
<div>

  
</div>

      </div>
    </>
  )
}

// Construction Update section End
