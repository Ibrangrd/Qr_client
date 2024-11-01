import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react"


const Mscan = () => {
  
  const designs = [
      
      {
      bgImage: "https://i.ibb.co/HHgF694/freepik.jpg",
      videoStyle: { width: "80%", height: "240px", },
      position: "mt-[45%] ml-[8%]",
      he:" h-auto w-auto bg-cover bg-no-repeat"
      },
      {
          bgImage: "https://i.ibb.co/4SX0TZt/freepik.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
         he:" h-auto w-auto bg-cover bg-no-repeat"
      },
        {
          bgImage: "https://i.ibb.co/rZpFt73/z17.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/dcnLC60/z16.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/MSZQ7GF/z15.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/kXJfDhz/z14.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/v16kfqc/z10.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/9wZx3Jj/z11.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/82nWpR6/z12.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/1K40wJ3/z13.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/0r7SCNd/z3.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/pw7jYbL/z9.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/dKRg2Kt/z8.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/rxMqpZ8/z7.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/2gnsQQs/z2.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/qNDgQnZ/z4.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/VVYv7ds/z5.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/vcxykxq/z6.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        },
        {
          bgImage: "https://i.ibb.co/KLwvK3L/z1.jpg",
          videoStyle: { width: "80%", height: "240px" },
          position: "mt-[45%] ml-[8%]",
          he: "h-auto w-auto bg-cover bg-no-repeat"
        } 
  ];

  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

  const handleNext = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  const handlePrevious = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex - 1 + designs.length) % designs.length);
  };

  const { bgImage, videoStyle , position , he } = designs[currentDesignIndex];



  return (
    <>
      <div class="">
        <div className={he} style={{ backgroundImage: `url(${bgImage})` }} >

          <div className=" flex flex-col">

            <div className=" flex ml-[10%] gap-5">
              <h1 className=" text-2xl font-bold mt-[40px] italic animate-change-color">ARYAN   </h1>
              <img className=" w-20 h-20 mt-5 animate-heart-size" src="https://i.postimg.cc/0QNBbMSM/testimage.png"/>
              <h1 className=" text-2xl font-bold poppins mt-[40px] italic animate-change-color"> PAYAL  </h1>
            </div>
 
          <div className={position}>
           <iframe
            style={videoStyle}
             src="https://www.youtube.com/embed/JN8jhTjEckE?autoplay=1&si=jx_4fd0vRaeFIHox"
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
           ></iframe>
        </div>

        <div className="flex ml-[9%] mt-4 gap-[70%] "> 
        <div className="">  <button onClick={handlePrevious}><img className="w-6 bg-red-900 rounded-lg " src="https://iili.io/2BGzBxj.png" /> </button></div>
        <div className=""> <button onClick={handleNext}> <img className="w-6 bg-red-900 rounded-lg" src="https://cdn-icons-png.flaticon.com/512/7604/7604747.png" /></button> </div>
        </div>
        <div className="flex justify-center gap-14 ml-[8%]">
            <div className="">
              <div className="text-[15px] font-bold  text-[#e0fbfc] text-center"> Venue Location </div>
              <div className="ml-[35%]">
                <a
                  href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                  target="_blank"
                >
                  <img className="w-10 h-10" src="https://iili.io/dL52914.png" />
                </a>
              </div>
            </div>

            <div className=" w-[50%]">
              <p className=" font-bold text-[#ccff33] text-[15px]">
                Moments After Marriage
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
      {/* <audio controls autoplay loop >
      <source src="./public/Audio.mp3" type="audio/mp3"></source>
       </audio> */}
      </div>
    </>
  );
};
export default Mscan;
