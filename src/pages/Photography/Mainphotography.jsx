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
                <Link to={props.Link}>
                 <Button className="w-52 pb-10 h-12 hover:bg-blue-100 hover:text-red-700" variant="outlined">VIEW</Button>
                 </Link> 
                 </Tooltip>
                </div>
            </div>
            
    );
}
export default Videography;
