import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../Error";
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
          HELLO
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
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#457b9d] mb-6 text-center">
            Service Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hours of Coverage */}
            <div className="bg-[#FCF7F8] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaCamera className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Hours of Coverage
                </h3>
              </div>
              <p className="text-gray-600">8 hours</p>
            </div>

            {/* Types of Photography */}
            <div className="bg-[#FCF7F8] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
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
            <div className="bg-[#FCF7F8] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaPhotoVideo className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Number of Edited Images
                </h3>
              </div>
              <p className="text-gray-600">200+</p>
            </div>

            {/* Album Details */}
            <div className="bg-[#FCF7F8] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
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
            <div className="bg-[#FCF7F8] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaVideo className="text-3xl text-[#457b9d] mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Additional Services
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Pre-wedding shoot</li>
                <li>Reels creation</li>
                <li>Trash the dress shoot</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <TermsAndConditions />

        {/* WhyChooseUs Section */}
        <div className="w-full max-w-4xl mx-auto">
          <WhyChooseUs />
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-4xl mx-auto">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Photo;