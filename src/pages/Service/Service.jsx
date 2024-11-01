import React from "react";
import "./service.css";
import ServiceList from "./ServiceList";
import { Servicelist } from "../data/Servicelist";
import { ServiceTop } from "../../utils";
const Service = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#984E4E] to-[#4646A4]">
        <div className="text-center text-5xl font-bold"> OUR SERVICES</div>
         
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
