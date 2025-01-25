import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeReview = () => {
  const sliderData = [
    {
      image: 'https://images.bhaskarassets.com/web2images/521/2023/06/08/orig_26-1_1686179647.jpg',
      title: 'DK Sign',
      description: '(Vice Chancellor of JUT)',
      service:"Card,Photography",
      review:"Absolutely loved the photography and card services! The team was professional, creative, and delivered beyond expectations. Highly recommend",
    },
    {
      image: 'https://jutranchi.ac.in/wp-content/uploads/2023/12/1580987092274.jpg',
      title: 'Sneh Kumar',
      description: '(Director of JUT)',
      service:"Card , Photography",
     review:"Amazing experience! The photography was stunning, and the card designs were perfect. Truly impressed with the quality and attention to detail",
    },
    {
      image:"https://i.ibb.co/55Q2qh5/Whats-App-Image-2025-01-21-at-19-05-13-b735addb.jpg",
      title: "Md. Shahid Raza",
      description:"(Tata Steel)",
     service:"Card",      
     review:"Great experience with the card service! The delivery was on time, and the quality of the cards exceeded my expectations. Highly recommended",  
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FCF7F8]">
      <h1 className="sm:text-5xl text-3xl font-bold text-[#457b9d] mt-8 text-center">Our Customers & Reviews</h1>
      <div className="m-auto w-[86%] sm:w-[90%] pt-10 pb-10">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="">
              <div className="flex flex-col items-center text-center shadow-xl rounded-lg p-4 ">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-40 sm:h-56 object-cover rounded-lg "
                />
                <div className="text-left">
                <h3 className=" text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className='text-black font-bold'><i>Service</i>:-{item.service}</p>
                <p className="text-black ">{item.review}</p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeReview;
