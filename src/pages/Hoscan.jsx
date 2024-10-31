import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react"


const Hoscan = () => {
  
  const designs = [
      {
        bgImage: "https://i.ibb.co/ZfcmQtW/q1.jpg",
        videoStyle: { width:"300px", height: "230px" },
        position: "mt-[37%] mb-[3%] rotate-90",
      },
      {
        bgImage: "https://i.ibb.co/swSgmfJ/q2.jpg",
        videoStyle: { width:"300px", height: "230px" },
        position: "mt-[37%] mb-[3%] rotate-90",
      },
      {
        bgImage: "https://i.ibb.co/pKVwg9B/q3.jpg",
        videoStyle: { width:"300px", height: "230px" },
        position: "mt-[37%] mb-[3%] rotate-90",
      },
      {
        bgImage: "https://i.ibb.co/SRHFQD7/q4.jpg",
        videoStyle: { width:"300px", height: "230px" },
        position: "mt-[37%] mb-[3%] rotate-90",
      },
  ];

  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

  const handleNext = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  const handlePrevious = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex - 1 + designs.length) % designs.length);
  };

  const { bgImage, videoStyle , position ,} = designs[currentDesignIndex];



  return (
    <>
      <div class="">
        <div className="h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} >
           
           <div className="flex ml-[25%] pt-10  gap-[70%] "> 
        <div className="">  <button onClick={handlePrevious}><img className="w-6 bg-red-900 rounded-lg " src="https://iili.io/2BGzBxj.png" /> </button></div>
        <div className=""> <button onClick={handleNext}> <img className="w-6 bg-red-900 rounded-lg" src="https://cdn-icons-png.flaticon.com/512/7604/7604747.png" /></button> </div>
        </div>
          <div className=" flex">

            {/* <div className=" flex ml-[10%] gap-5 invisible">
              <h1 className=" text-2xl font-bold mt-[40px] italic animate-change-color">ARYAN   </h1>
              <img className=" w-20 h-20 mt-5 animate-heart-size" src="https://i.postimg.cc/0QNBbMSM/testimage.png"/>
              <h1 className=" text-2xl font-bold poppins mt-[40px] italic animate-change-color"> PAYAL  </h1>
            </div> */}



          
          
          <div className="flex justify-center mt-[12vh]"> 

          <div className="flex justify-center flex-col gap-6 mt-[35%]">
            <div className="">
              <div className="text-[15px] font-bold  text-[#3a0ca3] text-center rotate-90"> Venue Location </div>
              <div className="-ml-[50%] mt-[25%] rotate-90">
                <a
                  href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                  target="_blank"
                >
                  <img className="w-10 h-10" src="https://iili.io/dL52914.png" />
                </a>
              </div>
            </div>

            <div className="flex flex-col w-[50%] ml-[35%]">
            <Link to="/Memories">
              <p className=" font-bold text-[#4a7c59] text-[15px] rotate-90">
              <button> After Marriage </button>
              </p>
              </Link>
              {/* <div className="text-xl font-extrabold text-pink-900 text-center -ml-[60%] rotate-90">
                <Link to="/Memories">
                  <button> View </button>
                </Link>
              </div> */}
            </div>
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
        {/* <div className=" flex flex-col">
              <p className=" text-2xl font-bold mt-[120px] mr-0 ml-0 mb-[15px] italic animate-change-color rotate-90 ">ARYAN   </p>
             <div className="rotate-90"> <img className=" w-20 h-20 mt-5 -rotate-90 animate-heart-size " src="https://i.postimg.cc/0QNBbMSM/testimage.png"/> </div>
              <p className=" text-2xl font-bold poppins mr-0 ml-0 mt-[15px] italic animate-change-color rotate-90"> PAYAL  </p>
            </div> */}
        </div>

      



{/* 
        <div className="flex justify-center gap-14 ml-[8%] invisible">
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
          </div> */}
         
    
          </div>


        </div>
      {/* <audio controls autoplay loop >
      <source src="./public/Audio.mp3" type="audio/mp3"></source>
       </audio> */}
      </div>
    </>
  );
};
export default Hoscan;
