import React from "react";
import { AllData } from "../data/CateringMainData";
import NewCatering from "./NewCatering";
import { Cateringdata } from "../data/Cateringdata";
import { CateringMainData } from "../data/CateringMainData";

const Catering2 = () => {
  // console.log("All Data " + AllData);

  return (
    <>
    <div className="bg-white">
    <h1 className="text-center sm:text-6xl text-3xl font-bold mb-10 text-[#a7c957] text-shadow-light pt-4"> OUR MENU </h1>
      {AllData.map((val) => {
        {
          {/* console.log("All Data " + val.ItemName); */}
        }
        return (
          <NewCatering
            key={val.id}
            ItemName={val.ItemName}
            ItemData={val.ItemData}
          />
        );
      })}
    </div>
    </>
  );
};

export default Catering2;
