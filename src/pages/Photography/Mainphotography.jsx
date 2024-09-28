import React from "react";
import { Link } from 'react-router-dom';
const Videography = (props) =>{
    return (
        
            <div className="mai">
                <a href={props.link}>
                    <img className="imga" src={props.imgsrc} alt="He" />
                </a>
                <div className="info">
                    <div className="na">{props.title}</div>
                    <div className="pr">{props.star}
                        <div className="ra">{props.rating}</div>
                    </div>
                </div>
                <div className="par">{props.des}</div>
                <div className="bu">
                <Link to={props.link}>
                    <button className="but"> View </button>
                    </Link>
                </div>
            </div>
            
    );
}
export default Videography;
