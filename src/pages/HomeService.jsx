import { Link } from "react-router-dom";
import { serviceDetails } from "../utils";
const HomeService = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <p className="my-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text ">
          OUR SERVICES
        </p>
      </div>
      <div className="shadow-inner rounded-lg w-10/12 h-[20rem] mx-auto flex overflow-x-scroll no-scrollbar">
        {serviceDetails.map((ser) => (
          <img
            className="h-[18rem] w-[20rem] my-auto rounded-lg shadow-lg mx-2 hover:scale-105 duration-700"
            key={ser.id}
            src={ser.path}
          ></img>
        ))}
      </div>
      <div className="text-center">
        <Link to="/service" >
          <button
           className="mt-2 bg-red-30 border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300  h-[3rem] w-[18rem]"
           >
           VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
