import React from "react";
import { Link } from "react-router-dom";

const ServiceTop = ({link,img,name}) => {
  return (
    <div className="flex flex-col">
      <div>
        <a href={link}>
          <img className="rounded-full object-cover " src={img} alt="Servies" />
        </a>
      </div>
      <div className="">
        <a href={link}>
          <p className="text-xl text-center hover:underline hover:decoration-pink-600 hover:decoration-5 hover:text-gray-600 text-white">{name}</p>
        </a>
      </div>
    </div>
  );
};
export default ServiceTop;
