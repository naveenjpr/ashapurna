import React, { useState } from "react"
import { useParams } from "react-router"
import Header from "../common/Header"
import { Media_Events, highlights } from "../AllsliderData/slider"

export default function AshapurnaEvents() {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)
  const [imageToShow, setImageToShow] = useState("")

  let UseParms = useParams()
  let id = UseParms.id

  let singleProduct = Media_Events.filter((v) => v.title == id)[0]

  let lightBox = (image) => {
    console.log(image)
    setImageToShow(image)
    setLightBoxDisplay(true)
    // setisopen(true)
  }
  let closelightbox = () => {
    setLightBoxDisplay(false)
  }
  return (
    <>
      <Header />
      <div className="max-w-[1170px] mx-auto bg-gray-100 min-h-screen p-6">
        {/* Header Section */}
        <div className="bg-red-600 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">Blood Donation Camp-2024</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[65%_auto]">
          {
            <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
              <img
                src={singleProduct.image}
                alt="Blood Donation Camp"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {singleProduct.title}
                </h2>
                <div className="text-sm text-gray-500 flex items-center gap-4 mt-2">
                  <span>📍 Ashapurna Nanomax</span>
                  <span>📅 2024-11-24</span>
                </div>
                <p className="mt-4 text-gray-700 mb-[70px]">
                  {singleProduct.description}
                </p>
                <p className="mt-4 text-gray-700 font-bold text-[25px]">
                  Highlights
                </p>

                <div className="grid grid-cols-3 gap-5 pt-5 ">
                  {singleProduct.manyImage.map((v, i) => {
                    return (
                      <>
                        <div className="relative">
                          <img src={v} alt="" />
                          <div
                            onClick={() => lightBox(v)}
                            className="absolute top-0 w-[100%] h-[100%] bg-[#ffffffe6] opacity-0 hover:opacity-100 duration-200"
                          >
                            <button className="  absolute top-[50%] left-[50%] bg-[#be8553] p-[12px] text-white translate-x-[-50%] translate-y-[-50%] ">
                              view all
                            </button>
                          </div>
                        </div>
                        {/* lightbox imge */}

                        {/* {lightboxDisplay ? (
                          
                          ) : (
                            ""
                          )} */}

                        {lightboxDisplay == true ? (
                          <div
                            className="border-2 border-[red] w-[400px] z-[9999] bg-white h-[400px] fixed top-[55%] left-[50%] translate-x-[-55%] translate-y-[-50%] p-2 scale"
                            // style={{
                            //   display: lightboxDisplay ? "" : "none",
                            // }}
                          >
                            {" "}
                            <img src={imageToShow} alt="" />
                            <span
                              className="absolute right-[-10px] top-[-40px] text-[45px] text-[black] cursor-pointer"
                              onClick={closelightbox}
                            >
                              &times;
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {/* <div
                          className={`fixed bg-black opacity-25 top-0 left-0 w-full h-full `}
                        ></div> */}
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          }

          {/* Highlights Section */}
        </div>
      </div>
    </>
  )
}
