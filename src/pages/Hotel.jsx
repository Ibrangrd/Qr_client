import React from "react";
import './hotel.css'
import HotelList from "./HotelList";
import { Hoteldet } from "../utils";
const Hotel = () => {
    return (
        <>
         <div className='text-center text-8xl font-bold'><h1> HOTELS</h1></div>
        <div className="hole">
        {Hoteldet.map((val) =>{
           return(
            <
           HotelList
           key={val.id}
           img1={val.img1}
           img2={val.img2}
           img3={val.img3}
           img4={val.img4}
           img5={val.img5}
           img6={val.img6}
           Hname={val.Hname}
           Hdes={val.Hdes}
           Rno={val.Rno}
           Sno={val.Sno}
           rate={val.rate}

           />
           );
            })}
           </div>
        </>
    );
};
export default Hotel;