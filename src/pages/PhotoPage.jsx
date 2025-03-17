// const PhotosPage = () => {
//     const [isDownloading, setIsDownloading] = useState(false);
  
//     const handleDownload = () => {
//       setIsDownloading(true);
//       setTimeout(() => {
//         setIsDownloading(false);
//         alert("Your photos have been downloaded!");
//       }, 2000); // Simulate a 2-second download process
//     };
  
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-4xl font-bold mb-8">Photos</h1>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//           {[1, 2, 3, 4, 5, 6].map((photo) => (
//             <img
//               key={photo}
//               src={`https://via.placeholder.com/200?text=Photo+${photo}`} // Placeholder images
//               alt={`Photo ${photo}`}
//               className="w-48 h-48 object-cover rounded-lg shadow-md"
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleDownload}
//           className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//         >
//           {isDownloading ? "Downloading..." : "Click here to download the photos"}
//         </button>
//       </div>
//     );
//   };
  
//   export default PhotosPage;