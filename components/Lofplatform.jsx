import Head from "next/head";
import React, { useState } from "react";
import { Navigation, Pagination,  Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Lofplatform() {
  const ImageOneClick = () => {
    SetImageText(
      " Create a free account and start browsing content from the hottest models around the world.  We have made everything extremely simple and there are no hidden terms."
    );
  };
  const ImageTwoClick = () => {
    SetImageText(
      " LOF Platform offers more features than any other fan site. Interact with your favorite content creators like never before. "
    );
  };
  const ImageThreeClick = () => {
    SetImageText(
      "Become a content creator?  Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms. "
    );
  };
  const ImageFourClick = () => {
    SetImageText(
      " View pictures, videos, live streams - or privately message the models. You'll be able to connect with your favorite content creators. "
    );
  };
  const ImageFiveClick = () => {
    SetImageText(
      "Effortless and secure payments. Support your favorite content creator and buy their exclusive content.You can pay using money or crypto. "
    );
  };
  // const ImageSixClick = () => {
  //   SetImageText(
  //     " Image 6 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
  //   );
  // };
  // const ImageSevenClick = () => {
  //   SetImageText(
  //     " Image 7 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
  //   );
  // };
  const [ImageText, SetImageText] = useState(
    "Become a content creator? Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms."
  );

 
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
      </Head>
      <div className="bg-dark " id="Lof-platform">
        <div className="container-fluid ">
          <div className=" text-white pt-48 md:pt-56 lg:pt-32 w-full mbl-resp-plat">
            <div className="col  text-center" >
              <h1 className="text-3xl monofont leading-8 -m-5">
                LOF <span className="pink-color">platform</span>
              </h1>
              <p className="text-[12px] md:text-sm hidden md:block tracking-normal leading-6 mx-auto txt-hide  w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                {/* Create a free account and start browsing content from the
                hottest models around the world. We have made everything
                extremely simple and there are no hidden terms.  */}
                {ImageText}
              </p>
            </div>
          </div>

          {/* ******************* desktop Slider Start*********** */}
        
     <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        
        // mousewheel={true}
        // centeredSlides
        slideToClickedSlide
        //   navigation={{
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
         
          
        // }}
       
       
        loop    
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination,Navigation, Mousewheel]}
        className="mySwiper pl-swiper swiper-full-mobile hidden md:block "
        
      
      >
        <SwiperSlide className="pl-slide"><img src='/assets/pl-slider/Login.svg' className="w-[220px] " onClick={ImageOneClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Profile.svg" className="w-[220px]"   onClick={ImageTwoClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Live-Stream.svg" onClick={ImageThreeClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Drop-Down.svg" onClick={ImageFourClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Message.svg"  className="w-[220px] " onClick={ImageFiveClick} alt="" /></SwiperSlide>
        {/* <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome7.png" onClick={ImageFiveClick} alt="" /></SwiperSlide> */}
        {/* <div className="swiper-button-next" onClick={ImageOneClick} ></div>
      <div className="swiper-button-prev"></div> */}
      </Swiper>
          {/* *******************desktop  Slider End*********** */}
          {/* *******************Mobile Slider Start*********** */}
        <div className="block md:hidden slider-resp">
     <Swiper
     navigation
     slidesPerView={1}
     spaceBetween={30}
     mousewheel={true}
     centeredSlides
     slideToClickedSlide
     loop    
    //  pagination={{
    //    clickable: true,
    //  }}
     modules={[Pagination, Mousewheel, Navigation]}
     className="mySwiper pl-swiper swiper-full-mobile  "
     onSlideChange={() => {
      if (slide1 == slide1) {
        ImageOneClick();
      }
      if (slide2 == slide2) {
        ImageTwoClick();
      }
      if (slide3 == slide3) {
        ImageThreeClick();
      }
      if (slide4 == slide4) {
        ImageFourClick();
      }
      if (slide5 == slide5) {
        ImageFiveClick();
      }
      if (slide6 == slide6) {
        ImageFiveClick();
        
      }
     }}
   
   
   >
     <SwiperSlide  className="pl-slide" onClick={ImageOneClick}><img src='/assets/pl-slider/Mobile.png' className="w-[220px]" id="slide1" alt="" /></SwiperSlide>
     <SwiperSlide id="slide2" className="pl-slide" onClick={ImageTwoClick}><img src="/assets/pl-slider/Mobilehome4.png" className="w-[220px]" alt="" /></SwiperSlide>
     <SwiperSlide id="slide3" className="pl-slide"  onClick={ImageThreeClick}><img src="/assets/pl-slider/Mobilehome6.png" alt="" /></SwiperSlide>
     <SwiperSlide id="slide4" className="pl-slide" onClick={ImageFourClick}><img src="/assets/pl-slider/Mobilehome5.png"  alt="" /></SwiperSlide>
     <SwiperSlide id="slide5" className="pl-slide" onClick={ImageFiveClick}><img src="/assets/pl-slider/Mobilehome7.png"  alt="" /></SwiperSlide>
     <SwiperSlide id="slide6" className="pl-slide" onClick={ImageFiveClick}><img src="/assets/pl-slider/Mobilehome7.png"  alt="" /></SwiperSlide>
     
   </Swiper>
   </div>
       {/* ******************* Mobile Slider End*********** */}
        </div>
      </div>
    </>
  );
}
