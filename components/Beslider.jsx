// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";



// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={false}
//         slidesPerView={"5"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper be-sw"
//       >
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide className="be-slide">
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React from 'react'

export default function Beslider() {
  return (
    <>
    {/* <section id="slider">
  <input type="radio" name="slider" id="s1" checked />
  <input type="radio" name="slider" id="s2" />
  <input type="radio" name="slider" id="s3" />
  <input type="radio" name="slider" id="s4" />
  <input type="radio" name="slider" id="s5" />

  <label for="s1" id="slide1"><img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" /></label>
  <label for="s2" id="slide2"><img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt="" /></label>
  <label for="s3" id="slide3"><img src="https://wallpaperaccess.com/full/1154341.jpg" alt="" /></label>
  <label for="s4" id="slide4"><img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="" /></label>
  <label for="s5" id="slide5"><img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="" /></label>
</section> */}
<section id="slider">
  <input type="radio" name="slider" id="s1" />
  <input type="radio" name="slider" id="s2" />
  <input type="radio" name="slider" id="s3" checked />
  <input type="radio" name="slider" id="s4" />
  <input type="radio" name="slider" id="s5" />
  <label htmlFor="s1" id="slide1"></label>
  <label htmlFor="s2" id="slide2"></label>
  <label htmlFor="s3" id="slide3"></label>
  <label htmlFor="s4" id="slide4"></label>
  <label htmlFor="s5" id="slide5"></label>
</section>
    
    </>
  )
}
