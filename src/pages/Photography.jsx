import React from "react";
import Videography from "./Mainphotography";
import Slider from "./slider";
import "./photo.css";
import VideoList from "./Videos/VideoList";
import Album from "./Album";
import { Images1, Images2, albumData, video12, videosample} from "../utils";

const Photography = () => {

    return (
      <>
      <div className="bg-gradient-to-b from-[#fffffc] via-[#e0b1cb] to-[#f5f9e9]">
    <h1 className="head">PHOTOGRAPHY</h1>
    <div className="space"></div>
    <div className="con">
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
     
      <Slider images={Images1} />
      <Slider images={Images2} />
    </div>
    <h1 className="he">ALBUM </h1>
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
    </div>
    <div className="p-2 bg-inherit ">
      <div className="bg-inherit">
        <div className="text-center">
          <p className="mt-4 text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text">
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
