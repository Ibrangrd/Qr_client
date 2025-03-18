import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Password = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === "aryan") {
      setIsAuthenticated(true); // Update authentication state
      navigate("/photos"); // Redirect to the Photos page
    } else {
      alert("Incorrect password! Please try again.");
    }
  };

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
          RAM Weds SITA
        </h1>
        {/* Space for Animation */}
        <div className="mb-8">
          {/* Add your animation here */}
         <DotLottieReact
         src="https://lottie.host/c099a5ea-c426-4ddc-854f-9516b2e1cd29/HuR2mAybHl.lottie"
         loop
         autoplay
         />
        </div>
        <p className="text-lg mb-4 text-black text-center">
          Enter the password to get photos:
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-purple-500 rounded-lg mb-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Password;