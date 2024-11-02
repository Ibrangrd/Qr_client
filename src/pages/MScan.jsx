import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Mscan = () => {
  const designs = [
    {
      bgImage: "https://i.ibb.co/HHgF694/freepik.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: " h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/4SX0TZt/freepik.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: " h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/rZpFt73/z17.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/dcnLC60/z16.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/MSZQ7GF/z15.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/kXJfDhz/z14.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/v16kfqc/z10.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/9wZx3Jj/z11.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/82nWpR6/z12.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/1K40wJ3/z13.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/0r7SCNd/z3.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/pw7jYbL/z9.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/dKRg2Kt/z8.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/rxMqpZ8/z7.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/2gnsQQs/z2.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/qNDgQnZ/z4.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/VVYv7ds/z5.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/vcxykxq/z6.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
    {
      bgImage: "https://i.ibb.co/KLwvK3L/z1.jpg",
      videoStyle: { width: "85%", height: "220px" },
      position: "mt-[28%] ml-[5%]",
      he: "h-auto w-auto bg-cover bg-no-repeat",
    },
  ];

  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

  const handleNext = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  const handlePrevious = () => {
    setCurrentDesignIndex(
      (prevIndex) => (prevIndex - 1 + designs.length) % designs.length
    );
  };

  const { bgImage, videoStyle, position, he } = designs[currentDesignIndex];

  return (
    <>
      <div className="">
        <div className={he} style={{ backgroundImage: `url(${bgImage})` }}>
          <div className=" flex flex-col">
            <div className=" flex ml-[20%] gap-5">
              <h1 className=" text-2xl font-bold mt-[60px] italic animate-change-color">
                RAM
              </h1>
              <img
                className=" w-20 h-20 mt-10 animate-heart-size"
                src="https://i.postimg.cc/0QNBbMSM/testimage.png"
              />
              <h1 className=" text-2xl font-bold poppins mt-[60px] italic animate-change-color">
                SITA
              </h1>
            </div>

            <div className="flex flex-col text-center ml-[42%] pt-4 gap-0">
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
              <div className="w-12 h-8">
                <img
                  src="https://i.ibb.co/NjzsPSh/Sankh.png"
                  onClick={() => {
                  document.getElementById("audio").src = "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                    }}
                 alt="Sound"
                  />
              </div>

              <div className="w-5 h-5 ml-[18px] -mt-2">
                <img
                  src="https://i.ibb.co/SX7Vtfg/Sound.png"
                  onClick={() => { document.getElementById("audio").src= "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                  }}
                  alt="Sound"
                />
              </div>
            </div>

            <div className={position}>
              <iframe
                className="border-double border-[#00afb9] border-8"
                style={videoStyle}
                src="https://www.youtube.com/embed/JN8jhTjEckE?autoplay=1&si=jx_4fd0vRaeFIHox"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex ml-[12%] mt-4 gap-[70%] ">
              <div className="">
                {" "}
                <button onClick={handlePrevious}>
                  <img
                    className="w-6 bg-red-900 rounded-lg "
                    src="https://iili.io/2BGzBxj.png"
                  />{" "}
                </button>
              </div>
              <div className="">
                {" "}
                <button onClick={handleNext}>
                  {" "}
                  <img
                    className="w-6 bg-red-900 rounded-lg"
                    src="https://cdn-icons-png.flaticon.com/512/7604/7604747.png"
                  />
                </button>{" "}
              </div>
            </div>
            <div className="flex justify-center gap-14 ml-[8%] mb-[14%]">
              <div className="">
                <div className="text-[15px] font-bold  text-[#4a7c59] text-center">
                  {" "}
                  Venue Location{" "}
                </div>
                <div className="ml-[35%]">
                  <a
                    href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                    target="_blank"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://iili.io/dL52914.png"
                    />
                  </a>
                </div>
              </div>

              <div className=" w-[50%]">
                <p className=" font-bold text-[#3a0ca3] text-[15px]">
                  After Marriage
                </p>
                <div className="text-xl font-extrabold text-pink-900 text-center -ml-[60%]">
                  <Link to="/Memories">
                    <button> View </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mscan;
