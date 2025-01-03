import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cateringdata } from "../data/Cateringdata";
import NewCateringList from "./NewCateringList";

const NewCatering = ({ ItemName, ItemData }) => {
  console.log("Item Name " + ItemName);
  const foodItemData = JSON.stringify(ItemData)
  console.log("Item Data " + foodItemData.length);
  
  // console.log("Item Dta " + );

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
      {/* <div className="bg-white "> */}
      <div className="sm:text-5xl text-2xl text-black text-center font-extrabold">
        {ItemName}
      </div>
      <div className="bg-red-200 ">
        <div className="flex flex-col m-auto w-[86%] pt-10 pb-10 justify-center gap-10">
          <Slider {...settings}>
            {/* {Cateringdata.map((ItemData) => (
              <NewCateringList
                key={ItemData.id}
                Item={ItemData.Item}
                img1={ItemData.img1}
                It1={ItemData.It1}
                img2={ItemData.img2}
                It2={ItemData.It2}
                img3={ItemData.img3}
                It3={ItemData.It3}
                he={ItemData.he}
              /> */}
            {/* ))} */}
            {/* <NewCateringList
              key={ItemData.id}
              Item={ItemData.Item}
              img1={ItemData.img1}
              It1={ItemData.It1}
              img2={ItemData.img2}
              It2={ItemData.It2}
              img3={ItemData.img3}
              It3={ItemData.It3}
              he={ItemData.he}
            /> */}
          </Slider>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default NewCatering;
