import React from "react";
import { menuData } from "../../data/CateringMenu";
import YourMenuList from "./YourMenuList";
const YourMenu = () => {
  return (
    <>
      <div className="bg-[#FCF7F8]">
        <div className="sm:text-6xl text-4xl text-center text-[#4E8098] font-bold pt-4 sm:p-4 pb-4">
          VEG MENU
        </div>
        <div>
          <div className="flex sm:ml-[510px] ml-[10px] sm:gap-80 gap-20 text-black font-bold text-2xl sm:text-3xl underline pb-4">
            <p className=""> ITEMS</p>
            <p className="">DISCRIPTION</p>
          </div>
          {menuData.map((val) => {
            return (
              <YourMenuList
                key={val.id}
                itemName={val.itemName}
                image={val.image}
                discription={val.description}
              />
            );
          })}
        </div>
        <div className="pb-10"></div>
      </div>
    </>
  );
};
export default YourMenu;
