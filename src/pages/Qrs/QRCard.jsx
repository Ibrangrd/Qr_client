const QRCard = ({ info }) => {
  console.log(info);
  return (
    <div className="mx-1 my-5 group rounded-lg hover:scale-110 duration-500   p-2  h-[25rem]  flex flex-col items-center">
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
