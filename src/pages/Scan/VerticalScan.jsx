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
            <div className=" flex justify-center text-center gap-3">
              <h1 className=" text-2xl  sm:text-[35px] font-bold mt-[60px] italic animate-change-color">
                Ayushmati
              </h1>
              <img
                className=" w-20 h-20 mt-10 animate-heart-size"
                src="https://i.postimg.cc/0QNBbMSM/testimage.png"
              />
              <h1 className=" text-2xl  sm:text-[35px] font-bold poppins mt-[60px] italic animate-change-color">
                Ayushman
              </h1>
            </div>
            <div className="mt-[28%] ml-[7%] sm:flex sm:flex sm:justify-center sm:items-center sm:mt-[10%]">
              <iframe
                className="border-double border-[#00afb9] border-8 w-[85%] h-[280px] sm:w-[50%] sm:h-[500px]"
                // style="w-[85%] h-[220px]"
                src="https://www.youtube.com/embed/JN8jhTjEckE?autoplay=1&si=jx_4fd0vRaeFIHox"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pt-16 flex justify-center gap-14 mb-[14%] sm:mb-0 sm:mt-[7%] sm:gap-60 sm:ml-[30%]">
              <div className="">
                <div className="text-[15px] font-bold  text-green-800 text-center">
                  {" "}
                  Wedding Venue{" "}
                </div>
                <div className="ml-[35%]">
                  <a
                    href="https://maps.app.goo.gl/S2SHZcypcHbMHS86A"
                    target="_blank"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://iili.io/dL52914.png"
                    />
                  </a>
                </div>
              </div>
              <div className="">
                <div className="text-[15px] font-bold text-green-800 text-center">
                  {" "}
                  Residence{" "}
                </div>
                <div className="ml-[35%]">
                  <a
                    href="https://maps.app.goo.gl/aU523jurYw5ZsYxJ6"
                    target="_blank"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://iili.io/dL52914.png"
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
