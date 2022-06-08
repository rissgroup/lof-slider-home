import React from 'react';
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Footer() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
    
    <div className="txt-botm">
          <div className="flex flex-col md:flex-row">
            <div className="basis-ful md:basis-1/4 flex gap-3 pl-0 md:pl-11 mb-3 md:mb-0 justify-center md:justify-start">
              <a href="https://twitter.com/LOFcrypto" className="svg-hover">
               <img src="/assets/Icons/Twitter.svg" alt="" />
                
               <img src="/assets/Icons/Twitter-p.svg" alt="" />
              </a>
              <a href="https://t.me/LonelyFansChat" className="svg-hover">
               <img src="/assets/Icons/telegram.svg" alt="" />
                
               <img src="/assets/Icons/telegram-p.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/lofcrypto/" className="svg-hover">
               <img src="/assets/Icons/instagram.svg" alt="" />
                
               <img src="/assets/Icons/instagram-p.svg" alt="" />
              </a>
              <a href="https://discord.com/invite/T2fSbGbgWj" className="svg-hover">
               <img src="/assets/Icons/discord.svg" alt="" />
                
               <img src="/assets/Icons/discord-p.svg" alt="" />
              </a>
              <a href="https://www.reddit.com/r/LOFcrypto/" className="svg-hover">
               <img src="/assets/Icons/reddit.svg" alt="" />
                
               <img src="/assets/Icons/reddit-p.svg" alt="" />
              </a>
              <a href="" className="svg-hover ">
               <img src="/assets/Icons/Herat.svg" alt="" />
                
               <img src="/assets/Icons/Heart-p.svg" alt="" />
              </a>
            </div>
            <div className="basis-2/4  ">
              <ul className=" gap-6 flex justify-center text-white text-sm font-medium hind " >
                
                  <Link href="/termandConditions" className='glow '>
                    <a className='hover:text-[#d8aaf8]'>Term and Condition</a>
                  </Link>
                
              
                  <Link href="/privacy" className='glow'>
                    <a className='hover:text-[#d8aaf8]'>Privacy</a>
                  </Link>
              
                
                  <Link href="/riskpolicy" className='glow'>
                    <a className='hover:text-[#d8aaf8]'>Risk Policy</a>
                  </Link>
                
            
                  <Link href="/" className='glow' >
                    <a  onClick={openModal} className='hover:text-[#d8aaf8]'>Contact</a>
                  </Link>
               
              </ul>
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
            <div className="basis-1/4"></div>
          </div>
        </div>
    </>
  )
}
