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
        // autoplay= {{
        //   delay: 1000,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Pagination]} 
      className="mySwiper lof-slider hidden md:block"
      >
        <SwiperSlide className="lof-s flex  justify-center ">
            <div className="px-[10%] flex flex-col md:flex-row">

            
        <div className="my-auto basis-full md:basis-2/4 text-left" >
              <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0  text-white">
                LOF <span className="pink-color">platform</span>
              </h1>

              <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white ">
              Create a free account and start browsing content from the hottest models around the world. 
We have made everything extremely simple and there are no hidden terms.

                
              </p>
            </div>
            <div className="basis-full md:basis-2/4 flex justify-center align-center">
            <img src='/assets/pl-slider/Mobile.png'  alt="" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basi basis-full md:basis-2/4 text-left" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0 text-white">
        LOF <span className="pink-color">platform</span>
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white ">
      View pictures, videos, live streams - or privately message the models.
You'll be able to connect with your favorite content creators.

      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center">
    <img src='/assets/pl-slider/Mobile (8).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0  text-white">
        LOF <span className="pink-color">platform</span>
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white ">
      LOF Platform offers more features than any other fan site.
Interact with your favorite content creators like never before.

        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center">
    <img src='/assets/pl-slider/Mobile (7).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left leading-8" >
      <h1 className="text-4xl md:text-7xl monofont  leading-3 md-leading-8 pt-10 md:pt-0  text-white">
        LOF <span className="pink-color">platform</span>
      </h1>
      <h1 className="text-base md:text-2xl monofont mt-5    text-white">
      Effortless and secure payments.
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12 md:pt-8 font-light text-white ">
      Support your favorite content creator and buy their exclusive content.
You can pay using money or crypto. 
 
        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-middle">
    <img src='/assets/pl-slider/Mobile (6).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left leading-8" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0   text-white">
        LOF <span className="pink-color">platform</span>
      </h1>
      <h3 className="text-base md:text-2xl monofont  mt-5  text-white">
      Become a content creator?
      </h3>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  md:pt-8 font-light text-white ">
      Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales.
Release your content free of judgement and completely at your own terms.

        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center">
    <img src='/assets/pl-slider/Mobile (5).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
      </Swiper>







     <Swiper 
       
        // autoplay= {{
        //   delay: 1000,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Pagination]} 
      className="mySwiper lof-slider block md:hidden"
      >
        <SwiperSlide className="lof-s flex  justify-center ">
            <div className="px-[10%] flex flex-col md:flex-row">

            
        <div className="my-auto basis-full md:basis-2/4 text-left" >
              <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8  pt-10 md:pt-0  text-white">
                LOF <span className="pink-color">platform</span>
              </h1>

              <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white txt-hide ">
              Create a free account and start browsing content from the hottest models around the world. 
We have made everything extremely simple and there are no hidden terms.

                
              </p>
            </div>
            <div className="basis-full md:basis-2/4 flex justify-center align-center img-size  md:w-full">
            <img src='/assets/pl-slider/Mobile.png'  alt="" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basi basis-full md:basis-2/4 text-left" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0 text-white">
        LOF <span className="pink-color">platform</span>
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white txt-hide">
      View pictures, videos, live streams - or privately message the models.
You'll be able to connect with your favorite content creators.

      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center img-size   md:w-full">
    <img src='/assets/pl-slider/Mobile (8).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0  text-white">
        LOF <span className="pink-color">platform</span>
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  pt-8 font-light text-white txt-hide">
      LOF Platform offers more features than any other fan site.
Interact with your favorite content creators like never before.

        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center img-size   md:w-full">
    <img src='/assets/pl-slider/Mobile (7).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left md:leading-8" >
      <h1 className="text-4xl md:text-7xl monofont  leading-3 md-leading-8 pt-10 md:pt-0  text-white">
        LOF <span className="pink-color">platform</span>
      </h1>
      <h1 className="text-base md:text-2xl monofont mt-5    text-white">
      Effortless and secure payments.
      </h1>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12 md:pt-8 font-light text-white txt-hide">
      Support your favorite content creator and buy their exclusive content.
You can pay using money or crypto. 
 
        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-middle img-size1  md:w-full">
    <img src='/assets/pl-slider/Mobile (6).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="lof-s">
        <div className="px-[10%] flex-col md:flex-row flex">

            
<div className="my-auto basis-full md:basis-2/4 text-left md:leading-8" >
      <h1 className="text-4xl md:text-7xl monofont leading-3 md-leading-8 pt-10 md:pt-0   text-white">
        LOF <span className="pink-color">platform</span>
      </h1>
      <h3 className="text-base md:text-2xl monofont  mt-5  text-white">
      Become a content creator?
      </h3>

      <p className="text-[12px] md:text-xl tracking-normal md:leading-8   w-12/12 md:w-10/12  md:pt-8 font-light text-white txt-hide">
      Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales.
Release your content free of judgement and completely at your own terms.

        
      </p>
    </div>
    <div className="basis-full md:basis-2/4 flex justify-center align-center img-size1  md:w-full">
    <img src='/assets/pl-slider/Mobile (5).png'  alt="" />
    </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
