import AOS from "aos";
import "aos/dist/aos.css";
const QRCard = ({ info }) => {
  console.log(info);
  return (
    <div className="mx-1 sm:my-0 group rounded-lg hover:scale-110 duration-500 p-2 sm:h-[25rem] h-[20rem]  flex flex-col items-center" data-aos="zoom-in-left">
      <img
        className="h-[16rem]  sm:h-[20rem] w-11/12 rounded-lg "
        src={info?.path}
      ></img>
      <div className="flex justify-between p-2 w-full">
        <p className="text-lg font-bold text-[#FF4E88]">{info.title}</p>
        <p className="text-lg font-bold text-green-500"> Rs {info.price}</p>
      </div>
    </div>
  );
};

export default QRCard;
