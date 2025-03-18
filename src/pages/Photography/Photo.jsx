import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../Error";
import Tooltip from '@mui/material/Tooltip';
import dataPhoto from "./dataPhoto";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./Faq";
import TermsAndConditions from "./Terms"; // Import the component
import "./photoinfo.css";

// Icons (You can use any icon library like FontAwesome or Heroicons)
import { FaCamera, FaImages, FaPhotoVideo, FaFilm, FaVideo } from "react-icons/fa";

const Photo = () => {
  const images = [
    "https://eventsmanagementkerala.com/wp-content/uploads/2025/01/wedding-photography-kannur.jpg",
    "https://nishantratnakar.com/wp-content/uploads/2011/08/SandyNidhi-476.jpg",
    "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/wedding-photography-couple-shoot.jpg",
    "https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg",
    "https://clickstory.in/wp-content/uploads/2024/11/sindur-dan-prasanna.jpg",
  ];
    const { inviteId } = useParams();
    const data = dataPhoto.find((data) => data.id === inviteId);
  
    if (data === undefined) {
      return <Error />;
    }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <>
      <div className="bg-[#FCF7F8] min-h-screen p-4">
        {/* Main Heading */}
        <p className="mt-4 text-4xl sm:text-5xl pb-10 font-bold pt-4 text-[#457b9d] text-center">
        {data.title}
        </p>

        {/* Carousel Section */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative w-full h-64 sm:h-96 overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Details Section */}
        <div className="w-full max-w-4xl mx-auto bg-[#FCF7F8] rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-4xl font-bold text-[#457b9d] mb-6 text-center">
            Service Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hours of Coverage */}
            <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaCamera className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Hours of Coverage
                </h3>
              </div>
              <p className="text-gray-600">{data.hours} hours</p>
            </div>

            {/* Types of Photography */}
            <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaImages className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Types of Photography
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Candid</li>
                <li>Drone</li>
                <li>Cinematic</li>
                <li>Traditional</li>
              </ul>
            </div>

            {/* Number of Edited Images */}
            <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaPhotoVideo className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Number of Edited Images
                </h3>
              </div>
              <p className="text-gray-600">{data.noimages}</p>
            </div>

            {/* Album Details */}
            <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaFilm className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Album Details
                </h3>
              </div>
              <p className="text-gray-600">
                Includes a 20-page premium photo album
              </p>
            </div>

            {/* Additional Services */}
            <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaVideo className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Additional Services
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>A speci Gift from QR Weds</li>
                <li>Teaser</li>
                <li>Trash the dress shoot</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
  <h2 className="text-2xl font-bold text-[#457b9d] mb-4">Pricing</h2>
  <p className="text-lg text-gray-700">
    <span className="font-semibold">{data.price}</span>
  </p>
  <p className="text-sm text-gray-500 mt-2">
    This is an estimated price range for our services. Final pricing may vary based on specific requirements.
  </p>
</div>

     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
     <h2 className="text-2xl font-bold text-[#457b9d] mb-4">Important Note</h2>
     <p className="text-lg text-gray-700">
     The price may vary according to the <span className="font-semibold">location</span> and the <span className="font-semibold">number of days</span> required for the project.
     </p>
     <p className="text-sm text-gray-500 mt-2">
     For a detailed quote, please contact us with your specific requirements.
     </p>
     </div>
        {/* Terms and Conditions Section */}

        {/* WhyChooseUs Section */}
        <div className="w-full max-w-4xl mx-auto">
          <WhyChooseUs />
        </div>
        <TermsAndConditions />
       
        {/* FAQ Section */}
        <div className="w-full max-w-4xl mx-auto">
          <FAQ />
        </div>
           <div className="fixed sm:bottom-5 bottom-2 right-3 sm:right-10 flex ">
            <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
                <button className="px-5 py-2 sm:px-8 sm:py-3 font-semibold bg-pink-200  border-pink-500 border-2 text-black rounded-full shadow-lg">
                    💬 Chat
                </button>
            </a>
        </div>
              <div className="flex justify-center">
              <Tooltip className="text-5xl" title="Book Now">
                  <a href="https://wa.me/919832704206?text=Hello%20I%20would%20like%20to%20talk%20about%20your%20Cards." target="_blank">
                  <button className="bg-red-30 text-xl border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[10rem] sm:w-[15rem]">
                      Book Now
                      </button>
                  </a>
                </Tooltip>
                </div>
              <div className="flex justify-around pb-10 pt-10">
            <a href="tel:+919832704206" target="_blank">
                <button className="px-6 py-3 font-semibold bg-pink-200 border-pink-500 border-2 text-black rounded-full shadow-lg">
                    📞Call Now
                </button>
            </a>
        </div>
      </div>
    </>
  );
};

export default Photo;