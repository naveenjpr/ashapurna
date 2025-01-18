import React from "react"
import Slider from "react-slick"
import { HomeFirstSliderHeader } from "../AllsliderData/slider"

export default function Myslider() {
  var settings = {
    dots: true, // Enabled dots for easier navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div
        className="max-w-[1150px] mx-auto sm:mb-[100px] px-4"
        id="firstslider"
      >
        <Slider {...settings}>
          {HomeFirstSliderHeader.map((v, i) => (
            <div key={i}>
              <img
                src={v.imgUrl}
                alt=""
                className="h-auto md:h-screen w-full "
              />
            </div>
          ))}
        </Slider>
        <div className="grid sm:grid-cols-6 grid-cols-1 gap-4 sm:gap-[10px] border p-[10px] border-b-4 border-b-[#be8553] mt-6">
          <div>
            <input
              placeholder="NAME"
              type="text"
              className="h-[50px] text-black py-2 px-2 placeholder-black placeholder:font-bold border border-[#c7c7c7] w-full sm:w-[165px]"
            />
          </div>

          <input
            placeholder="Email"
            type="email"
            className="h-[50px] text-black py-2 px-2 placeholder-black placeholder:font-bold border border-[#c7c7c7] w-full sm:w-[165px]"
          />

          <input
            placeholder="Phone"
            type="number"
            className="h-[50px] text-black py-2 px-2 placeholder-black placeholder:font-bold border border-[#c7c7c7] w-full sm:w-[165px]"
          />

          <select className="text-black h-[50px] w-full sm:w-[165px] border border-[#c7c7c7]">
            <option>Select Property</option>
            <option value="50">Ashapurna Valley Orchard</option>
            <option value="48">Ashapurna Mohan Bagh</option>
            <option value="47">Ashapurna Girls Hostel Mumbai</option>
            <option value="49">Ashapurna NRI Phase 2</option>
            <option value="43">Buddha Institutions</option>
            <option value="40">Ashapurna Clarks Inn</option>
            <option value="38">Ashapurna NRI</option>
            <option value="33">Ashapurna Crown Plaza</option>
            <option value="41">Hotel Residency Palace</option>
            <option value="34">Ashapurna Mall</option>
            <option value="7">Ashapurna Heritage</option>
            <option value="45">Ashapurna Kundan Villa</option>
            <option value="42">Ashapurna Palace</option>
            <option value="37">Ashapurna Pachpadra</option>
            <option value="35">Ashapurna Corporate Office</option>
            <option value="29">Ashapurna Anmol I,II,III</option>
            <option value="32">Ashapurna Aangan</option>
            <option value="27">Ashapurna Basera II Phase</option>
            <option value="31">Ashapurna Sheoganj</option>
            <option value="21">Ashapurna Nanomax II</option>
            <option value="10">Ashapurna Paradise</option>
            <option value="15">Ashapurna Empire</option>
            <option value="14">Ashapurna Aangan Prime</option>
            <option value="8">Ashapurna Platinum</option>
            <option value="6">Ashapurna Tower</option>
            <option value="30">Ashapurna City</option>
            <option value="17">Ashapurna Nano Plaza</option>
            <option value="19">Chandan Vihar</option>
            <option value="23">Ashapurna Valley</option>
            <option value="26">Ashapurna Golden Valley</option>
            <option value="28">Ashapurna Nagar</option>
            <option value="24">Ashapurna Nano Avenue</option>
            <option value="22">Ashapurna Sanchore</option>
            <option value="20">Ashapurna Jalore</option>
            <option value="18">Ashapurna Township Uchiyarda</option>
            <option value="16">Ashapurna Basera</option>
            <option value="9">Ashapurna Enclave</option>
            <option value="25">Ashapurna Enclave II</option>
          </select>

          <input
            type="text"
            placeholder="Explain Your Query"
            className="h-[50px] text-black py-2 px-2 placeholder-black placeholder:font-bold border border-[#c7c7c7] w-full sm:w-[165px]"
          />

          <button className="text-white bg-[#be8553] border border-[#c7c7c7] w-full sm:w-[140px] h-[50px]">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
