import React from "react";
import CarList from "./CarsList"
import "./car.css";
import { cardat } from "../../data/CarDetails";

const Cars =() =>{
    return(
    <>
    
  <div className="bo">
  <h1 className="f">OUR CAR'S</h1>
  <div className="space11"></div>
  <div className="container11">
  {cardat.map((value) =>{
    return (
       < CarList
       key={value.id}
       imgsrc={value.path}
       title={value.title}
       star={value.star}
       rating={value.rating}
       des={value.des}
       />
    );
  })}
  </div>
  </div>
  </>
    );
};
export default Cars;