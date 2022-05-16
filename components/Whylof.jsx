import React from "react";
import Image from "next/image";
import Money from "../public/assets/Icons/money.svg";
import Inlove from "../public/assets/Icons/in-love.svg";
import followers from "../public/assets/Icons/followers.svg";
import collaboration from "../public/assets/Icons/collaboration.svg";
export default function Whylof() {
  return (
    <>
      <div className="bg-dark">
        <div className="container-fluid ">
          <div className="flex flex-col md:flex-row text-white pb-5 pt-20 md:pt-28">
            <div className="basis-full text-center ">
              <h1 className="monofont text-4xl">Why LOF?</h1>
            </div>
          </div>
        </div>

        <div className=" container-fluid scrollwhylof ">
          <div className="flex flex-col md:flex-row text-white my-2 md:my-5  gap-2 md:gap-10">
            <div className="basis-2/4 py-4  px-4 md:py-5  md:px-5 card-bg">
              <div className="flex pb-3">
                <Image src={Money} width={50} height={50}  alt="Picture of the author" />
                <h6 className="my-auto hind text-lg font-bold " style={{ paddingLeft: "2rem" }}>
                  More Profit
                </h6>
              </div>
              <p className="font-normal text-[15px]">
                You will keep up to 95% of all your sales! In addition to that,
                you can release your content as NFTs, and get a share of the
                price every single time the NFT is resold - forever.
              </p>
            </div>
            <div className="basis-2/4 py-4  px-4 md:py-5  md:px-5 card-bg">
              <div className="flex pb-3">
                <Image src={Inlove} width={50} height={50}  alt="Picture of the author" />
                <h6 className="my-auto hind text-lg font-bold" style={{ paddingLeft: "2rem" }}>
                  More Features
                </h6>
              </div>
              <p className="font-normal text-[15px]">
                We looked at other fan platforms and what they were missing. We
                worked with content creators and asked what could be done
                better. Turns out there were plenty, and our platform has been
                built to fix that.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-white gap-2 md:gap-10">
            <div className="basis-2/4 py-4  px-4 md:py-5  md:px-5 card-bg">
              <div className="flex pb-3">
                <Image src={followers} width={50} height={50}  alt="Picture of the author" />
                <h6 className="my-auto hind text-lg font-bold"  style={{ paddingLeft: "2rem" }}>
                  Effortless Payments in Time
                </h6>
              </div>
              <p className="font-normal text-[15px]">
                We are aware of the problems the other fan platforms have had.
                On LOF, your payments will always be in time without any extra
                hassle.
              </p>
            </div>
            <div className="basis-2/4 py-4 px-3 card-bg">
              <div className="flex pb-3">
                <Image src={collaboration} width={50} height={50}   alt="Picture of the author" />
                <h6 className="my-auto hind text-lg font-bold" style={{ paddingLeft: "2rem" }}>
                  More Freedom
                </h6>
              </div>
              <p className="font-normal text-[15px]">
                We will not restrict your content in anyway - as long as it
                obeys the law. Your content can be just as mild or just as kinky
                as you want. There will be no surprise account closings or
                changes in terms of use. We are on your side, and we want you to
                be happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
