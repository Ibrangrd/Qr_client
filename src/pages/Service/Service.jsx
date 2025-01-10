import React from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Service2List } from "../data/Servicelist";
const Service = () =>{
return (
    <>
    <div className="text-center bg-[#ffff]">
       {/* <div className="flex flex-col"> */}
        <p className="mt-4 text-4xl sm:text-5xl pb-10 font-bold pt-4 text-[#00b4d8] text-shadow-ib5">
        OUR SERVICES
        </p>
      {/* </div> */}
     
      <div className="flex flex-col flex-wrap sm:flex-row justify-center p-2 sm:p-10 h-auto gap-10 pb-16 ">
      {
      Service2List.map((val,index) =>
      <div key={index} className="mb-10 flex flex-col w-[100%] sm:w-[30%] h-[450px] justify-center text-center text-image rounded-2xl bg-[#ffff] gap-4 pt-4 pb-4 ">
      <img className="m-auto h-[70%] w-[90%] rounded-xl boxShadow text-box11" src={val.imgsrc} />
      <h1 className="text-3xl pt-6 font-bold text-[#4f772d]">{val.heading}</h1>
      <Tooltip className="text-5xl" title="VIEW">
      <Link to={val.Link}>
      <Button className="w-52 pb-10 h-12 hover:bg-blue-100 hover:text-red-700" variant="outlined">VIEW</Button>
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