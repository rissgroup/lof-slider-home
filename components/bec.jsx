import React from "react";


import AnimatedText from "react-animated-text-content";
import Script from "next/script";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Bec() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
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
                  className="animated-paragraph text-4xl leading-10  md:text-2xl mt-1 lg:text-4xl 2xl:text-6xl monofont pb-2 md:pb-5 lg:pl-20"
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
                  className="animated-paragraph text-4xl leading-10  md:text-3xl lg:text-4xl 2xl:text-6xl monofont pb-2 md:pb-5 pink-color md:pl-5"
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
                className="md:leading-8 text-[15px] lg:pl-20"
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
                className="md:leading-8 text-[14px] lg:pl-20"
              >
                More features, profit and freedom - with dedicated support in
                everything.
              </AnimatedText>

              <button  onClick={openModal} className="mb-5 mt-4 px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper lg:ml-20">
                Create an account
              </button>
              <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl card-bg p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="mt-2">
                  <form>
                  <div className="mb-6">
    <label htmlFor="Name" className="block mb-2 text-sm font-medium text-white">Name</label>
    <input type="text" id="name" className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg   block w-full p-2.5  dark:text-white  " required />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
    <input type="email" id="email" className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg   block w-full p-2.5  dark:text-white " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
    <input type="text" id="message" className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg block w-full p-2.5  dark:text-white " required />
  </div>
  
  
  <button type="submit" className="text-[#d8aaf8] bg-transparent border  border-[#d8aaf8]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
</form>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            </div>
            <div className="basis-6/12 pt-20 ">
            <img src="/assets/be-slider/sec-1.png" alt="" />
            </div>
          </div>
        </section>
    
    </>
  )
}

