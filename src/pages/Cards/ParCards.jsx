import React from "react";
import { ParCardsData } from "../../utils";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const ParCards = () => {
  return (
 <>  
 <div className="text-center bg-[#FCF7F8]">
       {/* <div className="flex flex-col"> */}
        <p className="mt-4 text-4xl sm:text-5xl font-bold text-[#118ab2] text-shadow-ib2 pt-2">
          WEDDING CARDS
        </p>
      <p className="mt-4 text-3xl font-bold text-[#dda15e] pb-16"> Our Partners
      </p>
      {/* </div> */}
     
      <div className="flex flex-col sm:flex-row justify-center p-2 sm:p-10 h-auto gap-10 pb-16">
      {
      ParCardsData.map((val,index) =>
      <div key={index} className="flex flex-col w-[100%] sm:w-[30%] h-auto justify-center text-center text-box2 rounded-2xl bg-white gap-4 pt-4 pb-4">
      <img className="m-auto h-[70%] w-[90%] rounded-xl boxShadow text-image" src={val.img} />
      <h1 className="text-3xl pt-6 font-bold text-[#4f772d]">{val.shop}</h1>
      <p className="text-xl font-normal text-[#134074]">{val.dis}</p>
      <Tooltip className="text-5xl" title="CLICK">
      <Link to={val.link}>
      <Button className="w-52 pb-10 h-12 hover:bg-[#caf0f8] hover:text-red-700 text-box4" variant="outlined">VIEW</Button>
      </Link> 
      </Tooltip>
      </div> 
      )
      }
      </div>

     
     </div>
 </>
  )
}
export default ParCards;

