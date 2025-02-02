import React from "react";
const Courier = () => {
  return (
    <div className="bg-white">
      <div>
        <h1 className="text-5xl text-center text-red-300 mb-8">CARDS COURIER</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-16">
        <div className=" ml-16 sm:ml-32 "><img className=" w-[80%] sm:w-[100%] h-64 rounded-3xl sm:rounded-[30px] sm:h-80 p-1 sm:p-4 sm:ml-12 mt-5" src="https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/475324589_122098190282750552_8068783664855930713_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EqERZh-nWOMQ7kNvgEBxBKA&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=ALoB5jUhVL3JbZVYfPk7FKT&oh=00_AYDBZX_6laO4V4BONjTnyfkDjdMqTaTrZn4E7qri7AZFqg&oe=679F1299" /></div>
        <div className="w-auto ">
        <div><p className=" text-black mt-[10%] text-center font-semibold sm:text-2xl sm:p-2 p-0">PROVIDE US WITH THE ADDRESS, AND WE WILL DELIVER YOUR CARDS.</p></div> 
        <div className="flex text-center justify-center">
        <div><p className="text-black text-center pt-2 pr-2 pb-2  text-xl font-semibold"> Price:- ₹55 </p></div>
        <div> <p className=" text-center text-xs text-black mt-[15px]">/per card</p></div>
        </div>
        <div className="text-black text-center p-2 text-xl font-semibold"> Range:- All over INDIA</div>
        </div>
      </div>
   
   <div className=" text-black text-center text-xl font-bold p-2"> <p> For any Queries </p></div>
   <div className=" text-black text-center text-xl font-bold"> <p> Conatct Us </p></div>
   <div className="  ml-[0%] md:ml-[35%] flex gap-6 p-6" >
        <h2 className=" text-black hidden sm:block text-xl font-bold"> Mobile no. :- </h2>
        <p className="text-[#ef233c] font-bold" >9832704206</p>
        <p className="text-[#ef233c] font-bold">6200339631</p>
        <p className="text-[#ef233c] font-bold">9508853398</p>
        </div>

     
      
    </div>
  );
};
export default Courier;
