import React from "react"
import Slider from "react-slick"
import { MediaandEventSlider2 } from "../AllsliderData/slider"
import { useNavigate } from "react-router"

export default function MediaandEventSlider() {
  const navigate = useNavigate()
  console.log(navigate)
  let handleClick = () => {
    navigate("/Media-and-Event")
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <div className="max-w-[1140px] mx-auto  my-[40px]" id="mediaSlider">
        <div className="flex justify-between py-[15px]">
          <h1 className="font-[600] lg:text-[35px] text-[17px] text-[#062f43] capitalize">
            Media and Event
          </h1>
          <button
            onClick={handleClick}
            className="font-[500] lg:text-[20px] text-[10px] bg-[#32343b] capitalize rounded-[4px] text-white lg:px-[30px] px-[15px] lg:py-[8px] py-[4px]"
          >
            See All
          </button>
        </div>
        <div className="slider-container bg-white ">
          <Slider {...settings} className="">
            {MediaandEventSlider2.map((v, i) => {
              return (
                <div
                  className="max-w-[96%]  rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                  key={i}
                >
                  <img
                    className="w-full h-48 object-cover "
                    src={v.imgUrl}
                    alt="Card Image"
                  />
                  <div className="p-4">
                    <h2 className="text-[15px] font-bold text-[#47494f] hover:text-[#be8553]">
                      {v.title}
                    </h2>
                    <div className="">
                      <div className="flex gap-3 py-3">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="map-marker-alt"
                          class="svg-inline--fa fa-map-marker-alt fa-w-12 fs-15 golden-color me-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          width="15"
                          className="text-[#be8553] "
                        >
                          <path
                            fill="currentColor"
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                          ></path>
                        </svg>
                        <span className="text-[#5a5a5a]">
                          Ashapurna Heritage
                        </span>
                      </div>
                      <div className="flex gap-3 ">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="clock"
                          class="svg-inline--fa fa-clock fa-w-16 fs-15 golden-color me-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="15"
                          className="text-[#be8553] "
                        >
                          <path
                            fill="currentColor"
                            d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                          ></path>
                        </svg>
                        <span className="text-[#5a5a5a]">
                          <input type="date" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}
