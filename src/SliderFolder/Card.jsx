import React, { useState } from "react"
import { cards } from "../AllsliderData/slider"

export default function Card() {
  return (
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
                {cards.map((v, i) => {
                  return <Carddesign value={v} index={i} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Carddesign({ value, index }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [cardimageshow, setcardimageshow] = useState("")
  console.log(cardimageshow)

  let Cardshow = (index) => {
    // setcardimageshow(event.target)
    // if (event.target.src !== undefined) {
    //   let currentsrc = event.target.src
    //   setcardimageshow(currentsrc)
    //   setIsLightboxOpen(true)
    // }

    setcardimageshow(index)
    setIsLightboxOpen(true)
  }

  return (
    <>
      {isLightboxOpen == true ? (
        <div className="max-w-[400px] z-50 max-h-[400px] bg-white border-[2px] border-[solid]   fixed top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {
            <div className="p-[12px]">
              <img
                src={cardimageshow.image}
                alt=""
                className="w-[100%] h-[200px]"
              />
              <h2 className="font-bold lg:text-[25px] pb-[15px] group-hover:text-[#fff] text-[10px]">
                {cardimageshow.heading}
              </h2>
              <p className="py-[15px] group-hover:text-[#fff] text-[10px] lg:text-[15px]">
                <div className="overflow-scroll max-h-[100px]">

                {cardimageshow.paragraph}
                </div>
              </p>
            </div>
          }
          <span
            className="absolute right-0 top-[-30px] text-[45px] cursor-pointer hover:text-[red]"
            onClick={() => setIsLightboxOpen(false)}
          >
            x
          </span>
        </div>
      ) : (
        ""
      )}

      <div
        class="max-w-sm group hover:bg-[#323232] transition duration-300 ease-in-out rounded overflow-hidden shadow-lg bg-white px-[25px] border-b-4 border-[solid] border-[#be8554] relative"
        id="xyz"
      >
        <img
          src={value.image}
          alt=""
          className="w-[75px] pt-[40px] pb-[20px]"
        />
        <h2 className="font-bold lg:text-[25px] pb-[15px] group-hover:text-[#fff] text-[10px] ">
          {value.heading}
        </h2>
        <span className="block h-[1px] w-[90px] border bordee-[solid] border-[#be8554]"></span>
        <p className="py-[15px] group-hover:text-[#fff] text-[10px] lg:text-[15px] overflow-hidden">
          {value.paragraph.slice(0, 80)}
        </p>
        <button
          className="text-[#be8554] font-bold lg:pb-[50px] pb-[15px] text-[20px]"
          onClick={() => Cardshow(value)}
        >
          Read More
        </button>
        <span className="absolute right-0 top-[50px] w-[30px] bg-[#f4efeb] group-hover:bg-[black] h-[80px]"></span>
      </div>
    </>
  )
}
