import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
const HomeAboutUs = () => {
  return (
    <>
      <div class="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
        <div class="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          {/* <!--  --> */}
          <div class="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div class="relative">
              {/* <!-- Side Img 1 --> */}
              <img
                class="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxC5rcKYCCN5uEby0qHuc8q5nTAm3gZH7eQ&s"
                alt="Side Image"
              />

              {/* <!-- Side Img 2 --> */}
              <img
                class="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY7H4OgvD-kFH8qWM3R_c5onphEeYH9q2LA&s"
                alt="Side Image 2"
              />

              {/* <!-- Side Img 3 --> */}
              <img
                class="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src="https://images.prismic.io/qpidindia/d7926b7d-cc3c-4762-8c27-aae39d1bae62_SAM_3742+%281%29.jpg?auto=compress,format&rect=0,0,4023,6048&w=900&h=1353"
                alt="Side Image 3"
              />

              {/* <!-- Main Img --> */}
              <img
                class="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-pink-500"
                src="https://www.thephototoday.in/wp-content/uploads/2024/06/A-Symphony-of-Love-Capturing-the-Essence-of-South-Indian-Bridal-Beauty-2-1080x700.jpg"
                alt="About us"
              />
            </div>
            {/* <!--  --> */}
            <div class="lg:w-[60%] p-4 w-full h-full shadow-xl flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <h2 class="text-4xl text-center text-[#457b9d] font-bold px-4 py-1 md:mt-0 mt-10">
                About Us
              </h2>
              <p class="md:text-3xl text-2xl text-center text-black dark:text-gray-200 font-bold my-5">
                Modern Weddings, Simplified
              </p>
              <p class="md:text-xl sm:text-lg text-base text-justify sm:px-2 text-black">
                QR Weds blends technology with love to simplify your wedding
                journey. From QR invitations to seamless guest management, we
                make planning effortless and memorable. Celebrate smarter with
                QR Weds—where innovation meets tradition
              </p>

              {/* <!-- button --> */}
              {/* <button class="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">Read More</button> */}
              <Tooltip className="text-5xl" title="VIEW">
                <Link to="/service">
                  <Button
                    className="w-52 pb-6 h-12 hover:bg-blue-100 hover:text-red-700"
                    variant="outlined"
                  >
                    VIEW
                  </Button>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeAboutUs;
