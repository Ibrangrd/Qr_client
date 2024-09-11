import React from "react";
import { Link } from "react-router-dom";
import "./Scan.css";
const Scanvideo = () => {
  return (
    <>
      <div className="scanbg">
        <div className="f1">
          <div className="flower"></div>
          <div className="invitation"></div>
        </div>
        <div className="f2">
          <div className="weds">
            <h1 className="couple">ARYAN</h1>
            <img
              className="love"
              src="https://i.postimg.cc/0QNBbMSM/sdrehyerd.png'"
            />
            <h1 className="couple">PAYAL</h1>
          </div>
          <div className="scanvi">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/0y8-SnS6kzk?si=PtnCvAJA90zWvYBH&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="location"> Venue Location </div>
          <div className="lobut">
            {" "}
            <a href="https://maps.app.goo.gl/nUAZkBhQmt7M2n7SA" target="_blank">
              {" "}
              <button> Click Here </button>
            </a>{" "}
          </div>
        </div>
        <div className="f3">
          <div className="fromcon">
            <div className="from">
              {" "}
              <p>FROM:</p>
            </div>
            <div className="nameparent">
              {" "}
              <p>M/s. DEEPAK</p>
            </div>
            <div className="shop">
              <p>VIMAL SHOWROOM</p>
            </div>
            <div className="address">
              <p>Benachity Durgapur</p>
            </div>
            <div className="mno">
              {" "}
              <p>9508853398</p>
            </div>
          </div>
          <p className="aftermar">Moments After Marriage</p>
          <div className="bumar">
            <Link to="/Courier">
              <button className="butx"> View </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scanvideo;
