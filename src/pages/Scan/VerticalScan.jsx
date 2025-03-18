import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router";
// import Error from "../Error";
// import { verticalData } from "./Data";

const VerticalScan = () => {
  // const { inviteId } = useParams();
  // const data = verticalData.find((data) => data.id === inviteId);

  // if (data === undefined) {
  //   return <Error />;
  // }
  return (
    <>
      <div className="">
      <div className=" h-auto w-auto bg-cover bg-no-repeat " style={{ backgroundImage: `url("https://i.ibb.co/HHgF694/freepik.jpg")` }}>
          <div className=" flex flex-col">
          <div className="items-center flex justify-center pt-[70px]">
            <img className="w-[60%] h-44 mb-0 pb-0" src="https://i.ibb.co/Gvth9DVQ/s2-removebg-preview.png"/>
          </div>
            <div className=" flex justify-center text-center gap-0 -mt-8">
              <h1 className=" text-[25px] sm:text-[35px] font-extrabold text-[#5f0f40]">
              राजनन्दनी
              </h1>
              <img
                className=" w-20 h-20 -mt-6 animate-heart-size"
                src="https://i.ibb.co/sdTDhp7D/h.png"
              />
              <h1 className=" text-[25px] sm:text-[35px] font-bold text-[#5f0f40]">
              अभिनव 
              </h1>
            </div>
            {/* <div className="mt-[28%] ml-[6%] sm:flex sm:justify-center sm:items-center sm:mt-[10%]">
              <iframe
                className="border-double border-[#C2A5A1] border-8 w-[85%] h-[280px] sm:w-[50%] sm:h-[500px]"
                // style="w-[85%] h-[220px]"
                src="https://vimeo.com/1064439735/a251396d4d?ts=0&share=copy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              
            </div> */}
            <div className=" ml-[6%] sm:flex sm:justify-center sm:items-center sm:mt-[10%]">
            <iframe src="https://player.vimeo.com/video/1066841350?h=a1fde0b1d7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
            className="border-double border-[#C2A5A1] border-8 w-[85%] h-[280px] sm:w-[50%] sm:h-[500px]"
            title=".">

            </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            <div className="pt-1 pb-8 flex justify-center gap-14 mb-[14%] sm:mb-0 sm:mt-[7%] sm:gap-60 sm:ml-[30%]">
              <div className="">
                <div className="text-[15px] font-bold  text-green-800 text-center">
                <a
                    href="https://maps.app.goo.gl/aU523jurYw5ZsYxJ6"
                    target="_blank"
                  >
                  Wedding Venue
                  </a>
                </div>
                <div className="ml-[12%]">
                  <a
                    href="https://maps.app.goo.gl/S2SHZcypcHbMHS86A"
                    target="_blank"
                  >
                    <img
                      className="w-16 h-16"
                      src="https://i.ibb.co/27mz9vpK/Whats-App-Image-2025-03-11-at-00-37-42-db78e4e4-removebg-preview.png"
                    />
                  </a>
                </div>
              </div>
              <div className="">
                <div className="text-[15px] font-bold text-green-800 text-center">
                  {" "}
                  <a
                    href="https://maps.app.goo.gl/S2SHZcypcHbMHS86A"
                    target="_blank"
                  >
                  Residence{" "}
                  </a>
                </div>
                <div className="ml-[4%]">
                  <a
                    href="https://maps.app.goo.gl/aU523jurYw5ZsYxJ6"
                    target="_blank"
                  >
                    <img
                      className="w-16 h-16"
                      src="https://i.ibb.co/27mz9vpK/Whats-App-Image-2025-03-11-at-00-37-42-db78e4e4-removebg-preview.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerticalScan;
