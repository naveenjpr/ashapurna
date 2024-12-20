import React from "react"
import Slider from "react-slick"

export default function Fourslider() {
  var settings4 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true

  }
  return (
    <>
      <section className="w-[100%] bg-[#32343b] py-[80px]">
        <div className="w-[90%] mx-auto  ">
          <div className="grid lg:grid-cols-[35%_auto] grid-cols-1 gap-[50px] items-center">
            <div className="  p-[10px]">
              <div className="flex items-center  ">
                <h5 className="text-[#be8553] mx-[10px]">OUR TESTIMONIALS</h5>
                <div className="w-[100px] h-[1px] bg-[#be8553]"></div>
              </div>
              <h1 className="sm:text-[39px]  text-[16px] text-white  poppins-bold  mb-[15px]">
                What They're Saying About Ashapurna?
              </h1>
              <p className="text-white  leading-[25px] mb-[25px] ">
                From the heart of South Mumbai to the western suburbs and beyond
                take your pick from our finest addresses in the city. Select a
                location to view the property.
              </p>

              <button className="sm:block none bg-[#be8553] text-white px-[45px] py-[15px] rounded-[5px] poppins-regular">
                See All
              </button>
            </div>

            <div className="border border-[solid] border-[red] overflow-hidden bg-white" id="slider4">
              <Slider {...settings4} >
                <div className="">
                  <div className=" relative  grid grid-cols-1 py-8 ">
                    <div className="ms-9 flex relative ">
                      <div className="w-[200px]  h-[200px] border-8 border-[solid] border-[#cb9d75] rounded-full overflow-hidden">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.44.50-1706352837.jpeg"
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className=" text-center">
                        <h5 className="text-[#be8555] font-bold text-[25px]">
                          Mrs Vandana Sharma
                        </h5>
                        <span className="font-medium	">Ashapurna Heritage</span>
                      </div>
                    </div>
                    <div class="px-10 mt-5">
                      I had the pleasure of residing in Ashapurna Heritage for
                      the past 1 year. The environment here is truly
                      exceptional, and I am thoroughly impressed by the
                      world-class amenities provided. Living here has been a
                      joy, thanks to the high-quality facilities that enhance
                      the overall lifestyle.
                    </div>
                    <div className="absolute bottom-0 right-1">
                      <img
                        src="https://ashapurna.com/images/icons/quotes.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className=" relative  grid grid-cols-1 py-8 ">
                    <div className="ms-9 flex relative ">
                      <div className="w-[200px]  h-[200px] border-8 border-[solid] border-[#cb9d75] rounded-full overflow-hidden">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.45.37-1706351771.jpeg"
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className=" text-center">
                        <h5 className="text-[#be8555] font-bold text-[25px]">
                          Mrs Vandana Sharma
                        </h5>
                        <span className="font-medium	">Ashapurna Heritage</span>
                      </div>
                    </div>
                    <div class="px-10 mt-5">
                      I had the pleasure of residing in Ashapurna Heritage for
                      the past 1 year. The environment here is truly
                      exceptional, and I am thoroughly impressed by the
                      world-class amenities provided. Living here has been a
                      joy, thanks to the high-quality facilities that enhance
                      the overall lifestyle.
                    </div>
                    <div className="absolute bottom-0 right-1">
                      <img
                        src="https://ashapurna.com/images/icons/quotes.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className=" relative  grid grid-cols-1 py-8 ">
                    <div className="ms-9 flex relative ">
                      <div className="w-[200px]  h-[200px] border-8 border-[solid] border-[#cb9d75] rounded-full overflow-hidden">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.39.54-1706353576.jpeg"
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className=" text-center">
                        <h5 className="text-[#be8555] font-bold text-[25px]">
                          Mrs Vandana Sharma
                        </h5>
                        <span className="font-medium	">Ashapurna Heritage</span>
                      </div>
                    </div>
                    <div class="px-10 mt-5">
                      I had the pleasure of residing in Ashapurna Heritage for
                      the past 1 year. The environment here is truly
                      exceptional, and I am thoroughly impressed by the
                      world-class amenities provided. Living here has been a
                      joy, thanks to the high-quality facilities that enhance
                      the overall lifestyle.
                    </div>
                    <div className="absolute bottom-0 right-1">
                      <img
                        src="https://ashapurna.com/images/icons/quotes.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
