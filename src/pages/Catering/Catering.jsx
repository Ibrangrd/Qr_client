import React from "react";
import { AllData } from "../../data/CateringMainData";
import NewCatering from "./NewCatering";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const Catering = () => {
  // console.log("All Data " + AllData);

  return (
    <>
    <div className="bg-[#FCF7F8]">
    <h1 className="text-center sm:text-6xl text-5xl font-bold mb-10 text-[#4E8098] text-shadow-light pt-4"> OUR MENU </h1>
      {AllData.map((val) => {
        {
          {/* console.log("All Data " + val.ItemName); */}
        }
        return (
          <NewCatering
            key={val.id}
            ItemName={val.ItemName}
            ItemData={val.ItemData}
            Display={val.Display}
          />
        );
      })}

  <Tooltip className="text-5xl flex justify-center pt-5 sm:pt-10 pb-3 sm:pb-6" title="CLICK">
 <Link to="/yourmenu">
 <Button className="w-52 flex justify-center pb-10 h-12 hover:bg-[#caf0f8] hover:text-red-700 text-box6" variant="outlined">View Your Menu</Button>
 </Link> 
 </Tooltip>
    </div>
    </>
  );
};

export default Catering;
