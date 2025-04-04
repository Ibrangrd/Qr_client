import React from "react";
import { ParCardsData } from "../../utils";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const CardsPartners = () => {
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
      <div key={index} className="flex flex-col w-[100%]  sm:w-[30%] justify-center text-center text-box2 rounded-2xl bg-white sm:gap-2 gap-1 pt-4 pb-4">
      <img className="m-auto sm:h-80 h-72 w-[90%] rounded-xl boxShadow" src={val.img} />
      <h1 className="sm:text-3xl text-2xl font-semi-bold text-[#457b9d]">{val.shop}</h1>
      <p className="sm:text-xl text-[16px] font-normal text-black">{val.dis}</p>
      <Tooltip className="text-5xl" title="CLICK">
      <Link to={val.link}>
      <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">VIEW</button>
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
export default CardsPartners;

