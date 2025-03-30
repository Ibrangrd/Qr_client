import React, { useState } from 'react';

const Upasna3 = () => {
  const [showUploadOptions, setShowUploadOptions] = useState(false);

  const weddingPhotos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmqJwBeEaTcTfKTVNplT6qqaut94EA_HrO66RNsNLnWrBo7VWMS0IaKzqSjqke_3P1NI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJO40gHbn5Y_vd5PEsYpN5iRU1hUclIphn7g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe41MypZV80coui2DrNdXKxcs-wllRUm7HYziiyVSTX26c0A_LalR4IxP0vjlhRRxjxAg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAz6v4BcptM34nukGavWfXCNN87PVYCvvSfQ&s",
  ];

  const handleUploadClick = () => {
    setShowUploadOptions(true);
  };

  const handleOptionSelect = (userType) => {
    // alert(`Redirecting to ${userType} upload page`);
    setShowUploadOptions(false);
  };

  return (
    <div className="min-h-screen bg-[#fff2ec] flex items-center justify-center p-4 font-sans">
      {/* Main Card */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden border border-[#e8d5d5]">
        
        {/* Header Section */}
        <div className="p-8 pt-0 pb-5 text-center">
        <img className="w-auto h-32 m-auto" src="https://i.ibb.co/jnmDqQR/horizontal-border-with-white-flower-rose-leaves-white-528213-940-removebg-preview.png" />
          <h1 className="text-5xl text-[#8d4548] mb-1 font-medium">UPASNA</h1>
          <div className="text-2xl text-[#ca9687] mb-3">weds</div>
          <h1 className="text-5xl text-[#8d4548] font-medium">SUMIT</h1>
        </div>
        <div className="border-t border-[#f0e0e0] mx-6"></div>
        {/* Wedding Details */}
        <div className="px-6 pb-6 text-center">
          <h2 className="text-2xl text-[#5d4037] mb-1 font-medium">THE WEDDING</h2>
          <p className="text-lg text-[#8d6e63] mb-1">Saturday, 12th October, 2024</p>
          <p className="text-lg text-[#8d6e63] mb-1">at half past four in the afternoon</p>
          <p className="text-xl text-[#5d4037] font-medium">Royal Palace · Bangalore</p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f0e0e0] mx-6"></div>

        {/* Photo Sharing Section */}
        <div className="p-6 pb-0 pt-1 text-center">
          <h3 className="text-3xl text-[#8d4548] mb-1 font-medium">𝓢𝓱𝓪𝓻𝓮 𝓨𝓸𝓾𝓻 𝓟𝓱𝓸𝓽𝓸𝓼</h3>
          <p className="text-[#8d6e63] mb-2">Upload and view photos from the wedding day</p>
          
          {!showUploadOptions ? (
            <button 
              onClick={handleUploadClick}
              className="px-8 py-2 bg-[#eec4b8] text-[#8d4548] rounded-full transition-colors text-base shadow-sm"
            >
              Upload Photo
            </button>
          ) : (
            <div className="flex flex-col space-y-3">
            <a href="https://waldophotos.app.link/0DeFeCO02Rb">
              <button 
                // onClick={() => handleOptionSelect('photographer')}
                className="px-6 py-2 bg-[#eec4b8] text-[#8d4548] rounded-full transition-colors text-base shadow-sm"
              >
                I'm a Photographer
              </button>
              </a>
              <a href="https://waldophotos.app.link/tdUqfYMs4Rb">
              <button 
                // onClick={() => handleOptionSelect('guest')}
                className="px-6 py-2 bg-[#eec4b8] text-[#8d4548] rounded-full  transition-colors text-base shadow-sm"
              >
                I'm a Guest
              </button>
              </a>
            </div>
          )}
        </div>

        {/* Photo Gallery */}
        <div className="p-4 bg-white">
          <div className="grid grid-cols-2 gap-3">
            {weddingPhotos.map((photo, index) => (
              <div key={index} className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`${photo}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`} 
                  alt={`Wedding moment ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white p-4 text-center text-black text-sm">
          We look forward to celebrating with you!
        </div>
      </div>
    </div>
  );
};

export default Upasna3;