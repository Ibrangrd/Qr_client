// import React, { useState } from "react";
// import PhotosPage from "./Photopage";
// const Password = ({ setIsAuthenticated }) => {
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     if (password === "aryan") {
//       setIsAuthenticated(true); // Show the Photos page
//     } else {
//       alert("Incorrect password! Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#FCF7F8]">
//       <h1 className="text-4xl text-black font-bold mb-4">RAM Weds Sita</h1>
//       <p className="text-lg mb-4">Enter the password to proceed:</p>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter password"
//         className="px-4 py-2 border bg-[#FCF] rounded-lg mb-4"
//       />
//       <button
//         onClick={handleSubmit}
//         className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Password;