import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react"


const Scan2 = () => {
  
  const designs = [
    {
      bgImage: "https://i.ibb.co/WHkQw5G/1.jpg",
      videoStyle: { width: "450px", height: "350px" },
      position: "ml-[21%] mt-[7%]",
    },
    {
      bgImage: "https://i.ibb.co/YDpdvzn/2.jpg",
      videoStyle: { width: "500px", height: "380px" },
      position: "ml-[19%] mt-[6%]",
    },
    {
      bgImage: "https://i.ibb.co/zShTDF0/3.jpg",
      videoStyle: { width: "500px", height: "380px" },
      position: "ml-[20%] mt-[6%]",
    },
      {
         bgImage: "https://i.ibb.co/MRKDK6W/4.jpg",
        videoStyle: { width: "500px", height: "350px" } ,
        position:"ml-[21%] mt-[7%]"
      },
      {
         bgImage: "https://i.ibb.co/GVpznPR/5.jpg",
        videoStyle: { width: "480px", height: "380px" } ,
        position:"ml-[21%] mt-[7%]"
      },
      {
         bgImage: "https://i.ibb.co/8KsMG3d/6.jpg",
        videoStyle: { width: "460px", height: "340px" } ,
        position:"ml-[21%] mt-[7%]"
      },
      {
         bgImage: "https://i.ibb.co/ZdLygNL/7.jpg",
        videoStyle: { width: "490px", height: "400px" } ,
        position:"ml-[19%] mt-[5%]"
      },
      {
         bgImage: "https://i.ibb.co/nkd4xSD/8.jpg",
        videoStyle: { width: "520px", height: "400px" } ,
        position:"ml-[18%] mt-[4%]"
      },
      {
         bgImage: "https://i.ibb.co/nwV6p7t/9.jpg",
        videoStyle: { width: "510px", height: "350px" } ,
        position:"ml-[19%] mt-[7%]"
      },
      {
         bgImage: "https://i.ibb.co/rZZS0b5/10.jpg",
        videoStyle: { width: "480px", height: "380px" } ,
        position:"ml-[20%] mt-[6%]"
      },
      {
         bgImage: "https://i.ibb.co/GQ31RGF/11.jpg",
        videoStyle: { width: "550px", height: "380px" } ,
        position:"ml-[18%] mt-[5%]"
      },
      {
         bgImage: "https://i.ibb.co/rfM0XcC/12.jpg",
        videoStyle: { width: "550px", height: "380px" } ,
        position:"ml-[18%] mt-[4%]"
      },
      {
         bgImage: "https://i.ibb.co/Tv3kv4S/13.jpg",
        videoStyle: { width: "500px", height: "350px" } ,
        position:"ml-[19%] mt-[6%]"
      },
      {
         bgImage: "https://i.ibb.co/s6dLXT9/14.jpg",
        videoStyle: { width: "610px", height: "410px" } ,
        position:"ml-[16%] mt-[5%]"
      },
    

  ];

  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

  const handleNext = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  const handlePrevious = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex - 1 + designs.length) % designs.length);
  };

  const { bgImage, videoStyle , position } = designs[currentDesignIndex];



  return (
    <>
      <div class="h-screen w-full">
        <div className="h-screen w-full bg-contain bg-center"style={{ backgroundImage: `url(${bgImage})` }} >

          <div className=" flex flex-col">

            <div className=" flex ml-[40%] gap-5 ">
              <h1 className=" text-3xl font-bold mt-[40px] italic animate-change-color">ARYAN   </h1>
              <img className=" w-20 h-20 mt-5 animate-heart-size" src="https://i.postimg.cc/0QNBbMSM/testimage.png"/>
              <h1 className=" text-3xl font-bold poppins mt-[40px] italic animate-change-color"> PAYAL  </h1>
            </div>

          <div className=" flex"> 
         <div className="mt-[15%] ml-[10%]">  <button onClick={handlePrevious}><img className="w-16 bg-red-900 rounded-lg " src="https://iili.io/2BGzBxj.png" /> </button></div>
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
        <div className="mt-[15%] ml-[20%]"> <button onClick={handleNext}> <img className="w-16 bg-red-900 rounded-lg" src="https://cdn-icons-png.flaticon.com/512/7604/7604747.png" /></button> </div>

        </div>
        <div className="flex justify-center gap-16 ml-[25%] mt-10">
            <div className="">
              <div className="text-[25px] font-semibold  text-white text-center"> Venue Location </div>
              <div className="ml-[45%]">
                <a
                  href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                  target="_blank"
                >
                  <img className="w-10 h-10" src="https://iili.io/dL52914.png" />
                </a>
              </div>
            </div>

            <div className=" w-[50%]">
              <p className=" font-bold text-black text-[20px]">
                Moments After Marriage
              </p>
              <div className="text-xl font-extrabold text-white text-center -ml-[60%]">
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
export default Scan2;
