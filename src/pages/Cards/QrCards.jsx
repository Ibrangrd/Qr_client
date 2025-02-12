import React from "react";
import { NewQrCardsData } from "../../data/NewQrCardsData";
import QrSection from "./QrSection";
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
      <div className="flex justify-around pb-10 pt-10">
    <a href="tel:+919832704206" target="_blank">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            📞 Call Now
        </button>
    </a>
    
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            💬 Chat with Us
        </button>
    </a>
</div>
    </div>
    </>
  );
};

export default QrCards;
