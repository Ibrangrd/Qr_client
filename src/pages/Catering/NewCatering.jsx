import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Cateringdata } from "../data/Cateringdata";
import NewCateringList from "./NewCateringList";

const NewCatering = ({ ItemName, ItemData }) => {
  // console.log("Item Name  cat " + ItemName);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="sm:text-6xl text-4xl text-black text-center font-extrabold">
        {ItemName}
      </div>
      <div className="bg-[#ffffff]">
        <div className="flex flex-col m-auto w-[86%] pt-10 pb-10 justify-center gap-10">
          <Slider {...settings}>
            {ItemData.map((item) => (
              <NewCateringList
                key={item.id}
                Item={item.Item}
                img1={item.img1}
                It1={item.It1}
                img2={item.img2}
                It2={item.It2}
                img3={item.img3}
                It3={item.It3}
                he={item.he}
                img4={item.img4}
                It4={item.It4}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NewCatering;