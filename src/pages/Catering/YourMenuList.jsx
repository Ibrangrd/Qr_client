import React from "react";

const YourMenuList = ({ itemName, image, discription }) => {
  return (
    <>
      <div className="bg-[#FCF7F8]">
        {/* <div className="flex"> */}
        <div className="flex sm:ml-[510px] ml-[10px] sm:pb-4 pb-2 sm:text-xl text-[14px]">
          <p className="text-black w-28 sm:w-44">{itemName}</p>
            <p className="sm:ml-[230px] ml-[40px] text-black w-44 sm:w-80">{discription}</p>
        </div>
      </div>
    </>
  );
};
export default YourMenuList;
