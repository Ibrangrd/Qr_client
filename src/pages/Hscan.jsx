import React from "react";
import { Link, useParams } from "react-router-dom";

const Hscan = ()=>{
  return(
    <>
     <div className="flex pl-6 bg-white gap-12 ">
     <img className="w-14 h-14 mt-[15%] " src="https://i.ibb.co/r6kvpQX/s1.png" />
     <img className="w-36 h-36" src="https://i.ibb.co/wRmzy3p/o2.png" />
     <img className="w-14 h-14 mt-[15%] " src="https://i.ibb.co/r6kvpQX/s1.png" />
     </div>

     <div className="flex flex-col bg-white">
      <div className="flex pt-10 gap-36 pl-5 "> 
        <div> <img className="w-28 h-32 " src="https://i.ibb.co/qr9p8CV/g2.png"/></div>
        <div> <img className="w-24 h-28 mt-2" src="https://i.ibb.co/ngvVymF/l2.png"/></div>
      </div>

      <div className=" flex ml-12 gap-5" >
            <h1 className=" text-3xl font-bold mt-3"> ARYAN</h1>
            <img className=" w-20 h-20 -mt-2 " src="https://i.postimg.cc/0QNBbMSM/testimage.png" />
            <h1 className=" text-3xl font-bold poppins mt-3"> PAYAL</h1>
          </div>

      <div>
      <div className="scanvi">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/agSOz0DsJjo?si=wswSQ6bhvbOMwdmS?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
      </div>

      <div className="flex justify-center">
            <div>
              <div className="location"> Venue Location </div>
              <div className=" ml-[10%] sm:ml-[45%]">
                <a
                  href="https://maps.app.goo.gl/HdAj5DHDo2myz6qe9"
                  target="_blank"
                >
                  <img className="w-10 object-cover sm:w-10 md:w-10 sm:h-10 md:h-10" src="https://iili.io/dL52914.png" />
                </a>
              </div>
            </div>
            <div className="md:hidden mt-16 w-[50%] ">
              <p className="text-base ml-[25%] sm:ml-[0] md:ml[0] font-bold text-[#390099]">
                Moments After Marriage
              </p>
              <div className="text-xl font-extrabold text-[#ff1654] mt-2  ml-[35%] sd:text-center md:text-center">
                <Link to="/Memories">
                  <button> View </button>
                </Link>
              </div>
            </div>
          </div>

     </div>

    </>
  )
};
export default Hscan;