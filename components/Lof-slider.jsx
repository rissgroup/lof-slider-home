import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper 
       loop    
        pagination={{
          clickable: true,
        }}
      modules={[Pagination]} 
      className="mySwiper lof-slider"
      >
        <SwiperSlide className="lof-s">
            <div className="px-[10%] flex">

            
        <div className="my-auto basis-2/4 text-left" >
              <h1 className="text-4xl monofont leading-8  text-white">
                LOF <span className="pink-color">platform</span>
              </h1>
              <h1 className="text-3xl monofont leading-8 text-white">
                LOF 
              </h1>
              <p className="text-[12px] md:text-sm tracking-normal leading-6   w-12/12 md:w-7/12  pt-8 font-light text-white ">
                Create a free account and start browsing content from the
                hottest models around the world. We have made everything
                extremely simple and there are no hidden terms. 
                
              </p>
            </div>
            <div className="basis-2/4 flex justify-center align-center">
            <img src='/assets/pl-slider/Mobile.png'  alt="" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex">

            
<div className="my-auto basis-2/4 text-left" >
      <h1 className="text-4xl monofont leading-8  text-white">
        LOF <span className="pink-color">platform</span>
      </h1>
      <h1 className="text-3xl monofont leading-8 text-white">
        LOF 
      </h1>
      <p className="text-[12px] md:text-sm tracking-normal leading-6   w-12/12 md:w-7/12  pt-8 font-light text-white ">
        Create a free account and start browsing content from the
        hottest models around the world. We have made everything
        extremely simple and there are no hidden terms. 
        
      </p>
    </div>
    <div className="basis-2/4 flex justify-center align-center">
    <img src='/assets/pl-slider/Mobile.png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">Slide 3</SwiperSlide>
        <SwiperSlide className="lof-s">Slide 4</SwiperSlide>
        <SwiperSlide className="lof-s">Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
