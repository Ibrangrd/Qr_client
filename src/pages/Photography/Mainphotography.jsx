import React from "react";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const Videography = (props) =>{
    return (
        
            <div className="mai" data-aos="zoom-in-up">
                <a href={props.link}>
                    <img className="imga" src={props.imgsrc} alt="He" />
                </a>
                <div className="info">
                    <div className="na">{props.title}</div>
                    <div className="pr">{props.star}
                    {/* <div className="ra">{props.rating}</div> */}
                    </div>
                </div>
                <div className="par">{props.des}</div>
                <div className="bu">
                <Tooltip className="text-5xl" title="VIEW">
                <Link to={props.link}>
                <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">VIEW</button>
                 </Link> 
                 </Tooltip>
                </div>
            </div>
            
    );
}
export default Videography;
