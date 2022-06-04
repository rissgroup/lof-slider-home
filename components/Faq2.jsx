import React, { useState } from "react";

export default function Faq2() {
  const [AnsText, SetAnsText] = useState(
    "LOF Platform is a revolutionary fan platform that allows all types of content creators to publish content in many different forms (images, videos, live streams, music and NFTs). Creators can freely choose the fee for users to view their content. The platform will charge a minimal share of the earnings, up to 15% and as little as 5%. For customers, the LOF Platform is a place where they can view and purchase content from the most interesting content creators around the world at the most competitive prices. Anonymously if they choose to, depending on the payment format they choose!"
  );

  const FaqQusOne = () => {
    SetAnsText(
      " LOF Platform is a revolutionary fan platform that allows all types of content creators to publish content in many different forms (images, videos, live streams, music and NFTs). Creators can freely choose the fee for users to view their content. The platform will charge a minimal share of the earnings, up to 15% and as little as 5%. For customers, the LOF Platform is a place where they can view and purchase content from the most interesting content creators around the world at the most competitive prices. Anonymously if they choose to, depending on the payment format they choose!"
    );
  };
  const FaqQusTwo = () => {
    SetAnsText(
      " Becoming a creator is a very easy and fast process. It does not require any prior knowledge or skill! You just need to fill in a few details and be verified by the platform moderators before you can start releasing your content."
    );
  };
  const FaqQusThree = () => {
    SetAnsText(
      " The amount you earn is determined by your ability to grow a fan base, the amount of content you sell and the price you choose to sell it for. In full transparency, we cannot promise a minimum income. What we can promise however, is all the tools you need to be successful, connecting you with a great amount of potential new fans from our userbase and answer all your questions. We have a healthy community of content creators and an open atmosphere to cross promote and network with. By accepting our LOF cryptocurrency token as part of your payments, there is the potential for an exponential gain in value due to the ecosystems impact on the supply, as well as passive income generation. By holding LOF cryptocurrency tokens in your possession, you will automatically receive passive income sent to your wallet! Don’t worry, if this sounds confusing, we have videos to better explain it in our education center!"
    );
  };
  const FaqQusFour = () => {
    SetAnsText(
      "Everyone! All kinds of content creators are welcome and free to release content. The content must follow legal restrictions, but besides that LOF is 100% free of judgement."
    );
  };
  const FaqQusFive = () => {
    SetAnsText(
      " Becoming a creator is a very easy and fast process. It does not require any prior knowledge or skill! You just need to fill in a few details and be verified by the platformUsers can pay using a credit card or a crypto wallet. Acceptable cryptocurrencies are BUSD, BNB and of course our native LOF Token. Users who would like to privately purchase content will prefer to use cryptocurrency. If you’re not familiar with cryptocurrency or the process of using it, we have how-to videos in our education center! moderators before you can start releasing your content."
    );
  };
  const FaqQusSix = () => {
    SetAnsText(
      "Payouts will take place once per month for credit/debit card purchases. Crypto payments are practically instant and are not subject to chargebacks! If you’re not familiar with cryptocurrency or the process of using it, we have how-to videos in our Education Center!"
    );
  };

  return (
    <>
      <section className="">
        <div className=" text-white pt-28 lg:pt-32 w-full mbl-resp-plat">
          <div className="col text-center">
            <h1 className="monofont text-3xl md:text-5xl">
              FAQ For <span className="pink-color">Creators And Fans</span>
            </h1>
          </div>
        </div>

        <div className="container-fluid flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8  md:mb-0   ">
            <div className="">
              <button
                type="button"
                onClick={FaqQusOne}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                What is the LOF platform for?
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={FaqQusTwo}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                How long does it take to become a creator?
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={FaqQusThree}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                How much money will I earn with LOF?
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={FaqQusFour}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Who can create on the LOF platform?
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={FaqQusFive}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                What methods are used for payments?
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={FaqQusSix}
                className="rounded-md card-bg mt-2 md:mt-5 w-full md:w-[800px] px-4 py-4 font-semibold monofont pink-color text-xs md:text-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                How frequent are payouts to content creators?
              </button>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <div className="mt-2 ">
              <p className="text-sm hind text-white">{AnsText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
