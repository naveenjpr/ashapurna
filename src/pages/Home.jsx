import React from "react"
import Header from "../common/Header"
import Myslider from "../SliderFolder/Myslider"
import ThirdSlider from "../SliderFolder/ThirdSlider"
import Fourslider from "../SliderFolder/Fourslider"
import Homeabout from "./Homeabout"

import MediaandEventSlider from "../SliderFolder/MediaandEvent.slider"
import FeaturedProjectsSlider from "../SliderFolder/FeaturedProjects"

export default function Home() {
  return (
    <>
      <Header />
      <Myslider />
      <Homeabout />

      <div className="w-[100%] mb-[70px]">
        <div className="pt-[90px] bg-cover bg-center bg-[url('https://ashapurna.com/images/banner/whyashapurna-bg.webp')]">
          <div className="max-w-[1170px] lg:max-h-[700px] mx-auto ">
            <div className="grid lg:grid-cols-[35%_auto] gap-[40px] grid-cols-1 items-center">
              <div className=" p-[15px]">
                <div className="flex w-[200px] justify-between items-center">
                  <div className="text-[#be8553]">WHY US</div>
                  <div className="w-[100px] h-[1px] bg-[#be8553]"></div>
                </div>{" "}
                <h1 className="capitalize text-[#062f43] font-semibold lg:text-[45px] text-[22px] leading-[45px] py-[10px]">
                  Why Ashapurna Is The Best Choice?
                </h1>
                <p className="text-[#5b5b5c] leading-[25px] text-justify">
                  We are the leading Real Estate Builder and Developer in
                  Rajasthan, offering an unparalleled property development
                  experience with a proven track record of excellence and a
                  commitment to customer satisfaction, For those who are seeking
                  quality, affordability, and reliability we are the perfect
                  choice whether you're looking for a Dream Home or a thriving
                  commercial space, Ashapurna Buildcon has the expertise,
                  resources, and dedication to make your dream into a reality.
                </p>
              </div>
              <div className="">
                <div className="grid lg:grid-cols-2  grid-cols-2 gap-[40px] ">
                  <Carddesign />
                  <Carddesign />
                  <Carddesign />
                  <Carddesign />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedProjectsSlider />
      <ThirdSlider />
      <Fourslider />
      <MediaandEventSlider />
    </>
  )
}

export function Carddesign() {
  return (
    <div class="max-w-sm group hover:bg-[#323232] transition duration-300 ease-in-out rounded overflow-hidden shadow-lg bg-white px-[25px] border-b-4 border-[solid] border-[#be8554] relative">
      <img
        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
        alt=""
        className="w-[75px] pt-[40px] pb-[20px]"
      />
      <h2 className="font-bold lg:text-[25px] pb-[15px] group-hover:text-[#fff] text-[10px] ">
        Property Care Service
      </h2>
      <span className="block h-[1px] w-[90px] border bordee-[solid] border-[#be8554]"></span>
      <p className="py-[15px] group-hover:text-[#fff] text-[10px] lg:text-[15px]">
        We take care of your home like a true custodian. Our support team
      </p>
      <button className="text-[#be8554] font-bold lg:pb-[50px] pb-[15px] text-[20px]">
        Read More
      </button>
      <span className="absolute right-0 top-[50px] w-[30px] bg-[#f4efeb] group-hover:bg-[black] h-[80px]"></span>
    </div>
  )
}
