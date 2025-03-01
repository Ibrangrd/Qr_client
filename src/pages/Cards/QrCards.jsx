import React from "react";
import { NewQrCardsData } from "../../data/NewQrCardsData";
import QrSection from "./QrSection";
import Tooltip from '@mui/material/Tooltip';
const QrCards = () => {
  // console.log("All Data " + AllData);

  return (
    <>
    <div className="bg-[#FCF7F8]">
    <h1 className="text-center sm:text-6xl text-5xl font-bold mb-10 text-[#4E8098] text-shadow-light pt-4"> OUR CARDS </h1>
      {NewQrCardsData.map((val) => {

        return (
          <QrSection
            key={val.id}
            CardName={val.CardName}
            CardData={val.CardData}
          />
        );
      })}
       
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
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-6 py-3 font-semibold bg-pink-200  border-pink-500 border-2 text-black rounded-full shadow-lg  transition">
            💬Chat With Us
        </button>
    </a>
</div>
    </div>
    </>
  );
};

export default QrCards;
