import React, { useState } from "react";

const PhotosPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Your photos have been downloaded!");
    }, 15000); // Simulate a 2-second download process
  };

  // Array of photo URLs
  const photos = [
    "https://pipbroadcast.com/wp-content/uploads/2023/01/bengali-candid-wedding-photography.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfG34TaC0wC35Xtd1K66U815Y-3JAS-Z3DA54aAQUBtMWccE6eL4gpA3hmdLvzoyoulP8&usqp=CAU",
    "https://cdn0.weddingwire.in/vendor/7160/3_2/960/jpg/wedding-photography-sk-photography-couple-shot_15_387160-163455941570395.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvreYUfgP0O1n_MCGBOWtdQ13jFBh7-axBlw&s",
    "https://www.wedium.com/puri/wp-content/uploads/2019/10/4-8-600x913.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibgQRxxHYpkCD0mq55ZW84f5ERZK4RGyZOg&s",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FCF7F8] relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glassmorphism Card */}
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Photos
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo} // Use the online photo URL
              alt={`Photo ${index + 1}`}
              className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>
        <button
          onClick={handleDownload}
          className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          {isDownloading ? "Downloading..." : "Click here to download the photos"}
        </button>
      </div>
    </div>
  );
};

export default PhotosPage;