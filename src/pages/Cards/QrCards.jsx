import React from "react";
import Card from "./Card";
import { QrCardsData } from "../data/QrCardsData";
const QrCards = () => {
  return (
    <>
      <div className="bg-[#e9ecef]">
          <div className="text-center">
            <p className="mt-4  sm:text-5xl text-4xl font-bold bg-gradient-to-r from-[#fcbf49] via-blue-500 to-[#f6bd60] inline-block text-transparent bg-clip-text">
              QR SPECIAL CARDS
            </p>
          </div>
          <div className=" flex flex-wrap text-center justify-center">
          {QrCardsData.map((val) => {
            return (
              <Card
                key={val.id}
                info={val}
              />
            );
          })}
          </div>
      </div>
    </>
  );
};
export default QrCards;
