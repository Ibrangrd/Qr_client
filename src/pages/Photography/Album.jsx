import React from "react";
import "aos/dist/aos.css"
const Album = ({link , imgsrc }) => {

    return (
        <div className="album2" data-aos="flip-right">
            <div>
                <a href={link}>
                    <img
                        src={imgsrc}
                        alt="Our Album"
                    />
                </a>
            </div>
            <div className="albu">
                <a href={link}>
                    <button className="albut">View Album</button>
                </a>
            </div>
        </div>
    );
}
export default Album;