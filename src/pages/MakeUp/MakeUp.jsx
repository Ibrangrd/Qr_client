import React from "react";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const MakeUp = () => {
  const makeupdata=[
    {
      id: "Service2",
      imgsrc:"https://beautycourses.in/images/blog/bridal2.jpg",
     title: "Bridal makeup",
     price:"₹ 7000-25000",
     link: "https://wa.me/919832704206?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20bridal%20makeup%20services.",
    },
    {
      id: "Service3",
      imgsrc:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_836,h_1024/https://www.bismatrimony.com/blog/wp-content/uploads/2022/09/kerala-bridal-makeup-836x1024.jpg",
     title: "Party Makeup",
    price:"₹ 3000-5000",
    link: "https://wa.me/919832704206?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20Party%20makeup%20services.",
    },
    {
      id: "Service4",
      imgsrc:"https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg",
     title: "Haldi Makeup",
     price:"₹ 3000-5000",
     link: "https://wa.me/919832704206?text=Hello%20%20I%20would%20like%20to%20talk%20about%20your%20Haldi%20makeup%20services.",
    },
    {
      id: "Service7",
      imgsrc:"https://files.myglamm.com/site-images/original/Green-Goddess-Makeup-Look-For-Mehndi.jpg",
     title: "Mehendi Makeup",
     price:"₹ 3000-5000",
     link: "https://wa.me/919832704206?text=Hello%20%20I%20would%20like%20to%20talk%20about%20your%20Mahendi%20makeup%20services.",
    },
    {
      id: "Service6",
      imgsrc:"https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/Matte-Look.jpg",
     title: "Engagement makeup",
     price:"₹ 3000-5000",
     link: "https://wa.me/919832704206?text=Hello%20%20I%20would%20like%20to%20talk%20about%20your%20bridal%20Engagement%20services.",
    },
  ]
  return (
    <>
      <div className="bg-[#FEDEDF] ">
        <img
          className="h-40 sm:h-96 w-full"
          src="https://i.ibb.co/RpJwbzH3/Makeup-Products.jpg"
          alt="MakeUp"
        />

        <div className="flex p-1 sm:p-4 rounded-3xl pb-24">

          <div className="w-[70%] flex flex-col">
          <h1 className="text-center text-xl sm:text-6xl font-semibold text-[#457b9d] pt-4">MAKEUP SERVICE</h1>

          <div className="flex pt-10 sm:gap-12 gap-0">
          <div className="flex flex-col sm:w-[50%] m-auto justify-center">
          <p className="sm:text-4xl text-[15px]  text-black font-semibold"> BRIDAL MAKEUP</p>
          <p className="text-black text-xs sm:text-xl  "> Our bridal makeup enhances your beauty with a flawless, lasting look. Expert artists and premium products ensure you shine confidently</p>
          </div>
          <div className="flex sm:w-[50%] w-[0%] pt-10">
          <p className="text-black text-xl pr-2 hidden sm:block" > Our makeup services enhance your beauty with a flawless, long-lasting look tailored to your unique style and preferences. 
          With expert artists, premium products, and meticulous attention to detail, we ensure you shine with confidence and elegance on any special occasion.</p>
          </div>
          </div>

          <div className="flex pt-10" >
          <div className="sm:w-[50%] sm:p-5">
         <img className=" rounded-lg" src="https://mir-s3-cdn-cf.behance.net/projects/404/f171a4214787091.Y3JvcCw1NzI3LDQ0ODAsNTEwLDA.jpeg" alt="makeup" />
         </div>
         <div className="flex flex-col w-[50%] text-center m-auto justify-center">
          <p className="sm:text-4xl text-[15px] text-center justify-center m-auto font-semibold text-black"> PARTY MAKEUP</p>
          <p className="text-black text-xl  hidden sm:block"> Our party makeup ensures a flawless, long-lasting look, making you shine confidently at any special celebration, gathering, or glamorous event.</p>
          </div>
          </div>
          </div>
          <div className="">
            <img
              className=" sm:h-[700px] h-80 w-full rounded-2xl"
              src="https://i.pinimg.com/736x/8b/44/ab/8b44abccae845f8495435bf1aebeeaf6.jpg"
              alt="MakeUp"
            />
          </div>
        </div>
      <div className="flex flex-row flex-wrap justify-center p-2 sm:p-10 h-auto gap-24 sm:pb-16 ">

      {
      makeupdata.map((val,index) =>
        <div className="sm:w-[28%] w-[90%] h-[300px] sm:h-[350px] flex flex-col justify-center p-4 sm:mb-0 mb-10 bg-white rounded-2xl mt-12 mx-1" data-aos="zoom-in-up" key={index}>
  <img
    className="sm:w-[95%] sm:h-[90%] h-[90%] w-[100%] object-cover rounded-3xl border-2 border-red-300 shadow-lg  shadow-red-300 transition-all duration-800 ease-in-out hover:shadow-green-800 mx-auto -translate-y-12" src={val.imgsrc} alt="He" />
    <div className="text-2xl text-center font-semibold text-black -translate-y-8">
      {val.title}
    </div>
  <div className="text-2xl font-semibold text-center text-black -translate-y-7">
      {val.price}
    </div>
  <div className="flex justify-center -translate-y-9">
    <Tooltip className="text-5xl" title="Book Now">
      <Link to={val.link} target="_blank">
      <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
          Book Now
          </button>
      </Link>
    </Tooltip>
  </div>
</div>

      )
      }
     </div>
    <p className="text-xl text-black">Note:- <i>Pricing varies depending on the choice of foundation.</i> </p>
    <p className="text-2xl pt-5 font-semibold text-black text-center"> Makeup artist - Mrs. Summy Gupta</p>
    <a href="tel:+919832704206"  className=" justify-center flex pt-10 pb-10">
    <Tooltip className="text-5xl" title="Call Now">
      <button className="bg-white text-xl border-2 py-2 text-black border-black rounded-3xl shadow-inner  hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
        Call Now
          </button>
    </Tooltip>
    </a>
    <img className="h-40 sm:h-96 w-full" src="https://hips.hearstapps.com/hmg-prod/images/makeup-supplies-amidst-shiny-glitter-royalty-free-image-1640037507.jpg" alt="makeup" />
      </div>
    </>
  );
};
export default MakeUp;
