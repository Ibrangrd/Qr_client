import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Upasna2 = () => {
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

  // Sample photos for the gallery
  const galleryPhotos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3zUU_U1sqLbt5Q8vylnCJ6Dg2QJ_-yHnwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu4gwLE2FHNkhxskKXoD7vxGcC3EuJJ5kQ0cGvPkjOELAlFhramI_Q2nKOb30VqicbYU&usqp=CAU",
    "https://file.oyephoto.com/uploads/preview/wedding-haldi-images-hd-wallpaper-for-girls-11634647390dcqsym5lyr.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kRxj7qESg2XBfa7VY2QtXClijz1yEzIThw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwu9ZoxdEdfd_p_hmFpJtgKPmDu5COBDm7Ow&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Us1wxr_hJOQ-tPUcdniTPWwTru08nY_UxQ&s",
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
    <div className="min-h-screen relative overflow-hidden font-sans bg-[#FFF9F5]">
      {/* Floral background pattern */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('https://assets.architecturaldigest.in/photos/67ca91c1ec4cc4750b79bc18/16:9/w_2560%2Cc_limit/louis.jpg')] bg-repeat"></div> */}
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center">
          {/* Couple Photo */}
          <div className="w-56 mx-auto h-40 md:h-48">
          <DotLottieReact
          src="https://lottie.host/1748837b-9497-421c-b3c2-2cb1b8c47199/AehRdrB9yt.lottie"
          loop
          autoplay
          />
          </div>
          
          <div className="flex justify-center gap-0">
            <div className="w-32 mx-auto h-32 md:h-48">
              <DotLottieReact
                src="https://lottie.host/d772e577-7b9a-4876-a9ab-2fc19b44e828/NxEYv5IKpq.lottie"
                loop
                autoplay
              />
            </div>
            <div className="flex flex-col">
            <h1 className="sm:text-4xl text-[30px] md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Upasna
            </h1>
            <h1 className="sm:text-[20px] text-[16px] md:text-[20px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Weds
            </h1>
            <h1 className="sm:text-4xl text-[30px] md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sumit
            </h1>
            </div>
            <div className="w-32 mx-auto h-32 md:h-48">
              <DotLottieReact
                src="https://lottie.host/d772e577-7b9a-4876-a9ab-2fc19b44e828/NxEYv5IKpq.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl italic text-purple-700 font-light pb-12">
            March 27, 2025 • Rose Garden, Delhi
          </p>
        </header>

        {/* Share Your Photos Section with Gallery */}
        <section className="pb-8 mx-4">
          <div className="max-w-md mx-auto p-2 sm:p-10 bg-white rounded-xl shadow-lg text-center border border-pink-100">
            <h2 className="text-3xl font-semibold mb-4 text-purple-700 font-serif">Share Your Photos</h2>
            <p className="text-purple-600 mb-6">
              We'd love to see your pictures from our special day!
            </p>
            <a href="https://waldophotos.app.link/0DeFeCO02Rb">
              <button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl mb-6"
              >
                Upload Your Photos
              </button>
            </a>
            
            {/* Photo Gallery Preview */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-purple-700 mb-3">Recent Photos Shared</h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryPhotos.map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <img 
                      src={photo} 
                      alt={`Wedding moment ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Events Section */}
        <section className="py-8 mx-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-purple-700 font-serif">Wedding Events</h2>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-all min-h-[230px] border border-pink-100">
                <h3 className="text-xl font-bold mb-2 text-pink-600">{weddingEvents[currentEventIndex].title}</h3>
                <p className="text-purple-700 mb-4">{weddingEvents[currentEventIndex].description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-pink-500">📅</span>
                    <span className="text-gray-700">{weddingEvents[currentEventIndex].date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-pink-500">⏰</span>
                    <span className="text-gray-700">{weddingEvents[currentEventIndex].time}</span>
                  </div>
                  <div className="col-span-2 flex items-start">
                    <span className="mr-2 mt-1 text-pink-500">📍</span>
                    <span className="text-gray-700">{weddingEvents[currentEventIndex].venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <button 
                  onClick={handlePrevious}
                  className="px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all shadow-md flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
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
                  className="px-4 py-1 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all shadow-md flex items-center"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 text-center text-purple-700">
          <p className="text-xl italic">"Thank you for celebrating our love with us!"</p>
          <p className="mt-4 text-sm text-purple-500">With love, Upasna & Sumit</p>
        </div>
      </div>
    </div>
  );
};

export default Upasna2;