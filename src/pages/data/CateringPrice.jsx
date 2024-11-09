import React, { useState } from "react";

const CateringPrice = ({ Item,price,img1, It1,img2, It2,img3, It3, he, onSelect }) => {
  // const handleSelect = (selectedPrice) => {
  //   onSelect(itemId, selectedPrice);
  // };

  return (
    <div className="flex flex-col bg-[#ffff] gap-7 rounded-2xl w-72 h-80 min-h-80 " >
      <div className="flex flex-col">
        <p className="text-center text-2xl text-[#73ba9b]">{Item}</p>
        <p className="text-center text-xs font-semibold text-black">₹{price} each</p>
      </div>
      <div className="flex flex-col gap-7 justify-center ml-4">
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img1} alt="Item1" />
          <p>{It1}</p>
          <input type="checkbox" name={Item} value="paneer1" className="square-radio"/>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img2} alt="Item2" />
          <p>{It2}</p>
          <input type="checkbox" name={Item} value="paneer1" className="square-radio"/>
        </div>
        <div className={he}>
          <img className="w-14 h-14 rounded-xl" src={img3} alt="Item1" />
          <p>{It3}</p>
          <input type="checkbox" name={Item} value="paneer1" className="square-radio"/>
        </div>
      </div>
    </div>
  );
};

export default CateringPrice;