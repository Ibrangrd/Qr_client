import React from "react";
import { Link,useParams } from "react-router-dom";
import Error from "./Error";
const CusScan2 = (bgImage2, couple12,couple22,address2,position2,videoStyle2,video2) => {
  return (
    <>
    <div className="">
        <div className="h-auto w-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage2})` }}>
          <div className=" flex flex-row justify-center align-middle text-center items-center m-auto ">
        
          <div className="flex justify-center gap-10 ml-[10%] mb-[10%] sm:mb-10 sm:mt-[7%] sm:gap-60 sm:ml-[30%] ">
              <div className="">
                <div className="text-[16px] font-bold  text-black text-center rotate-90">
                  Venue Location{" "}
                </div>
                <div className="ml-[35%]">
                  <a
                    href={address2}
                    target="_blank"
                  >
                    <img
                      className="w-10 h-10 rotate-90"
                      src="https://iili.io/dL52914.png"
                    />
                  </a>
                </div>
              </div>

              <div className=" w-[50%]">
                <p className=" font-bold text-[#06d6a0] text-[16px] rotate-90">
                  After Marriage
                </p>
                <div className="text-xl font-extrabold text-pink-900 text-center -ml-[60%] sm:-ml-[75%] rotate-90 ">
                  <Link to="/Cusafter">
                    <button> View </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col text-center ml-[40%] pt-4 gap-0">
            <div className="hidden">
            <iframe
                id="audio"
                width="560"
                height="315"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
               </div>
              <div className="w-16 h-8 sm:ml-[95px]">
                <img
                  src="https://i.ibb.co/NjzsPSh/Sankh.png"
                  onClick={() => {
                  document.getElementById("audio").src = "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                    }}
                 alt="Sound"
                  />
              </div>

              <div className="w-5 h-5 ml-[28px] sm:ml-[125px] -mt-0">
                <img
                  src="https://i.ibb.co/SX7Vtfg/Sound.png"
                  onClick={() => { document.getElementById("audio").src= "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                  }}
                  alt="Sound"
                />
              </div>
            </div> */}

            <div className={position2}>
              <iframe
                className={videoStyle2}
                // style={data?.videoStyle}
                src={video2}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" flex justify-center gap-5">
              <h1 className=" text-2xl font-bold mt-[60px] sm:text-[35px] animate-change-color rotate-90">
                {couple12}
              </h1>
              <img
                className=" w-20 h-20 mt-10 animate-heart-size rotate-90"
                src="https://i.postimg.cc/0QNBbMSM/testimage.png"
              />
              <h1 className=" text-2xl sm:text-[35px] font-bold poppins mt-[60px] animate-change-color rotate-90">
                {couple22}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
     );
};

export default CusScan2;