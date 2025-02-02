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

    </div>
    </>
  );
};

export default QrCards;
