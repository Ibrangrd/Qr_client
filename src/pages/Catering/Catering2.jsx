import React from "react";
import { AllData } from "../data/CateringMainData";
import NewCatering from "./NewCatering";
import { Cateringdata } from "../data/Cateringdata";
import { CateringMainData } from "../data/CateringMainData";

const Catering2 = () => {
  // console.log("All Data " + AllData);

  return (
    <>
      <h1> our menu </h1>
      {AllData.map((val) => {
        {
          console.log("All Data " + val.ItemName);
        }
        return (
          <NewCatering
            key={val.id}
            ItemName={val.ItemName}
            ItemData={val.ItemData}
          />
        );
      })}
    </>
  );
};

export default Catering2;
