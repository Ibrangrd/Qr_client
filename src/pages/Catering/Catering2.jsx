import React from "react";
import { AllData } from "../data/CateringMainData";
import NewCatering from "./NewCatering";
import { Cateringdata } from "../data/Cateringdata";
import { CateringMainData } from "../data/CateringMainData";

const Catering2 = () => {
  console.log("All Data " + AllData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <h1> our menu </h1>
      {AllData.map((val) => {
        {
          /* console.log("Val " + JSON.stringify(val)); */
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
