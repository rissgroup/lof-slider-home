import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Plslider from "./Plslider"
import Faqscroll from "./faqscroll";
import Hero from "./Hero";
import Lofplatform from "./Lofplatform";
import Become from "./Become";
import Whylof from "./Whylof";
import Faq from "./Faq";
import Nav from "./navs/nav";



// import required modules
import { Parallax, Pagination, Navigation, Mousewheel } from "swiper";
import Footer from "./navs/Footer";


export default function Fullscroll() {
  return (
    <>
    <Nav/>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "height":"100vh"
        }}
        speed={600}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation, Mousewheel]}
        className="mySwiper faq-sw"
        mousewheel={true}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            // "background-image":
            //   "url(../public/assets/smoke.gif)",
              
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
         <Hero/>
        </SwiperSlide>
        <SwiperSlide>
          <Lofplatform/>
        </SwiperSlide>
        <SwiperSlide>
          <Become/>
        </SwiperSlide>
        <SwiperSlide>
          <Whylof/>
        </SwiperSlide>

        <SwiperSlide>
          <Faq/>
        </SwiperSlide>




        {/* <SwiperSlide>
            <Beslider/>
        </SwiperSlide> */}
        {/* <SwiperSlide>
            <Faqscroll/>
        </SwiperSlide> */}
      </Swiper>
      <Footer/>
    </>
  );
}
