
import React from 'react';
import $ from 'jquery';


import AnimatedText from "react-animated-text-content";

class Bec extends React.Component {
  componentDidMount() {
    var images = [
      "/assets/be-slider/img1.png",
      "/assets/be-slider/img2.png",
      "/assets/be-slider/img3.png",
    
      "/assets/be-slider/img4.png",
    
      "/assets/be-slider/img1.png",
      "/assets/be-slider/img2.png",
      "/assets/be-slider/img3.png",
    
      "/assets/be-slider/img4.png",
      "/assets/be-slider/img1.png",
      "/assets/be-slider/img2.png",
    ];
    
    console.log(images);
    
    var lists = document.getElementsByTagName("li");
    var list = lists;
    console.log(lists);
    console.log(list);
    // Var or Let works in the for loop
    let counter = 0;
    let counter2 = 0;
    for (let i = 0; i < lists.length; i++) {
      // console.log(list[i]);
      if (i < images.length) {
        list[i].style.backgroundImage = "url(" + images[i] + ")";
      } else if (i < 2 * images.length) {
        list[i].style.backgroundImage = "url(" + images[counter] + ")";
        counter = counter + 1;
      } else {
        list[i].style.backgroundImage = "url(" + images[counter2] + ")";
        counter2 = counter2 + 1;
      }
    }
    
    var clone1 = $(".col1 ul li").clone();
    clone1.appendTo(".col1 ul");
    var clone2 = $(".col2 ul li").clone();
    clone2.appendTo(".col2 ul");
    var clone3 = $(".col3 ul li").clone();
    clone3.appendTo(".col3 ul");
    
  }
  state = {  } 
  render() { 
    return (<>
    <section className="container-fluid" id="become">
        <div className="flex flex-col md:flex-row text-white">
          <div className=" basis-6/12  my-auto mt-20 ">
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
              className="md:leading-8 text-[12px] md:pl-20"
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
              className="md:leading-8 text-[12px] md:pl-20"
            >
              More features, profit and freedom - with dedicated support in
              everything.
            </AnimatedText>

            <button className="mb-5 mt-4 px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper md:ml-20">
              Create an account
            </button>
          </div>
          <div className="basis-6/12 ">
          

            <div className="second sec">
              <div className="sliders-cont">
                <div id="slider" className="col1">
                  <ul>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                  </ul>
                </div>
                <div id="slider" className="col2">
                  <ul>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                  </ul>
                </div>
                <div id="slider" className="col3">
                  <ul>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                    <li  className="selfie-img"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);
  }
}
 
export default Bec;