import React from "react";
import './hotel.css'
import VideoList from "./VideoList";
import HotelList from "./HotelList";
import { Hoteldet} from "../utils";
const Hotel = () => {
  return (
    <>
      <div className='text-center text-8xl font-bold'><h1> HOTELS</h1></div>
      <div className="hole">
        {Hoteldet.map((val) => (
         <div key={val.id} className="Hotel_c-ntainer">
          < HotelList
            key={val.id}
            img1={val.img1}
            img2={val.img2}
            img3={val.img3}
            img4={val.img4}
            img5={val.img5}
            img6={val.img6}
            Hname={val.Hname}
            Hdes={val.Hdes}
            Rno={val.Rno}
            Sno={val.Sno}
            rate={val.rate}
            />
            <div className="p-2 bg-inherit">
              <div className="bg-inherit">
                <div className="text-center">
                  <p className="mt-4 text-3xl md:text-4xl lg:text-5xl  font-bold bg-gradient-to-r from-pink-400 via-grey-500 to-green-400 inline-block text-transparent bg-clip-text">
                    HOTEL SAMPLE VIDEOS
                  </p>
                </div>
                <div>
                  {val.videos && val.videos.length > 0 && (
                    <VideoList videoDetails={val.videos} />
                  )}
                </div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </>
  );
};
export default Hotel;