import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FireCrakers = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-[#f8edeb]">
        <div className="flex justify-evenly p-4 pt-0 pb-0 gap-10 bg-black">
          <div className="flex flex-col justify-center gap-10">
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://pune.news/wp-content/uploads/2023/10/Firecrackers.webp" />
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://static.toiimg.com/photo/msid-114651439,width-96,height-65.cms" />
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://t4.ftcdn.net/jpg/05/57/64/85/360_F_557648557_hyn34muXj7kwad5cOAoOjP2lRxMZOYBl.jpg" />

          </div>
          <img
            className="bg-cover rounded-2xl" src="https://i.ibb.co/GtRvHYV/f22.png"/>
             <div className="flex flex-col justify-center gap-10">
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://ddnews.gov.in/wp-content/uploads/2024/03/fireworks-1953253_640.jpg" />
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://www.tarotread.ai/images/posts/dream-about-firecrackers.webp" />
            <img className="bg-cover w-28 h-28 rounded-3xl" src="https://media.istockphoto.com/id/1158137464/photo/celebration-with-fire-crackers.jpg?s=612x612&w=0&k=20&c=x2oJadNAYJUoa-dK2xAS6Ctb0GTvxacdQDrHk-uz3Fc=" />

          </div>
        </div>


        <div className="w-full"><img className="w-full h-8" src="https://i.ibb.co/wJbwS3h/ds.jpg" /></div>
        <div className="mt-20 text-center text-[#f08080] text-5xl" > <p>ℂ𝕖𝕝𝕖𝕤𝕥𝕚𝕒𝕝 ℂ𝕖𝕝𝕖𝕓𝕣𝕒𝕥𝕚𝕠𝕟𝕤: ℙ𝕖𝕣𝕤𝕠𝕟𝕒𝕝𝕚𝕫𝕖𝕕 𝔽𝕚𝕣𝕖𝕨𝕠𝕣𝕜𝕤 𝕄𝕒𝕘𝕚𝕔! </p></div>
        <div className=" text-center text-[#f4978e] text-3xl"> <p>𝓔𝓷𝓬𝓱𝓪𝓷𝓽 𝔂𝓸𝓾𝓻 𝔀𝓮𝓭𝓭𝓲𝓷𝓰 𝓷𝓲𝓰𝓱𝓽. </p></div>
       
        <div className="flex p-32">

        <div className=" flex flex-col w-[50%] gap-2">
        <p className="text-black text-xl font-bold" data-aos="zoom-out">Key Highlights</p>
        <p className="text-3xl w-[70%] text-[#ff5d8f]" > Memorable Wedding Fireworks by QR Weds</p>
        <p className="text-black mt-2 w-[70%]"> We offer tailored packages, selecting elements from your vision to create an unforgettable experience that marks the beginning of a beautiful journey.</p>
        <p className="font-semibold text-xl mt-2 text-black ml-6" data-aos="zoom-in">Spectacular Fireworks Show</p>
        <p className="text-black w-[65%] ml-6 mt-1">Dazzling, synchronized displays designed to awe guests and capture breathtaking moments. Perfect for every couple’s big day.</p>
        </div>


       <div className="flex flex-col w-[50%] gap-10">  
       <div className="bg-[#f2cfc4] flex rounded-lg gap-10" data-aos="fade-down">
       <img className="w-20 h-20 ml-[4%] pt-4" src="https://i.ibb.co/KxYRkDh/star.png" />                                                                                                                             
       <div className="flex flex-col">
       <p className=" text-[#1282a2] text-2xl font-bold pt-2"> Traditional Indian Fireworks</p>
       <p className="text-left font-semibold  text-black pb-2"> Experience the magic of India’s rich fireworks tradition, adding vibrant colors and awe-inspiring patterns to your celebration.</p>
       </div>
       </div>
       <div className="bg-[#f2cfc4] flex rounded-lg gap-10" data-aos="zoom-in">
       <img className="w-20 h-20 ml-[4%] pt-4" src="https://i.ibb.co/WfSHS1W/star2.png" />  
       <div className="flex flex-col">
       <p className=" text-[#1282a2] text-2xl font-bold" > Customized Displays</p>
       <p className="text-left font-semibold  text-black pb-2"> Get a display designed specifically for your wedding, with customized colors, styles, and timing to match your theme perfectly</p>
       </div>
       </div>
       <div className="bg-[#f2cfc4] flex gap-10 rounded-lg " data-aos="fade-up">
       <img className="w-20 h-20 ml-[4%] pt-4" src="https://i.ibb.co/KxYRkDh/star.png" />
       <div className="flex flex-col">
       <p className=" text-[#1282a2] text-2xl font-bold">Eco-Friendly Options </p>
       <p className=" text-left font-semibold  text-black pb-2"> Choose eco-friendly fireworks that minimize environmental impact, ensuring a celebration that’s both stunning and sustainable.</p>
       </div>
       </div>
       </div>

      </div>



      </div>
    </>
  );
};
export default FireCrakers;