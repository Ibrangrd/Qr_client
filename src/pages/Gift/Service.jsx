import React from "react";
import { giftItems } from "../../data/Productlist";
const Service = () => {
  return (
    <>
      <div className="text-center bg-white">
        <div className="flex flex-row flex-wrap justify-center px-4 sm:px-10  pb-10 gap-16">
          {giftItems.map((val, index) => (
            <div
              className=" w-full sm:w-[45%] md:w-[28%] lg:w-[22%] bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden"
              data-aos="zoom-in-up"
              key={index}
            >
              {/* Product Image */}
              <div className="w-full h-72 sm:h-80 relative">
                <img
                  className="w-full h-full object-cover rounded-t-2xl"
                  src={val.image}
                  alt={val.heading}
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1 pt-3">
                {/* Product Title */}
                <h3 className="text-[18px] font-semibold text-black mb-1 text-left pl-5">
                  {val.heading}
                </h3>

                {/* Product Price */}
                <div className="text-lg font-medium text-green-500 text-left pl-5 mt-1">
                ₹{val.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
