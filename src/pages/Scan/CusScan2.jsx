import React from "react";
import { Link,useParams } from "react-router-dom";
import {CusData} from "../../data/CusData";
import Error from "../Error";
const CusScan2 = () => {

    const { inviteId } = useParams();
  const item = CusData.find((item) => item.id === inviteId);

  if (item === undefined) {
    return <Error />;
  }

     return (
    <>
     <div className="">
      <div className="h-[85vh] w-full  flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item?.bgImage2})` }}>
                     
      <div className="flex justify-center items-center -mr-[4%]">


        <div className=" flex flex-col -mr-8 mt-10">
              <div  className="text-[22px] font-bold rotate-90 mb-10 text-shadow text-black">
              <a 
                  href={item?.address2}
                  target="_blank"
                >
                <img className="w-12 h-12" src="https://i.ibb.co/27mz9vpK/Whats-App-Image-2025-03-11-at-00-37-42-db78e4e4-removebg-preview.png"/>
                </a>
            </div>
            <div className="text-[10px] font-bold mb-10 rotate-90 text-shadow text-black">
                 <Link to = "/password">
                   <img
                     className="w-12 h-12"
                     src="https://i.ibb.co/gpPbYDj/camera-removebg-preview.png"
                   />
                 </Link>
            </div>
            <div className="text-[22px] font-bold rotate-90 mb-10 text-shadow text-black">
              <Link to="/gift">
               <img
                 className="w-10 h-10"
                 src="https://i.ibb.co/ym85jV3F/images-removebg-preview-1.png"
                />
              </Link>
            </div>
          </div>
          
          <div className={item?.position2}>
            <iframe
              className={item?.videoStyle2}
              // style={data?.videoStyle}
              src={item?.video2}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className={item?.namepos}>
            <h1 className=" text-xl font-bold sm:text-[35px] animate-change-color rotate-90">
              {item?.couple12}
            </h1>
            <img
              className=" w-20 h-20 animate-heart-size  "
              src="https://i.postimg.cc/0QNBbMSM/testimage.png"
            />
            <h1 className=" text-2xl sm:text-[35px] font-bold poppins animate-change-color rotate-90">
              {item?.couple22}
            </h1>
          </div>

         </div> 
        </div>
      </div>
    </>
     );
};

export default CusScan2;