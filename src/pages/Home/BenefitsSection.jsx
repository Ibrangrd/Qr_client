import React from "react";

const benefits = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkeNsqrECLUuLOB1jVc6O_Dvq8bnL4ZiuKQ&s",
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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZv7jbBBQY3dYx7E1aErAqIajlS8kysRyL9aQ3cPzdyTAUjiJh-RKiPLjqDFl-KfAgFM&usqp=CAU",
          title: "Fully Customizable to Reflect Your Style",
        },
        {
          img: "https://i.pinimg.com/736x/73/46/ef/7346efb08d0bef5aaaeab305fdd0ccc9.jpg",
          title: "Capture & Preserve Your Precious Moments",
        },
      ];

const BenefitsSection = () => {
    return (
        <div className="bg-[#FCF7F8] flex flex-col items-center pt-10 pb-20">
          <h2 className="my-4 text-3xl md:text-5xl font-bold text-[#457b9d] pb-4">
            Benefits with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-6xl">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
                <img
                  src={benefit.img}
                  alt="icon"
                  className="w-24 h-24 rounded-full object-cover"
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
