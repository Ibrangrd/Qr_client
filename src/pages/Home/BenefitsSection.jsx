import React from "react";
// import "aos/dist/aos.css";
const benefits = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6yGontxV21MguKaAX4_LrmOc3IgTzGYzQ&s",
          title: "Personalized Invitations for Your Special Day",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwsQVcLbikGJfjBlhkfxxB60Hhb44DthjiA&s",
          title: "Exclusive Custom Card Designs",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzztiVh7jHZGRjsNOzjqXUW5oLQwifO3BnQA&s",
          title: "Enhanced Privacy & Security",
        },
        {
          img: "https://img.favpng.com/18/8/5/quality-clip-art-png-favpng-6FWcTv0BxLsXtFXY8N9X8QQsc_t.jpg",
          title: "Premium Quality Services",
        },
        {
          img: "https://chiedesign.in/wp-content/uploads/2023/01/Luxury-Interiors-Den-Room-scaled-1-1080x675.webp",
          title: "Fully Customizable to Reflect Your Style",
        },
        {
          img: "https://media-api.xogrp.com/images/b0e84a56-db35-4752-acdd-c8d39c2743cc~rs_768.h",
          title: "Capture & Preserve Your Precious Moments",
        },
      ];

const BenefitsSection = () => {
    return (
        <div className="bg-[#FCF7F8] flex flex-col items-center pt-10 pb-20">
          <h2 className="my-4 text-3xl md:text-5xl font-bold text-[#457b9d] pb-4">
            Benefits with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4 w-11/12 max-w-6xl">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white sm:p-6 p-2 rounded-xl shadow-md flex items-center space-x-4" data-aos="flip-left">
                <img
                  src={benefit.img}
                  alt="icon"
                  className="w-20 h-20 rounded-full object-cover"
                />
                {/* Text on the right */}
                <p className="text-lg font-medium text-gray-700">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
  );
};

export default BenefitsSection;
