import React from "react"
import projectImage from "../Images/PROJECT OVERVIEW.webp"
import Slider from "react-slick"
import { FaLocationDot } from "react-icons/fa6"
import { IoHomeSharp } from "react-icons/io5"
import lightdots from "../Images/light-dots-bg.png"

export default function ThirdSlider() {
  return (
    <section className="w-[100%]  sm:mb-[100px] mb-[10px] ">
      <div className=" backgroundImage pb-[0px]">
        <div className=" w-[90%] mx-auto ">
          <div className="flex  items-center sm:pt-[65px] pt-[20px]">
            <div className="text-[#be8553] mr-2">PROJECT OVERVIEW</div>
            <div className="w-[100px] h-[1px] bg-[#be8553]"></div>
          </div>
          <h1 className="text-[#062f43] sm:text-[35px] text-[15px] poppins-semibold mb-[10px]">
            Ready & Nearing Completion Projects
          </h1>
          <p className="leading-[25px] text-[14px] text-[#5a5a5a] poppins-regular  w-[60%] border">
            Meticulously crafted and emotionally designed, Ashapurna villas &
            flats are the perfect place to be in. A lifestyle benchmark in
            Rajasthan, today and tomorrow, our successful communities are our
            biggest achievement.
          </p>
        </div>

        <div className="w-[90%] mx-auto  relative" id="">
          <div className="absolute right-0 bottom-[-80px] -z-10">
            <img src={lightdots} alt="" className="sm:block hidden" />
          </div>
          <MyThirdslider />
        </div>
      </div>
    </section>
  )
}
function MyThirdslider() {
  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings3}>
      <div>
        <div className="mr-3 group bg-white rounded-[5px] p-[10px]">
          <figure className="relative  ">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp"
              alt=""
            />
            <div className="w-[80%] bg-[#ffffff] shadow-lg rounded-[5px] border border-[red]  mx-auto absolute top-[160px] group-hover:top-[100px] duration-1000 left-[50%] translate-x-[-50%] z-50 p-[5px]">
              <div className="flex items-center mb-[5px]">
                <img
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                  alt=""
                  width={37}
                  height={30}
                  className="mx-[10px]"
                />
                <h3 className="  poppins-semibold text-[#32343b] ">
                  Ashapurna Anmol I,II,III
                </h3>
              </div>
              <div className="flex items-center mb-[5px] text-[13px]">
                <FaLocationDot className="mx-[10px] " />
                <p>Near New High Court , Jodhpur</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center mb-[5px] text-[13px]">
                  <IoHomeSharp className="mx-[10px]" />
                  <p>Few Unit Left</p>
                </div>
                <button className="bg-[#062f43] text-white px-[10px] py-[5px]">
                  See All
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div>
        <div className="mr-3 group bg-white rounded-[5px] p-[10px]">
          <figure className="relative ">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp"
              alt=""
            />
            <div className="w-[80%] bg-[#ffffff] shadow-lg rounded-[5px] border border-[red]  mx-auto absolute top-[160px] group-hover:top-[100px] duration-1000 left-[50%] translate-x-[-50%] z-[999] p-[5px]">
              <div className="flex items-center mb-[5px]">
                <img
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                  alt=""
                  width={37}
                  height={30}
                  className="mx-[10px]"
                />
                <h3 className="  poppins-semibold text-[#32343b] ">
                  Ashapurna Anmol I,II,III
                </h3>
              </div>
              <div className="flex items-center mb-[5px] text-[13px]">
                <FaLocationDot className="mx-[10px] " />
                <p>Near New High Court , Jodhpur</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center mb-[5px] text-[13px]">
                  <IoHomeSharp className="mx-[10px]" />
                  <p>Few Unit Left</p>
                </div>
                <button className="bg-[#062f43] text-white px-[10px] py-[5px]">
                  See All
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div>
        <div className="mr-3 group bg-white rounded-[5px] p-[10px]">
          <figure className="relative ">
            <img
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp"
              alt=""
            />
            <div className="w-[80%] bg-[#ffffff] shadow-lg rounded-[5px] border border-[red]  mx-auto absolute top-[160px] group-hover:top-[100px] duration-1000 left-[50%] translate-x-[-50%] z-[999] p-[5px]">
              <div className="flex items-center mb-[5px]">
                <img
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                  alt=""
                  width={37}
                  height={30}
                  className="mx-[10px]"
                />
                <h3 className="  poppins-semibold text-[#32343b] ">
                  Ashapurna Anmol I,II,III
                </h3>
              </div>
              <div className="flex items-center mb-[5px] text-[13px]">
                <FaLocationDot className="mx-[10px] " />
                <p>Near New High Court , Jodhpur</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center mb-[5px] text-[13px]">
                  <IoHomeSharp className="mx-[10px]" />
                  <p>Few Unit Left</p>
                </div>
                <button className="bg-[#062f43] text-white px-[10px] py-[5px]">
                  See All
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </Slider>
  )
}


