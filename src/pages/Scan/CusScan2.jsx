import React from "react";
import { Link,useParams } from "react-router-dom";
import {CusData} from "../data/CusData";
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
                     
      <div className="flex justify-center items-center mr-[6%]">


        <div className=" flex flex-col -mr-10 gap-10">
              <div  className={item?.venue_col}>
              <a 
                  href={item?.address2}
                  target="_blank"
                >
                𝘝𝘦𝘯𝘶𝘦 𝘓𝘰𝘤𝘢𝘵𝘪𝘰𝘯
                </a>
            </div>

            <div className="">
            <Link to="/Cusafter">
              <p className={item?.after_col}>
              𝘈𝘧𝘵𝘦𝘳 𝘔𝘢𝘳𝘳𝘪𝘢𝘨𝘦
              </p>
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
