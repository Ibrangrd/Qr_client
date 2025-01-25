import React from "react";
import { Link,useParams } from "react-router-dom";
import { CusData } from "../../data/CusData";
import Error from "../Error";
const CusScan = () => {

    const { inviteId } = useParams();
  const data = CusData.find((data) => data.id === inviteId);

  if (data === undefined) {
    return <Error />;
  }

     return (
    <>
    <div className="">
        <div className="h-auto w-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${data?.bgImage})` }}>
          <div className=" flex flex-col">
            <div className=" flex justify-center gap-5">
              <h1 className={data?.namepo1}>
                {data?.couple1}
              </h1>
              <img
                className={data?.hepos}
                src="https://i.postimg.cc/0QNBbMSM/testimage.png"
              />
              <h1 className={data?.namepo2}>
                {data?.couple2}
              </h1>
            </div>

            <div className="flex flex-col text-center ml-[40%] pt-4 gap-0">
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
              <div className="w-16 h-8 sm:ml-[95px]">
                <img
                  src="https://i.ibb.co/NjzsPSh/Sankh.png"
                  onClick={() => {
                  document.getElementById("audio").src = "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                    }}
                 alt="Sound"
                  />
              </div>

              <div className="w-5 h-5 ml-[28px] sm:ml-[125px] -mt-0">
                <img
                  src="https://i.ibb.co/SX7Vtfg/Sound.png"
                  onClick={() => { document.getElementById("audio").src= "https://www.youtube.com/embed/Pdrcr7MeXiU?autoplay=1";
                  }}
                  alt="Sound"
                />
              </div>
            </div>

            <div className={data?.position}>
              <iframe
                className={data?.videoStyle}
                // style={data?.videoStyle}
                src={data?.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowFullScreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex justify-center gap-10 ml-[10%] mb-[10%] sm:mb-10 sm:mt-[7%] sm:gap-60 sm:ml-[30%] ">
              <div className="">
                <div className="text-[16px] font-bold  text-black text-center">
                  Venue Location{" "}
                </div>
                <div className="ml-[35%]">
                  <a
                    href={data?.address}
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
                <p className=" font-bold text-[#06d6a0] text-[16px]">
                  After Marriage
                </p>
                <div className="text-xl font-extrabold text-pink-900 text-center -ml-[60%] sm:-ml-[75%]">
                  <Link to="/Cusafter">
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

export default CusScan;