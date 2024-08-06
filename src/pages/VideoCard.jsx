import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
const VideoCard = ({ info }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="md:mx-8  w-full md:w-fit my-10  ">
      <div className="relative md:w-[560px] w-[100vw] h-[315px]">
        <iframe
          width="560"
          height="315"
          className="rounded-xl flex justify-center text-center  "
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
          src={play ? info?.urlWithPlay : info?.urlWithoutPlay}
          title={info?.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {play === false && (
          <FaPlayCircle className="text-red-500 md:block hidden absolute left-[50%] -translate-x-[50%]  top-[50%] -translate-y-[50%]  w-[15vw] h-[12vh]" />
        )}
      </div>
      <div className="md:w-[560px] w-[100vw] bg">
        <div className="flex justify-between ">
          <p className="text-3xl  font-pacifico py-2 text-orange-700 ">{info.title}</p>
          <p className="flex align-baseline">
            {info?.rating || 4.5}
            <MdOutlineStar className="top-[50%] text-2xl text-yellow-400" />
          </p>
        </div>
        <p className="font-mono text-gray-500 px-2 w-[100%] font-semibold ">{info.des}</p>
      </div>
    </div>
  );
};

export default VideoCard;
