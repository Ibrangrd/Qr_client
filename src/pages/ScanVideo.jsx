import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Scan.css";
import { scanVideoData } from "./data/scanVideoData";
import Error from "./Error";

const ScanVideo = () => {
  const { inviteId } = useParams();
  const data = scanVideoData.find((data) => data.id === inviteId);

  if(data === undefined){
    return <Error />
  }
  return (
    <>
      <div className="scanbg">
        <div className="f1">
          <div className="flower"></div>
          <div className="invitation"></div>
        </div>
        <div className="f2">
          <div className="weds">
            <h1 className="couple1">{data?.couple1}</h1>
            <img
              className="love"
              src={data?.love}
            />
            <h1 className="couple2">{data?.couple2}</h1>
          </div>
          <div className="scanvi">
            <iframe
              width="600"
              height="350"
              src={data?.iframe}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="location"> Venue Location </div>
          <div className="lobut">
            <a href="https://maps.app.goo.gl/nUAZkBhQmt7M2n7SA" target="_blank">
              <button> Click Here </button>
            </a>
          </div>
        </div>
        <div className="f3">
          <div className="fromcon">
            <div className="from">
              <p>FROM:</p>
            </div>
            <div className="nameparent">
              <p>{ data?.nameparent} </p>
            </div>
            <div className="shop">
              <p>{ data?.shop}</p>
            </div>
            <div className="address">
              <p>{ data?.address}</p>
            </div>
            <div className="mno">
              <p>{data?.mno}</p>
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

export default ScanVideo;
