import React from "react"
import Slider from "react-slick"
import { FeaturedProjectsSlider2 } from "../AllsliderData/slider"
import { Link } from "react-router-dom"

export default function FeaturedProjectsSlider() {
  return (
    <>
      <div className="w-[100%] bg-[#f3eeea] py-[30px] mb-20">
        <div className="max-w-[1150px] mx-auto sm:mb-[100px]" id="Secondslider">
          <div className="flex w-[200px] justify-between items-center">
            <div className="text-[#be8553]">OUR WORK</div>
            <div className="w-[100px] h-[1px] bg-[#be8553]"></div>
          </div>

          <h2 className="text-capitalize pb-[50px] poppins-semibold  text-black text-[35px]">
            Featured Projects
          </h2>
          <Mysceondslider />
        </div>
      </div>
    </>
  )
}

function Mysceondslider() {
  var settings2 = {
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Slider {...settings2}>
      {FeaturedProjectsSlider2.map((v, i) => {
        return (
          <div>
            <div
              className="grid sm:grid-cols-2 grid-cols-1 gap-[30px] items-center "
              key={i}
            >
              <div>
                <img src={v.imgUrl} alt="testing" className="w-[100%]" />
              </div>
              <div>
                <figure className="flex my-[20px] ">
                  <img src={v.mininlogo} alt="" width={50} height={50} />
                  <h1 className=" text-[30px] poppins-medium ms-5 text-[black] ">
                    {v.title}
                  </h1>
                </figure>
                <div className="text-[black] text-[14px] leading-7 pb-4">
                  {v.description}
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex items-center justify-center">
                    <img
                      src={v.svgImge}
                      alt="testing"
                      className="pe-[10px] h-[50px]"
                    />
                    <div className=" poppins-semibold">
                      <h4 className="text-[#be8553] mb-[5px] lg:text-[15px] text-[10px] ">
                        GYMNASIUM
                      </h4>
                      <span className="text-black lg:text-[15px] text-[10px] font-[300]">
                        {v.details.RERA}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={v.svgImge}
                      alt="testing"
                      className="pe-[10px] h-[50px]"
                    />
                    <div className=" poppins-semibold">
                      <h4 className="text-[#be8553] mb-[5px] lg:text-[15px] text-[10px] ">
                        AREA
                      </h4>
                      <span className="text-black lg:text-[15px] text-[8px] font-[300]">
                        {v.details.Area}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={v.svgImge}
                      alt="testing"
                      className="pe-[10px] h-[50px]"
                    />
                    <div className=" poppins-semibold">
                      <h4 className="text-[#be8553] mb-[5px] lg:text-[15px] text-[10px] ">
                      AVAILABILITY
                      </h4>
                      <span className="text-black lg:text-[15px] text-[8px] font-[300]">
                        {v.details.Availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#be8553] lg:py-[10px] py-[5px] lg:px-[15px] px-[7px] lg:text-[20px] text-[15px] text-white flex items-center justify-center mx-auto my-[20px]">
              <Link to={`/residentia/${v.slug}`}>
              
              See All
              </Link>
            </button>
          </div>
        )
      })}
    </Slider>
  )
}
