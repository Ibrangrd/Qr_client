import AOS from "aos";
import "aos/dist/aos.css";
const Newqrcardslist = ({ path,title,price,des }) => {

  return (
    <div className=" w-[100%]" data-aos="flip-right">
      <div className="group  md:px-5 py-5">
        <div
          className={`mx-1 my-5 group rounded-lg shadow-lg scale-110 sm:scale-110 sm:hover:scale-[1.12] hover:shadow-gray-300 duration-700 ease-in-out p-2 flex flex-col items-center `}
        >
          <img
            className="h-[15rem] sm:h-[20rem] w-11/12 rounded-lg scale-110 sm:scale-100 sm:group-hover:scale-105 duration-700 pb-2 pt-1"
            src={path}
          ></img>
          <div className="flex justify-between p-2 w-full">
            <p className="text-lg sm:text-3xl font-bold text-[#C75B7A]">
              {title}
            </p>
            <p className="text-lg sm:text-xl font-bold text-green-500">
            ₹{price}
            </p>
          </div>
          {/* <p className=" hidden sm:block opacity-0 group-hover:opacity-100 duration-700 ease-in-out  font-mono text-gray-500">
            {des}
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default Newqrcardslist;  