import React from "react";
import { ParCardsData } from "../../utils";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const Cards = () => {
  return (
 <>  
 <div className="text-center bg-[#FCF7F8]">
       {/* <div className="flex flex-col"> */}
        <p className="mt-4 text-4xl sm:text-5xl font-bold text-[#457b9d] pt-2">
          WEDDING CARDS
        </p>
      <p className="mt-4 text-3xl font-bold text-black pb-16"> Our Partners
      </p>
      {/* </div> */}
     
      <div className="flex flex-col sm:flex-row justify-center pr-2 pl-2 sm:pr-10 sm:pl-10 h-auto gap-10 pb-16">
      {
      ParCardsData.map((val,index) =>
      <div key={index} className="flex flex-col w-[100%] sm:w-[30%] justify-center text-center text-box2 rounded-2xl bg-white gap-2 pt-4 pb-4">
      <img className="m-auto h-80  w-[90%] rounded-xl boxShadow" src={val.img} />
      <h1 className="text-3xl font-bold text-[#457b9d]">{val.shop}</h1>
      <p className="text-xl font-normal text-black">{val.dis}</p>
      <Tooltip className="text-5xl" title="CLICK">
      <Link to={val.link}>
      <Button className="w-52 pb-10 h-12 hover:bg-[#caf0f8] hover:text-red-700" variant="outlined">VIEW</Button>
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
export default Cards;

