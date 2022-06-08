/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../public/assets/logo.png";
import { Dialog } from '@headlessui/react'
import {  useState } from 'react'
import Image from "next/image";
import Contactus from "../Contactus";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#Home", current: true },
  { name: "LOF platform", href: "#Lof-platform", current: false },
  { name: "Become a creator", href: "#become", current: false },
  { name: "FAQ", href: "#faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [isOpen, setIsOpen] = useState(false)

function closeModal() {
  setIsOpen(false)
}

function openModal() {
  setIsOpen(true)
}
  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="top-nav">
          {({ open }) => (
            <>
              <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center  h-16 for-nav ">
                  <div className="flex items-center basis-4/5 md:basis-2/5">
                    <div className="flex-shrink-0 block md:hidden">
                      <Image className="h-8 w-8" src={Logo} alt="Workflow" width={70} height={35}  />
                    </div>
                    <div className="hidden md:block ">
                      <div className=" flex items-baseline space-x-3">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-white nav-link"
                                : "text-white  ",
                              "px-3 py-2 rounded-md text-sm font-medium hind glow"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center mx-auto hidden md:block mt-4  ">
                    <div className="flex-shrink-0  ">
                      <Image className="" src={Logo} alt="Workflow" width={85} height={40}  />
                    </div>
                  </div>
                  <div className="hidden md:block basis-2/5">
                    <div className="ml-4 flex items-center md:ml-6 justify-end gap-4">
                      <button className="font-medium text-sm px-5 py-2 rounded-md sign-up hind glow" onClick={openModal}>Sign up</button>
                      {/* <button className="border-2 py-2 px-5 font-medium text-xs rounded-md pink-color sign-in hind">Sign in</button> */}


<button className="button button--moema font-medium button--text-upper text-sm rounded-md px-5 py-2" onClick={openModal}>Sign in</button>


                     
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
            <div className="fixed inset-0 bg-black bg-opacity-80" />
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
                <Dialog.Panel className="w-[600px] max-w-2xl  transform overflow-hidden rounded-2xl card-bg p-6 text-left align-middle shadow-xl transition-all">
                
                <div className='float-right'>          <svg  onClick={closeModal} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d8aaf8]  " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
      </div>
               
                
                <div className='p-10'>
                <div className='text-center ' >
                  
                  <p className='text-white text-xs font-medium hind mb-5'>The LOF platform is in development! 
Fill the form below to be among the first content creators to be notified as soon as we are ready to launch!
</p>
                </div>
                <Contactus />
                </div>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                      
                      
                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? ( 
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden mbl-nav-bg">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-white"
                          : "text-gray-300  hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <button onClick={openModal} className="font-medium text-sm px-5 py-2 rounded-md sign-up hind">Sign up</button>
                  <button onClick={openModal} className=" button--moema font-medium button--text-upper text-sm rounded-md px-5 py-2">Sign in</button>
                  {/* <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}
        {/* <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            
          </div>
        </main> */}
      </div>
    </>
  );
}
