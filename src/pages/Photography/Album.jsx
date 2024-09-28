import React from "react";

const Album = ({link , imgsrc }) => {

    return (
        <div className="album2">
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