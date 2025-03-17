import React from "react";
import { NewQrCardsData } from "../../data/NewQrCardsData";
import QrSection from "./QrSection";
import Tooltip from '@mui/material/Tooltip';
const QrCards = () => {
  // console.log("All Data " + AllData);

  return (
    <>
    <div className="bg-[#FCF7F8]">
    <h1 className="text-center sm:text-5xl text-4xl font-bold mb-10 text-[#4E8098] text-shadow-light pt-4"> OUR CARDS </h1>
    <div className="space-y-4 max-w-2xl mx-auto px-4 pb-10">
   <ul className="list-none list-inside space-y-2">
    <li className="sm:text-xl text-lg text-[#4E8098] bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      🎉 <strong>20% off</strong> for prebooking 1.5 months earlier!
    </li>
    
    <li className="sm:text-xl text-lg text-[#4E8098] bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      🛍️ Get <strong>20 carry bags free</strong> with the QRWeds card!
    </li>
    
    <li className="sm:text-xl text-lg text-[#4E8098] bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      🎥 Get a <strong>custom E-invitation video</strong> with the QRWeds card!
    </li>
  </ul>
</div>
      {NewQrCardsData.map((val) => {

        return (
          <QrSection
            key={val.id}
            CardName={val.CardName}
            CardData={val.CardData}
            CardPrice={val.CardPrice}
          />
        );
      })}
       
    <div className="fixed sm:bottom-5 bottom-2 right-3 sm:right-10 flex ">
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-5 py-2 sm:px-8 sm:py-3 font-semibold bg-pink-200  border-pink-500 border-2 text-black rounded-full shadow-lg">
            💬 Chat
        </button>
    </a>
</div>
      <div className="flex justify-center">
      <Tooltip className="text-5xl" title="Book Now">
          <a href="https://wa.me/919832704206?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20Cards." target="_blank">
          <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
              Book Now
              </button>
          </a>
        </Tooltip>
        </div>
      <div className="flex justify-around pb-10 pt-10">
    <a href="tel:+919832704206" target="_blank">
        <button className="px-6 py-3 font-semibold bg-pink-200 border-pink-500 border-2 text-black rounded-full shadow-lg">
            📞Call Now
        </button>
    </a>
</div>
    </div>
    </>
  );
};

export default QrCards;
