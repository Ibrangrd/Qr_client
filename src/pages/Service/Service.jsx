import React from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Service2List } from "../../data/Servicelist";
const Service = () =>{
return (
    <>
    <div className="text-center bg-[#FCF7F8]">
        <p className="mt-4 text-4xl sm:text-5xl pb-10 font-bold pt-4 text-[#457b9d]">
        OUR SERVICES
        </p>
     
      <div className="flex flex-row flex-wrap justify-center p-2 sm:p-10 h-auto gap-10 pb-16 ">
      {
      
      Service2List.map((val,index) =>
        <div className="sm:w-[30%] w-[90%] h-[300px] sm:h-[350px] flex flex-col justify-center p-4 sm:mb-10 mb-10 bg-white rounded-2xl mt-12 mx-1" data-aos="zoom-in-up" key={index}>
        <div className=""> <img className="sm:w-[90%] w-[98%] h-[250px] sm:h-[300px] object-cover rounded-3xl border-2 border-red-300 shadow-[2px_2px_15px_2px_#226f54] transition-all duration-800 ease-in-out hover:shadow-red-300 mx-auto -translate-y-12" src={val.imgsrc} alt="He" />
        </div>
          <div className="text-2xl text-center font-semibold text-black -translate-y-8">
            {val.heading}
          </div>
        <div className="flex justify-center -translate-y-9">
          <Tooltip className="text-5xl" title="Book Now">
            <Link to={val.Link} target="_blank">
            <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
                Book Now
                </button>
            </Link>
          </Tooltip>
        </div>
      </div>
      )
      }
      </div>

     
     </div>
    </>
)




}
export default Service;