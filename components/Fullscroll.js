import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero from "./Hero";
import Lofplatform from "./Lofplatform";
import Whylof from "./Whylof";
import Faq from "./Faq";
import Nav from "./navs/nav";
import Bec from "./bec";



// import required modules
import { Parallax, Pagination, Navigation, Mousewheel } from "swiper";
import Footer from "./navs/Footer";
// import Faq2 from "./Faq2";
import Bec2 from "./bec2";
// import Bec3 from "./bec3";
// import { Head } from "next/document";


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
        
        speed={1200}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation, Mousewheel]}
        className="mySwiper main-sloider faq-sw"
        mousewheel={true}
        autoplay={false}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
           
              
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="home-bg">
         <Hero/>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
          <Lofplatform/>
          <div className="">

          {/* <Lofslider/> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
          
          <Bec/>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
         
          <Bec2/>
        </SwiperSlide>
        {/* <SwiperSlide className="home-bg">
         
          <Bec3/>
        </SwiperSlide> */}
        <SwiperSlide className="home-bg">
          <Whylof/>
        </SwiperSlide>

        <SwiperSlide className="home-bg">
          <Faq/>
          
        </SwiperSlide>
        {/* <SwiperSlide className="home-bg">
          <Faq2/>
          
        </SwiperSlide> */}



        {/* <SwiperSlide className="home-bg">
            <Beslider/>
        </SwiperSlide> */}
        {/* <SwiperSlide className="home-bg">
            <Faqscroll/>
        </SwiperSlide> */}
      </Swiper>
      <Footer/>
    </>
  );
}
