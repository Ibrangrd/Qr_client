import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newqrcardslist from "./Newqrcardslist";
const QrSection = ({ CardName, CardData,CardPrice }) => {
  // console.log("Item Name  cat " + ItemName);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <div className="sm:text-4xl text-3xl text-[#4E8098]  text-center font-extrabold">
        {CardName}
      </div>
      <div className="flex justify-center text-xl sm:text-2xl font-bold text-green-500" >₹{CardPrice}</div>
      <div className="bg-[#FCF7F8]">
        <div className="flex flex-col m-auto w-[86%] pb-10 justify-center gap-10">
          <Slider {...settings}>
            {
              CardData.map((val) => (
              <Newqrcardslist
              key = {val.id}
              path = {val.path}
              title = {val.title}
              // price = {val.price}
              // des = {val.des}
              />
            ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default QrSection;