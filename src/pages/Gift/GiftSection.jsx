import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import WhyChooseUs from './whychooseus';
import Service from './Service';
const GiftSection = () => {
  return (
    <div className="bg-white flex flex-col">
    <h1 className="text-center sm:text-6xl text-5xl font-bold mb-10 text-[#4E8098] text-shadow-light pt-4">QR Weds </h1>
    <div className="flex justify-center text-center mt-10">
          <div className=" pt-4 sm:p-4 -mt-24 sm:w-auto w-[33%]">
          <DotLottieReact
           src="https://lottie.host/1916a55e-5720-49c4-966e-cf35d4d0c6ff/qOOvgppEMt.lottie"
           loop
           autoplay
           />
          </div>
          <div className="sm:text-5xl -mt-14 sm:mt-0 text-3xl text-center text-pink-500 font-bold">
            GIFT UP
          </div>
          <div className=" pt-4 sm:p-4 -mt-24 sm:w-auto w-[33%]">
          <DotLottieReact
           src="https://lottie.host/1916a55e-5720-49c4-966e-cf35d4d0c6ff/qOOvgppEMt.lottie"
           loop
           autoplay
          />
          </div>
        </div>
    <div className="flex sm:flex-row  flex-col">
    <div className="sm:w-[50%]">
    <DotLottieReact
      className="bg-white"
      src="https://lottie.host/061ea13c-3884-40bb-95d4-ac76ae78289f/l9VUoFDfbh.lottie"
      loop
      autoplay
    />
    </div>
    <div className="mt-10 p-6 bg-white rounded-xl ">
        <h3 className="text-3xl font-bold text-[#4E8098] mb-5">
          What’s Inside Our Gift Section
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#FCF7F8] text-white rounded-full flex items-center justify-center mr-3">
              🎁
            </span>
            <p className="text-gray-700 text-xl">
              Handpicked wedding gifts that capture emotions and create lifelong memories.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#FCF7F8] text-white rounded-full flex items-center justify-center mr-3">
              💡
            </span>
            <p className="text-gray-700 text-xl">
              Innovative gifting with QR-enabled video invites, photo albums, and special messages.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-[#FCF7F8] text-white rounded-full flex items-center justify-center mr-3">
              💕
            </span>
            <p className="text-gray-700 text-xl">
              Perfect for weddings, engagements, anniversaries, and other heartfelt celebrations.
            </p>
          </li>
        </ul>
      </div>
    </div>


    <div className="sm:text-5xl text-4xl text-center text-[#4E8098] font-bold pb-6">
          EXPLORE GIFT
          </div>
    <div className="sm:text-5xl text-3xl text-center text-pink-400 font-bold pb-16">
    Make this wedding live forever with a QRWeds Gift.
    </div>
    <Service />
    <WhyChooseUs/>
    <div className="fixed sm:bottom-5 bottom-2 right-3 sm:right-10 flex ">
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-5 py-2 sm:px-8 sm:py-3 font-semibold bg-pink-200  border-pink-500 border-2 text-black rounded-full shadow-lg">
            💬 Chat
        </button>
    </a>
</div>
    </div>

    
  );
};
export default GiftSection;
