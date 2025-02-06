import React from "react"
import projectImage from "../Images/PROJECT OVERVIEW.webp"
import Slider from "react-slick"
import { FaLocationDot } from "react-icons/fa6"
import { IoHomeSharp } from "react-icons/io5"
import lightdots from "../Images/light-dots-bg.png"
import backimg from "../Images/whyashapurna-bg.webp"

export default function ThirdSlider() {
  return (
    <section
      className="w-[100%]  sm:mb-[100px] mb-[10px] bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${backimg})` }}
    >
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
  // var settings3 = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // }

  const properties = [
    {
      id: 1,
      name: "Ashapurna Anmol I, II, III",
      location: "Near New High Court, Jodhpur",
      availability: "Few Units Left",
      logo: "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp",
      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp", // Replace with actual image path
    },
    {
      id: 2,
      name: "Ashapurna Nanomax II",
      location: "Jodhpur, Rajasthan 342015, India",
      availability: "Few Units Left",
      logo: "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp",

      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/nanomax-project-thumbnail-1681986809.webp", // Replace with actual image path
    },
    {
      id: 3,
      name: "Ashapurna Anmol I, II, III",
      location: "Near New High Court, Jodhpur",
      availability: "Few Units Left",
      logo: "hhttps://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp",

      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp", // Replace with actual image path
    },
    {
      id: 4,
      name: "Ashapurna Anmol I, II, III",
      location: "Near New High Court, Jodhpur",
      availability: "Few Units Left",
      logo: "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-nanomax-ii-logo-1677494586.webp",

      image:
        "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/nanomax-project-thumbnail-1681986809.webp", // Replace with actual image path
    },
  ]

  return (
    // <Slider {...settings3}>
    <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 ">
      {properties.map((v, i) => (
        <div key={v.id} className="p-[10px] border  rounded-[10px]">
          <div className="mr-3 group  rounded-[5px] bg-black p-[10px]">
            <figure className="relative ">
              <button className="absolute right-[8px] top-[8px] bg-[#ff5722] text-white table text-[13px] p-[5px] rounded-[4px]">
                {v.availability}
              </button>
              <img src={v.image} alt={v.name} />
              <div className="w-[80%] bg-[#ffffff]  shadow-lg rounded-[5px]  mx-auto absolute  md:bottom-[-50px]  lg:bottom-[-30px] bottom-[-60px] md:group-hover:bottom-[-10px] lg:group-hover:bottom-[0px] group-hover:bottom-[0px] duration-1000 left-[50%] translate-x-[-50%] z-50 p-[5px]">
                <div className="flex items-center mb-[5px]">
                  <img
                    src={v.logo}
                    alt="Logo"
                    width={37}
                    height={30}
                    className="mx-[10px]"
                  />
                  <h3 className="poppins-semibold text-[#32343b] md:text-[10px] text-[7px] ">
                    {v.name}
                  </h3>
                </div>
                <div className=" items-center md:mb-[5px] mb-[1px] md:text-[10px] text-[7px] flex">
                  <FaLocationDot className="mx-[10px]" />
                  <p>{v.location}</p>
                </div>
                <div className=" justify-between items-center hidden group-hover:flex">
                  <div className="flex items-center  md:mb-[5px] mb-[1px] md:text-[13px] text-[7px]">
                    <IoHomeSharp className="mx-[10px]" />
                    <p> {v.availability}</p>
                  </div>
                  <button className="bg-[#062f43] text-white md:px-[10px] px-[5px] py-[2px] md:py-[5px] md:text-[10px] text-[7px]">
                    See All
                  </button>
                </div>
              </div>
            </figure>
          </div>
        </div>
      ))}
    </div>
    // </Slider>
  )
}
