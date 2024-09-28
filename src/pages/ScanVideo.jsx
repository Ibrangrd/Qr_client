import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Scan.css";
import { scanVideoData } from "./data/scanVideoData";
import Error from "./Error";

const ScanVideo = () => {
  const { inviteId } = useParams();
  const data = scanVideoData.find((data) => data.id === inviteId);

  if (data === undefined) {
    return <Error />;
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
            <img className="love" src={data?.love} />
            <h1 className="couple2">{data?.couple2}</h1>
          </div>
          <div className="scanvi">
            <iframe
              width="600"
              height="350"
              src={`${data?.iframe}&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="location"> Venue Location </div>
              <div className=" ml-[10%] sm:ml-[45%]">
                <a
                  href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                  target="_blank"
                >
                  <img className="w-10 object-cover sm:w-10 md:w-10 sm:h-10 md:h-10" src="https://iili.io/dL52914.png" />
                </a>
              </div>
            </div>
            <div className="md:hidden mt-16 w-[50%] ">
              <p className="text-base ml-[25%] sm:ml-[0] md:ml[0] font-bold text-[#390099]">
                Moments After Marriage
              </p>
              <div className="text-xl font-extrabold text-[#ff1654] mt-2  ml-[35%] sd:text-center md:text-center">
                <Link to="/Memories">
                  <button> View </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="f3">
          <div className="fromcon">
            <div className="from">
              <p>FROM:</p>
            </div>
            <div className="nameparent">
              <p>{data?.nameparent} </p>
            </div>
            <div className="shop">
              <p>{data?.shop}</p>
            </div>
            <div className="address">
              <p>{data?.address}</p>
            </div>
            <div className="mno">
              <p>{data?.mno}</p>
            </div>
          </div>
          <p className="aftermar">Moments After Marriage</p>
          <div className="bumar">
            <Link to="/Memories">
              <button className="butx"> View </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanVideo;
