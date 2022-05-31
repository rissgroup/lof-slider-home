import React from 'react';
// import "../styles/bec.css"

import AnimatedText from 'react-animated-text-content';

export default function bec() {
  return (
    <>
  <section className='container-fluid' id='become'>
  <div className='flex flex-col md:flex-row text-white'>
    <div className=" basis-6/12  my-auto"      >
        
       

        <AnimatedText
type="words" // animate words or chars
animation={{
x: '200px',
y: '-20px',
scale: 1.1,
ease: 'ease-in-out',
}}
animationType="float" 
interval={0.06}
duration={0.8}
tag="p"
className="animated-paragraph text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5 md:pl-20"
includeWhiteSpaces
threshold={0.1}
rootMargin="20%"
>
Become A
</AnimatedText>
<AnimatedText
type="words" // animate words or chars
animation={{
x: '200px',
y: '-20px',
scale: 1.1,
ease: 'ease-in-out',
}}
animationType="float"
interval={0.06}
duration={0.8}
tag="p"
className="animated-paragraph text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5 pink-color md:pl-20 "
includeWhiteSpaces
threshold={0.1}
rootMargin="20%"
>

         Creator
</AnimatedText>

<AnimatedText
 type='words'
 interval={0.04}
 duration={0.8}
 animation={{
   y: '100px',
   ease: 'ease',
   scale: 1.06,
 }}
className="md:leading-8 text-[12px] md:pl-20"
>
Create an account and we’ll get you started in no time!

</AnimatedText>
<AnimatedText
 type='words'
 interval={0.04}
 duration={0.8}
 animation={{
   y: '100px',
   ease: 'ease',
   scale: 1.06,
 }}
className="md:leading-8 text-[12px] md:pl-20"
>

More features, profit and freedom - with dedicated support in everything.
</AnimatedText>

      
    
        <button className="mb-5 mt-4 px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper md:ml-20">
          Create an account 
        </button>
        
      </div>
      <div className='basis-6/12 '>
      <div class="my-auto md:mr-20 ">
  <div class="slidebec ">
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img1.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
     
    </div>
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img2.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
      
    </div>
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img3.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
      
    </div>
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img4.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
    
    </div>
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img1.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
     
    </div>
    <div class="product-box">
      <div class="img">
        <img src="/assets/be-slider/img2.png" alt=""/>
      </div>
      <div class="details">
        <p class="name">Marateigen</p>
        <p class="price">@marateigen</p>
      </div>
      
    </div>
  </div>
</div>
      </div>
    </div>
  </section>
    
    </>
  )
}
