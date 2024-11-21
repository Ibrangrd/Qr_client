import React from "react";
import "./service.css";
import ServiceList from "./ServiceList";
import { Servicelist } from "../data/Servicelist";
import { ServiceTop } from "../../utils";
const Service = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#debdd1] to-[#5a5aa7]">
        <div className="text-center" > <p className="text-center text-4xl sm:text-5xl font-bold pt-6 bg-gradient-to-r from-[#ff0a54] via-[#00b4d8] to-[#ff0a54] inline-block text-transparent bg-clip-text"> OUR SERVICES </p></div>
         
         {/* <div className="flex" >
         {ServiceTop.map((service) => (
          <ServiceTop 
            key={service.id}
            link={service.link}
            img={service.img}
            name={service.name}
          />
        ))}
          </div> */}
        <div>
          <h2 className="what"> What we have:- </h2>
        </div>
        <div className="mmm">
          {Servicelist.map((val) => {
            return (
              <ServiceList
                key={val.id}
                imgsrc={val.imgsrc}
                heading={val.heading}
                des={val.des}
                Link={val.Link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
