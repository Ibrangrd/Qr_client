import React from "react";

const Album = ({link , imgsrc }) => {

    return (
        <div className="album">
            <div>
                <a href={link}>
                    <img
                        src={imgsrc}
                        alt="Our Album"
                    />
                </a>
            </div>
            <div className="bu">
                <a href={link}>
                    <button className="but">View Album</button>
                </a>
            </div>
        </div>
    );
}
export default Album;