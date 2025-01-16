import React from "react";
import { Suspense, lazy } from "react";
import Videography from "./Mainphotography";
import "./photo.css";
import VideoList from "../Videos/VideoList";
import Album from "./Album";
import { albumData } from "../data/albumdata";
import { videosample } from "../data/VideoSample";
import { Images1 } from "../data/Images1";
import { Images2 } from "../data/Images2";
import { video12 } from "../data/Video12";
import "aos/dist/aos.css";
const Slider = lazy(() => import("./slider"));
const Photography = () => {

    return (
      <>
      <div className="bg-gradient-to-b bg-[#dbecef]">
    <div className="text-center"><h1 className="text-center text-4xl sm:text-6xl text-[#0077b6] font-bold pt-6">PHOTOGRAPHY</h1></div>
    <div className="space"></div>
    <div className="con"  >
      {video12.map((value) => {
        return (
          < Videography
            key={value.id}
            imgsrc={value.path}
            title={value.title}
            star={value.star}
            rating={value.rating}
            des={value.des}
            link={value.link}
          />
        );
      })}
      <h1 className="head"> SAMPLE'S </h1>
         <Suspense fallback={<div>Loading Images...</div>}>
            <Slider images={Images1} />
            <Slider images={Images2} />
          </Suspense>
    </div>
    {/* <h1 className="mt-[-30px] text-center text-[40px] sm:text-[70px] text-[#a53860] font-serif font-extrabold mb-[10px]">ALBUM </h1>
    <div className="albums2">
      {
        albumData.map((va) =>
        {
          return(
          < Album 
          key ={va.id}
          link={va.link}
          imgsrc={va.imgsrc}
           />
          )
        })}
    </div> */}
    <div className="p-2 bg-inherit ">
      <div className="bg-inherit">
        <div className="text-center">
          <p className="mt-4 text-5xl font-bold text-blue-500">
            VIDEOS
          </p>
        </div>
        <div>
          <VideoList videoDetails={videosample} />
        </div>
      </div>
    </div>
    </div>
    </>
    );
};
export default Photography;
