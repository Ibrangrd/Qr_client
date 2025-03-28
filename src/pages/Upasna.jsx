import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Upasna = () => {
  const weddingEvents = [
    { 
      title: "Reception", 
      date: "March 28, 2025", 
      time: "7:00 PM", 
      venue: "The Imperial, Delhi",
      description: "A grand celebration with all our loved ones to mark our union."
    },
    { 
      title: "Haldi Ceremony", 
      date: "March 25, 2025", 
      time: "10:00 AM", 
      venue: "Arya Samaj Mandir, Delhi",
      description: "Join us for the traditional Haldi ceremony where we'll apply turmeric paste for good luck."
    },
    { 
      title: "Sangeet Night", 
      date: "March 26, 2025", 
      time: "7:00 PM", 
      venue: "The Grand Banquet, Delhi",
      description: "An evening of music, dance and celebration with our closest friends and family."
    },
    { 
      title: "Wedding Ceremony", 
      date: "March 27, 2025", 
      time: "6:00 PM", 
      venue: "Rose Garden, Delhi",
      description: "The main wedding ceremony where we'll exchange vows under the stars."
    }
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === weddingEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === 0 ? weddingEvents.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-white">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-12">
          <div className="w-full max-w-[500px] mx-auto h-48 md:h-64">
            <DotLottieReact
              src="https://lottie.host/2efe3027-c79e-4049-96a8-ec6fd491a96c/NwTCSu2gBG.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center gap-0">
            <div className="w-48 mx-auto h-48 md:h-64">
              <DotLottieReact
                src="https://lottie.host/d772e577-7b9a-4876-a9ab-2fc19b44e828/NxEYv5IKpq.lottie"
                loop
                autoplay
              />
            </div>
            <h1 className="sm:text-4xl text-[26px] pb-16 pt-16 md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Upasna & Sumit
            </h1>
            <div className="w-48 mx-auto h-48 md:h-64">
              <DotLottieReact
                src="https://lottie.host/d772e577-7b9a-4876-a9ab-2fc19b44e828/NxEYv5IKpq.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl italic text-purple-700">
            March 27, 2025 • Rose Garden, Delhi
          </p>
        </header>

        {/* Share Your Photos Section - Now at the top */}
        <section className="pb-8 mx-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Share Your Photos</h2>
            <p className="text-purple-600 mb-6">
              We'd love to see your pictures from our special day!
            </p>
            <a href="https://waldophotos.app.link/0DeFeCO02Rb">
              <button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                Upload Your Photos
              </button>
            </a>
            <p className="mt-4 text-sm text-purple-500">
              You can also see the photos
            </p>
          </div>
        </section>

        {/* Wedding Events Section */}
        <section className="py-8 mx-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-purple-700">Wedding Events</h2>
            
            <div className="relative">
              <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-all min-h-[230px]">
                <h3 className="text-xl font-bold mb-2 text-pink-600">{weddingEvents[currentEventIndex].title}</h3>
                <p className="text-purple-700 mb-4">{weddingEvents[currentEventIndex].description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    <span>{weddingEvents[currentEventIndex].date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏰</span>
                    <span>{weddingEvents[currentEventIndex].time}</span>
                  </div>
                  <div className="col-span-2 flex items-start">
                    <span className="mr-2 mt-1">📍</span>
                    <span>{weddingEvents[currentEventIndex].venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={handlePrevious}
                  className="px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
                >
                  Previous
                </button>
                <div className="flex items-center">
                  {weddingEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEventIndex(index)}
                      className={`w-2 h-2 mx-1 rounded-full ${currentEventIndex === index ? 'bg-purple-600' : 'bg-purple-300'}`}
                      aria-label={`Go to event ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={handleNext}
                  className="px-4 py-1 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="py-10 text-center text-purple-700">
          <p className="text-xl">Thank you for celebrating with us!</p>
        </div>
      </div>
    </div>
  );
};

export default Upasna;