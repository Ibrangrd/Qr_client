import { HOME_IMG } from "../utils";
const HomeTop = () => {
  return (
    <div className="flex justify-center bg-inherit pb-4">
      <img
      className="md:w-[100%] md:h-[700px] mask-half-1 md:shadow-2xl shadow-md shadow-red-600"
       src={HOME_IMG}></img>
    </div>
  );
};

export default HomeTop;