import React from 'react'
import Image from 'next/image';
import mainimage from "../public/assets/Bachi-2.png"

export default function Hero() {
  return (
    <> 
     {/* <div class="concept concept-three">
    <div class="word text-white">
      <div class="hover">
        <div></div>
        <div></div>
        <h1>L</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>O</h1>
      </div>
      <div class="hover"> 
        <div></div>
        <div></div>
        <h1>N</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>E</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>L</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>Y</h1>
      </div>
    </div>
  </div> */}

    <div className="bg-dark hero ">

              
<div className="container-fluid ">
  <div className=" flex flex-col md:flex-row text-white pt-5 md:pt-28   ">
    <div className="basis-1/5 md:basis-1/3 pt-5 pl-0 md:pt-60 md:pl-10 stroke-[2px] ">
      <h1 className="text-[4.7rem] md:text-[7.7rem] font-black pop main-heading flex justify-center md:justify-start leading-[8rem]">LONELY</h1>
      <h6 className='text-5xl font-black pop main-heading2 flex justify-center md:justify-start ml-1'>FANS</h6>
    </div>
    <div className=" basis-1/5 md:basis-1/3 justify-center flex p-16 md:p-0 bachi-bg h-[1000px] ">
    {/* <Image
        src={mainimage}
        alt="Picture of the author"
        className=''
        layout=''
        height={880}
        width={530}
      
    
      
      
      /> */}
        <img src="/assets/Bachi.png" alt="Picture of the author" />
       
    </div>
    <div className="basis-1/3 pt-5 md:pt-40 pl-0 md:pl-20">
      <h5 className='text-[1.8rem] md:text-[3.5rem] monofont flex justify-center md:justify-start'>
        A revolutionary <br />
      </h5>
      <h5 className='text-[1.8rem] md:text-[3.5rem] monofont flex justify-center md:justify-start'>
      <span className='pink-color'>fan platform</span>

      </h5>
      <p className='text-xl font-semibold my-3 flex justify-center md:justify-start'>
        Sell any type of content. Easy to start!
       
      </p>
      <p className='home-txt text-xs md:text-base flex justify-center md:justify-start tracking-wider'> Completely free of judgement. No surprise account <br /> closings
        or changes in allowed content. Payments <br /> easily and in
        time.</p>
    </div>
  </div>
</div>
</div>
    
    </>
  )
}
