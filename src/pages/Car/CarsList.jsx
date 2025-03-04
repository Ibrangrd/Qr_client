import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const CarList = ({imgsrc ,title,star,des,link}) => {
    return (
        <div className="ma11">
            <a href={link}>
                <img className="img11" src={imgsrc} alt="He" />
            </a>
            <div className="info111">
                <div className="name11">{title}</div>
                <div className="price11">{star}
                    {/* <div className="rating11">{rating}</div> */}
                </div>
            </div>
            <div className="para11">
                <p className="r"> Base Price:-{des}</p>
                <p className="r"> Additional Charge:-₹300 per night</p>
                <p className="mil11"> Mileage Info :-</p>
                <div className="Mileage info11">
                    <div className="mm112">
                        <pre> Without Ac:-10Km</pre>
                        <pre> With Ac:-   8Km</pre>
                    </div>
                </div>
            </div>
            <div className="flex justify-center -translate-y-12">
          <Tooltip className="text-5xl" title="Book Now">
          <Link to="https://wa.me/919832704206?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20Car%20services." target="_blank">
          <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
          Book Now
          </button>
      </Link>
    </Tooltip>
  </div>
        </div>
    );
};
export default CarList;