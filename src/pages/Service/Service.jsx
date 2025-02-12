import React from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Service2List } from "../../data/Servicelist";
const Service = () =>{
return (
    <>
    <div className="text-center bg-[#FCF7F8]">
       {/* <div className="flex flex-col"> */}
        <p className="mt-4 text-4xl sm:text-5xl pb-10 font-bold pt-4 text-[#457b9d]">
        OUR SERVICES
        </p>
      {/* </div> */}
     
      <div className="flex flex-row flex-wrap justify-center p-2 sm:p-10 h-auto gap-10 pb-16 ">
      {
      Service2List.map((val,index) =>
      <div key={index} className="mb-10 flex flex-col w-[90%] sm:w-[30%] h-auto justify-center text-center shadow-xl rounded-2xl bg-[#ffff] gap-2 pt-4 pb-4 ">
      <img className="m-auto h-[70%] w-[90%] rounded-xl boxShadow " src={val.imgsrc} />
      <h1 className="text-3xl pt-2 font-bold text-[#4f772d]">{val.heading}</h1>
      <Tooltip className="text-5xl" title="VIEW">
      <Link to={val.Link}>
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
export default Service;