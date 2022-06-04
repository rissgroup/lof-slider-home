import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twit from "../../public/assets/Icons/Twitter.svg";
import instagram from "../../public/assets/Icons/instagram.svg";
import reddit from "../../public/assets/Icons/reddit.svg";
import discord from "../../public/assets/Icons/discord.svg";
import heart from "../../public/assets/Icons/Herat.png";
import telegram from "../../public/assets/Icons/telegram.svg";

export default function Pagesfooter() {
  return (
    <>
    
    <div >

          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center gap-3 basis-full mb-3 md:mb-0 md:basis-1/4 md:justify-start md:pl-11 ">
              <a href="" className="">
                <Image src={twit}
                width={18}
                height={18}
                alt=""  />
              </a>
              <a href="" className="">
                <Image src={telegram} alt="" width={18}
                height={18}
                 />
              </a>
              <a href="" className="">
                <Image src={instagram} alt="" width={18}
                height={18} />
              </a>
              <a href="" className="">
                <Image src={reddit} alt="" width={18}
                height={18} />
              </a>
              <a href="" className="">
                <Image src={discord} alt="" width={18}
                height={18} />
              </a>
              <a href="" className="">
                <Image src={heart} alt="" width={18}
                height={18} />
              </a>
            </div>
            <div className="basis-2/4 ">
              <ul className="flex justify-center gap-6 text-sm font-medium text-white hind" >
                
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
