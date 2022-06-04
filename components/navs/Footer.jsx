import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twit from "../../public/assets/Icons/Twitter.svg";
import instagram from "../../public/assets/Icons/instagram.svg";
import reddit from "../../public/assets/Icons/reddit.svg";
import discord from "../../public/assets/Icons/discord.svg";
import heart from "../../public/assets/Icons/Herat.png";
import telegram from "../../public/assets/Icons/telegram.svg";

export default function Footer() {
  return (
    <>
    
    <div className="txt-botm">
          <div className="flex flex-col md:flex-row">
            <div className="basis-ful md:basis-1/4 flex gap-3 pl-0 md:pl-11 mb-3 md:mb-0 justify-center md:justify-start">
              <a href="" className="svg-hover">
               <img src="/assets/Icons/Twitter.svg" alt="" />
                
               <img src="/assets/Icons/instagram.svg" alt="" />
              </a>
              <a href="" className="svg-hover">
               <img src="/assets/Icons/telegram.svg" alt="" />
                
               <img src="/assets/Icons/Twitter.svg" alt="" />
              </a>
              <a href="" className="svg-hover">
               <img src="/assets/Icons/instagram.svg" alt="" />
                
               <img src="/assets/Icons/Herat.svg" alt="" />
              </a>
              <a href="" className="svg-hover">
               <img src="/assets/Icons/discord.svg" alt="" />
                
               <img src="/assets/Icons/instagram.svg" alt="" />
              </a>
              <a href="" className="svg-hover">
               <img src="/assets/Icons/reddit.svg" alt="" />
                
               <img src="/assets/Icons/instagram.svg" alt="" />
              </a>
              <a href="" className="svg-hover">
               <img src="/assets/Icons/Herat.svg" alt="" />
                
               <img src="/assets/Icons/instagram.svg" alt="" />
              </a>
            </div>
            <div className="basis-2/4  ">
              <ul className=" gap-6 flex justify-center text-white text-sm font-medium hind " >
                
                  <Link href="/termandConditions" className='glow'>
                    <a>Term and Condition</a>
                  </Link>
                
              
                  <Link href="/privacy" className='glow'>
                    <a>Privacy</a>
                  </Link>
              
                
                  <Link href="/riskpolicy" className='glow'>
                    <a>Risk Policy</a>
                  </Link>
                
            
                  <Link href="/" className='glow'>
                    <a>Contact</a>
                  </Link>
                
              </ul>
            </div>
            <div className="basis-1/4"></div>
          </div>
        </div>
    </>
  )
}
