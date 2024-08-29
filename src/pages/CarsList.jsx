import React from "react";
import { Link } from 'react-router-dom';
const CarList = ({imgsrc ,title,star,rating,des,link}) => {
    return (
        <div className="ma11">
            <a href={link}>
                <img className="img11" src={imgsrc} alt="He" />
            </a>
            <div className="info111">
                <div className="name11">{title}</div>
                <div className="price11">{star}
                    <div className="rating11">{rating}</div>
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
            <div className="bu11">
                <Link to="/Contact">
                    <button className="but11">Contact us  </button>
                    </Link>
                </div>
        </div>
    );
};
export default CarList;