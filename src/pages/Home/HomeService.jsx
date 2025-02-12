import { Link } from "react-router-dom";
import { serviceDetails } from "../../utils";

const HomeService = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <p className="my-4 text-3xl md:text-5xl font-bold text-[#457b9d]">
          OUR SERVICES
        </p>
      </div>

      <div className="shadow-inner rounded-lg w-10/12 h-[20rem] mx-auto flex space-x-4 overflow-x-scroll no-scrollbar">
        {serviceDetails.map((ser) => (
          <div key={ser.id} className="flex-none w-[18rem]">
            <Link to={ser.link}>
            <img
              className="h-[18rem] w-full object-cover rounded-lg shadow-lg hover:scale-105 duration-700"
              src={ser.path}
              alt={ser.title}
            />
             </Link>
            <Link to={ser.link}>
              <p className="text-center text-lg font-bold text-black mt-2">
                {ser.title}
              </p>
            </Link>
          </div>
        ))}
        
      </div>

      <div className="text-center mt-2 sm:mt-4">
        <Link to="/service">
          <button
            className="bg-red-30 border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 h-[3rem] w-[14rem] sm:w-[18rem]"
          >
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
