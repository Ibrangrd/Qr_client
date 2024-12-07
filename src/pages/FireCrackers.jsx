import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { FireImage,FireData } from "./FireData";
import "aos/dist/aos.css";
const FireCrakers = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-[#f8edeb]">
        {
        FireImage.map((val,index) =>
        
        <div key={index} className="flex justify-evenly sm:p-4 pt-0 pb-0 pl-0 sm:gap-10 gap-2 bg-black">
          <div className="flex flex-col justify-center gap-10">
            <img className="bg-cover hidden sm:block sm:w-28 sm:h-28 rounded-3xl" src={val.img1} />
            <img className="bg-cover hidden sm:block  sm:w-28 sm:h-28 rounded-3xl" src={val.img2} />
            <img className="bg-cover hidden sm:block sm:w-28 sm:h-28 rounded-3xl" src={val.img3} />

          </div>
          <img
            className="bg-cover sm:w-[60%] w-[98%] sm:rounded-2xl" src={val.img}/>
             <div className="flex flex-col justify-center gap-10">
            <img className="bg-cover hidden sm:block sm:w-28 sm:h-28 rounded-3xl" src={val.img4} />
            <img className="bg-cover hidden sm:block sm:w-28 sm:h-28 rounded-3xl" src={val.img5} />
            <img className="bg-cover hidden sm:block sm:w-28 sm:h-28 rounded-3xl" src={val.img6} />
          </div>

        </div>
        )
        }
        

        <div className="w-full"><img className="w-full sm:h-8 h-4" src="https://i.ibb.co/wJbwS3h/ds.jpg" /></div>
        <div className="sm:mt-20 mt-4 text-center text-[#f08080] sm:p-0 text-2xl sm:text-5xl" > <p>ℂ𝕖𝕝𝕖𝕤𝕥𝕚𝕒𝕝 ℂ𝕖𝕝𝕖𝕓𝕣𝕒𝕥𝕚𝕠𝕟𝕤: ℙ𝕖𝕣𝕤𝕠𝕟𝕒𝕝𝕚𝕫𝕖𝕕 𝔽𝕚𝕣𝕖𝕨𝕠𝕣𝕜𝕤 𝕄𝕒𝕘𝕚𝕔! </p></div>
        <div className=" text-center text-[#f4978e] text-xl mt-1 sm:text-3xl"> <p>𝓔𝓷𝓬𝓱𝓪𝓷𝓽 𝔂𝓸𝓾𝓻 𝔀𝓮𝓭𝓭𝓲𝓷𝓰 𝓷𝓲𝓰𝓱𝓽. </p></div>
       
        <div className="flex flex-col sm:gap-0 gap-20 sm:flex-row p-1 sm:p-32">

        <div className=" flex flex-col sm:w-[50%] gap-2 text-balance text-center">
        <p className="text-black text-xl sm:-ml-96   font-bold" data-aos="zoom-out">Key Highlights</p>
        <p className="sm:text-3xl text-2xl sm:w-[70%] text-[#ff5d8f]" > Memorable Wedding Fireworks by QR Weds</p>
        <p className="text-black mt-2 sm:w-[70%]"> We offer tailored packages, selecting elements from your vision to create an unforgettable experience that marks the beginning of a beautiful journey.</p>
        <p className="font-semibold text-xl sm:text-left mt-2 hidden sm:block text-black ml-6" data-aos="zoom-in">Spectacular Fireworks Show</p>
        <p className="text-black w-[65%] ml-6 hidden sm:block mt-1">Dazzling, synchronized displays designed to awe guests and capture breathtaking moments. Perfect for every couple’s big day.</p>
        </div>


       <div className="flex flex-col sm:w-[50%] gap-10">  
       {
       FireData.map((val,index) =>
       <div key={index} className="bg-[#f2cfc4] flex rounded-lg sm:gap-10 gap-2" data-aos="fade-down">
       <img className="mt-[5%] sm:mt-0 w-20 h-20 sm:ml-[4%] pt-4" src={val.image} />                                                                                                                             
       <div className="flex flex-col">
       <p className=" text-[#1282a2] text-xl sm:text-2xl font-bold pt-2">{val.title}</p>
       <p className="text-left text-[15px] sm:font-semibold text-black pb-2">{val.description}</p>
       </div>
       </div>
       )
       }
       </div>

      </div>



      </div>
    </>
  );
};
export default FireCrakers; 