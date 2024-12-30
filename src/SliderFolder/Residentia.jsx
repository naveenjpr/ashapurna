import React, { useState } from "react"
import Header from "../common/Header"
import { CiPhone } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { Link, useParams } from "react-router-dom"
import { FaArrowDown } from "react-icons/fa6"
import { amenities, data } from "../AllsliderData/slider"
export default function Residentia() {
  let useparsm = useParams()
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
        />
        <div className="grid grid-cols-[60%_auto] justify-between mt-[10px] items-center border-b-8 border-b-[#be8553] rounded-[4px]">
          <div className="flex items-center border-[2px] border-[solid]">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/mb_logo_a-1699176365.jpg"
              className="w-[200px] h-[200px] mx-[15px]"
              alt=""
            />
            <img
              src="https://ashapurna.com/images/icons/vertical-line.svg"
              className="mx-[15px]"
              alt=""
            />
            <div className="">
              <h1 className="text-[#212529] font-bold text-[25px] py-2">
                Ashapurna Mohan Bagh
              </h1>
              <p className=" font-[300] py-2">
                Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
              </p>
              <div className="flex ">
                <button className="border-[1px] p-1 border-[solid] border-[#be8553] flex items-center text-[#be8553] rounded-[3px] ">
                  <a
                    target="blank"
                    href="https://maps.app.goo.gl/k2jaxVaGAsEzaqh18"
                    className=" flex items-center gap-2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      className="w-[10px] h-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>{" "}
                    <span>Get Directions</span>
                  </a>
                </button>
                <button className="bg-[#062f43] text-[white] font-bold p-1 rounded ml-1">
                  33.5 Lakh*
                </button>
              </div>
            </div>
          </div>
          <div className="flex text-[#c08958] hover:text-white font-bold ">
            <button className=" mx-4 hover:bg-[#c08958]  " onClick={popupopen}>
              <Link
                to="#"
                className="flex ms-3 justify-between items-center border-[1px] border-[solid] border-[#c08958] rounded-[3px] font-[300] p-2"
              >
                <span className="px-[6px]">
                  <FaArrowDown />
                </span>
                <span>Brochure</span>
              </Link>
            </button>
            <button className="mx-4 bg-[#32343b] text-[white] flex px-[10px] py-[6px] rounded-[4px] items-center">
              <span>
                <CiPhone className="text-[white" />
              </span>

              <span>
                <a href="tel:8619916687">8619916687</a>
              </span>
            </button>
          </div>
        </div>
      </section>
      {isopen == true ? (
        <div className="fixed w-[78%] h-[78%] border-[1px] border-[solid] border-[grey] z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px]">
          <div className="grid grid-cols-2 justify-between gap-10">
            <div>
              <img
                src="https://ashapurna.com/images/sections/modal-bg.jpg"
                className="h-full max-w-full object-cover	"
                alt=""
              />
            </div>

            <div>
              <h2 className="text-[black] py-[10px] text-[25px] font-light">
                Download Brochure
              </h2>
              <p>
                Feel free to connect with us. We will contact with you shortly.
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] mb-[15px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] mb-[15px]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px]"
                />
                <div className=" border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] relative mb-5 inline-block">
                  <select name="enqProperty" required="">
                    <option value="Ashapurna Mohan Bagh">
                      Ashapurna Mohan Bagh
                    </option>
                  </select>
                  <label className=" flex items-center gap-2absolute top-[-20px] left-0">
                    {" "}
                    Select Property
                  </label>
                </div>
                <textarea
                  name=""
                  placeholder="Explain your query"
                  id=""
                  cols="30"
                  rows="5"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[98%] mx-1"
                ></textarea>
              </form>
              <button className=" text-center flex justify-center my-3 mx-auto text-white bg-[#682a2d] py-[10px] rounded-[4px] px-[32px]">
                SUBMIT
              </button>
            </div>
          </div>
          <span
            className="absolute top-[-25px] right-[0px] text-black text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setisopen(false)}
          >
            x
          </span>
        </div>
      ) : (
        ""
      )}
      <ResidentiaCommon />
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
        <div className="fixed w-[78%] h-[78%] border-[1px] border-[solid] border-[grey] duration-500 z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px]">
          <div className="grid grid-cols-2 justify-between gap-10">
            <div>
              <img
                src="https://ashapurna.com/images/sections/modal-bg.jpg"
                className="h-full max-w-full object-cover	"
                alt=""
              />
            </div>

            <div>
              <h2 className="text-[black] py-[10px] text-[25px] font-light">
                Download Brochure
              </h2>
              <p>
                Feel free to connect with us. We will contact with you shortly.
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] mb-[15px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] mb-[15px]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px]"
                />
                <div className=" border-[1px] border-[solid] border-[black] rounded-[4px] w-[48%] mx-1 h-[50px] relative mb-5 inline-block">
                  <select name="enqProperty" required="">
                    <option value="Ashapurna Mohan Bagh">
                      Ashapurna Mohan Bagh
                    </option>
                  </select>
                  <label className=" flex items-center gap-2absolute top-[-20px] left-0">
                    {" "}
                    Select Property
                  </label>
                </div>
                <textarea
                  name=""
                  placeholder="Explain your query"
                  id=""
                  cols="30"
                  rows="5"
                  className="border-[1px] border-[solid] border-[black] rounded-[4px] w-[98%] mx-1"
                ></textarea>
              </form>
              <button className=" text-center flex justify-center my-3 mx-auto text-white bg-[#682a2d] py-[10px] rounded-[4px] px-[32px]">
                SUBMIT
              </button>
            </div>
          </div>
          <span
            className="absolute top-[-25px] right-[0px] text-black text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setisopen(false)}
          >
            x
          </span>
        </div>
      ) : (
        ""
      )}
      {/* Amenities_popup start */}
      {Amenitiespopup ? (
        <div className="fixed w-[90%] h-[90%] border-[1px] border-[solid] border-[grey] duration-500 z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-[4px]">
          <div className="grid grid-cols-1 justify-between gap-10">
            <div>
              <h2 className="text-[black] py-[10px] text-[25px] font-[bold]">
                Amenities{" "}
              </h2>

              <div className="grid grid-cols-6 gap-5">
                {amenities.map((v, i) => {
                  return (
                    <>
                      <div className="flex flex-col items-center justify-center">
                        <figcaption className="">
                          <img
                            src={v.icon}
                            alt=""
                            className="w-[50px] h-[50px]"
                          />
                        </figcaption>
                        <article className="px-[10px]">
                          <h5 className="text-[#c08958] font-[bold] text-center">
                            {v.title}
                          </h5>
                          <p className="text-center">{v.subtitle}</p>
                        </article>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <span
            className="absolute top-[-25px] right-[0px] text-black text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setAmenitiespopup(false)}
          >
            x
          </span>
        </div>
      ) : (
        ""
      )}

      {/* Amenities_popup End */}
      <main className="max-w-[1170px] mx-auto border-[2px_solid_red] mt-12">
        <section className="grid grid-cols-[65%_auto] h-28">
          <div>
            <h2 className="font-[600] text-[black] text-[35px]">
              Project Overview
            </h2>
            <span className="border-b-2 border-[#be8554] w-[110px] block"></span>
            <h3 className="py-[10px] text-[#5c5c5c]">
              <b className="text-[30px] font-[500] ">
                2 BHK Villas in Jodhpur | 3 BHK Villas in Jodhpur
              </b>
            </h3>
            <p className="font-[400] text-[15px] text-[#888888]">
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
              ultra-luxury and exclusivity. Additionally, Spain is known for its
              passion for art, music, and outdoor activities. Mohan Bagh is
              filled with a variety of amenities, which draws inspiration from
              the vibrant Spanish lifestyle, providing residents with a range of
              recreational and leisure options. The Spanish theme adds a touch
              of sophistication and cultural richness to Mohan Bagh, making it
              an ideal choice for those seeking a luxurious and indulgent living
              experience.
            </p>
            <section className="w-[100%] grid grid-cols-[75%_auto] items-center my-[10px]">
              <div>
                <h3 className="text-[30px] font-[500]">Amenities</h3>
                <span className="border-b-2 border-[#be8554] w-[100px] mt-[2px] block"></span>
              </div>
              <button className=" mx-4 bg-[#c08958]  " onClick={popupopen}>
                <Link
                  to="#"
                  className="flex ms-3 text-white  items-center border-[1px] border-[solid] border-[#c08958] rounded-[3px] font-[300] p-2"
                >
                  <span className="px-[6px] ">
                    <FaArrowDown />
                  </span>
                  <span>E-Brochure</span>
                </Link>
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
                        <h5 className="text-[#c08958] font-[bold]">
                          {v.title}
                        </h5>
                        <p>{v.subtitle}</p>
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
          <div>2</div>
        </section>
      </main>
    </>
  )
}
