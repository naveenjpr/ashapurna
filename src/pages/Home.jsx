import React from "react"
import Header from "../common/Header"
import Myslider from "../SliderFolder/Myslider"
import ThirdSlider from "../SliderFolder/ThirdSlider"
import Fourslider from "../SliderFolder/Fourslider"
import Homeabout from "./Homeabout"

import MediaandEventSlider from "../SliderFolder/MediaandEvent.slider"
import FeaturedProjectsSlider from "../SliderFolder/FeaturedProjects"
import Card from "../SliderFolder/Card"

export default function Home() {
  return (
    <>
      <Header />
      <Myslider />
      <Homeabout />
      <Card />

      <FeaturedProjectsSlider />
      <ThirdSlider />
      <Fourslider />
      <MediaandEventSlider />
    </>
  )
}
