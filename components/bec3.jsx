import React from "react";


import AnimatedText from "react-animated-text-content";
import Script from "next/script";



export default function bec3() {
  return (
    <>
         <Script src="/be.js" type="text/javascript"></Script>
        <Script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></Script>
        <section className="container-fluid" id="become">
          <div className="flex flex-col md:flex-row text-white">
            <div className=" basis-6/12  my-auto mt-16 md:mt-52 lg:mt-64 2xl:mt-96">
              <div className="flex">
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph text-4xl leading-10  md:text-2xl mt-1 xl:text-6xl monofont pb-2 md:pb-5 lg:pl-20"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Become A
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5 pink-color md:pl-5"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Creator
                </AnimatedText>
              </div>
              <AnimatedText
                type="words"
                interval={0.04}
                duration={0.8}
                animation={{
                  y: "100px",
                  ease: "ease",
                  scale: 1.06,
                }}
                className="md:leading-8 text-[13px] lg:pl-20"
              >
                Create an account and we’ll get you started in no time!
              </AnimatedText>
              <AnimatedText
                type="words"
                interval={0.04}
                duration={0.8}
                animation={{
                  y: "100px",
                  ease: "ease",
                  scale: 1.06,
                }}
                className="md:leading-8 text-[12px] lg:pl-20"
              >
                More features, profit and freedom - with dedicated support in
                everything.
              </AnimatedText>

              <button className="mb-5 mt-4 px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper lg:ml-20">
                Create an account
              </button>
            </div>
            <div className="basis-6/12 pt-20 ">
            <img src="/assets/be-slider/sec-3.png" alt="" />
            </div>
          </div>
        </section>
    
    </>
  )
}
