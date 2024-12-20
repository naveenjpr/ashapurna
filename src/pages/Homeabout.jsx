import React from "react"
import aboutImage from "../Images/aboutus.webp"
import experiencecheck from "../Images/experience-check.png"
import developer from "../Images/developer.png"
import Slider from "react-slick"
import { Apislider } from "../SliderFolder/Slider"

export default function Homeabout() {
  var settings5 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  let Mycounter = [
    {
      imgage: "../Images/experience-check.png",
      numberplus: "27+",
      yearofexperican: "Years Of Experience",
    },

    {
      imgage: developer,
      numberplus: "40+",
      yearofexperican: "Projects Completed",
    },
    {
      imgage: "../Images/developer.png",
      numberplus: "27500+",
      yearofexperican: "Happy Families",
    },
    {
      imgage: "../Images/experience-check.png",
      numberplus: "36+",
      yearofexperican: "Lakh Sq.Ft Delivered ",
    },
    {
      imgage: "../Images/experience-check.png",
      numberplus: "12000+ ",
      yearofexperican: "Units",
    },
  ]

  return (
    <>
      <div className="w-[100%] sm:mb-[200px] mb-[10px]">
        <div className="max-w-[1170px] mx-auto relative ">
          {Apislider.map((v, i) => {
            console.log(v._data.homepage_tagline)
            return (
              <div className="sm:flex flex-row  gap-4 justify-between">
                <figure className="border basis-[40%] ">
                  <img src={aboutImage} alt="" />
                </figure>
                <figcaption className="border p-[20px] basis-[60%] col-span-2">
                  <div className="flex w-[200px] justify-between items-center">
                    <div className="text-[#be8553]">ABOUT US</div>
                    <div className="w-[100px] h-[1px] bg-[#be8553]"></div>
                  </div>
                  <h1 className="sm:text-[35px] text-[25px] poppins-semibold  mb-[10px]">
                    {v._data.homepage_tagline}
                  </h1>
                  <p className="text-justify	mb-[20px] poppins-regular text-[16px] text-[#5a5a5a]">
                    Ashapurna Buildcon started its journey in 1996 as a private
                    limited company and within a year the company gained many
                    core values and turned into a limited company.
                  </p>
                  <p className="text-justify	mb-[20px] poppins-regular text-[16px] text-[#5a5a5a]">
                    In a relatively short period of time, Ashapurna has grown
                    and gained a trustworthy real estate name in the entire
                    Rajasthan. The company always tried hard to deliver
                    everything best to its customers and built all their
                    categories-Luxury, Mix segments, and affordable homes.
                  </p>
                </figcaption>
              </div>
            )
          })}

          <div className="w-[1030px] sm:h-[200px]  bg-[#f4efeb] top-[75%] sm:absolute right-0 sm:block hidden ">
            <div className="grid sm:grid-cols-5 grid-cols-1 justify-between items-center pt-[20px]">
              {Mycounter.map((v, i) => {
                return (
                  <div className=" flex flex-col	items-center ">
                    <div className="w-[80px] flex justify-center items-center h-[80px] bg-white mx-auto">
                      <img
                        src={v.imgage}
                        alt=""
                        className="mx- h-[50px] w-[50px] bg-[#ffffff]"
                      />
                    </div>
                    <h1 className="text-bold mb-[10px] text-[25px] poppins-bold">
                      {v.numberplus}
                    </h1>
                    <p className="text-[#5a5a5a]">{v.yearofexperican}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-[100%] h-[200px]  bg-[red]  sm:hidden block ">
            <div className="">
              <Slider {...settings5}>
                {Mycounter.map((v, i) => {
                  return (
                    <div>
                      <div className=" flex flex-col	items-center ">
                        <div className="w-[80px] flex justify-center items-center h-[80px] bg-white mx-auto">
                          <img
                            src={v.imgage}
                            alt=""
                            className="mx- h-[50px] w-[50px] bg-[red]"
                          />
                        </div>
                        <h1 className="text-bold mb-[10px] text-[25px] poppins-bold">
                          {v.numberplus}
                        </h1>
                        <p className="text-[#5a5a5a]">{v.yearofexperican}</p>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
