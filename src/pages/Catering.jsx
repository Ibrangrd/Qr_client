import React from "react";
import "./Catering.css"
import { useState } from "react";
import { Cateringdata } from "./data/Cateringdata";
import { Cateringpricedata } from "./data/Cateringdata";
import CateringList from "./CateringList";
import CateringPrice from "./data/CateringPrice";
import { RiTestTubeFill } from "react-icons/ri";
 
const Catering = () => {
return (
<>
<div className="bg-white">
<div className="sm:text-8xl text-5xl text-center text-black font-bold pt-4 "> 𝒞𝒜𝒯𝐸𝑅𝐼𝒩𝒢 </div>
<div className="text-center sm:text-6xl text-3xl pt-10 mb-10 text-[#a7c957] "> 𝕆𝕌ℝ 𝕄𝔼ℕ𝕌 </div>
 
<div className="p-4 ml-[10%] pt-12 pb-12 flex-wrap justify-evenly w-[80%] rounded-3xl bg-[#eef4ed] flex flex-row gap-14"> 

{/* BOX  */}

{ Cateringdata.map((value)=>{
 return(
< CateringList
key={value.id}
Item={value.Item}
img1={value.img1}
It1={value.It1}
img2={value.img2}
It2={value.It2}
img3={value.img3}
It3={value.It3}
he={value.he}
/>
);
})}

</div>
<div className="text-center text-4xl sm:text-6xl pt-10 pb-10 text-[#ee6c4d]">ADDITIONAL OPTIONS</div>

<div className="p-4 ml-[10%] pt-12 pb-12 flex-wrap justify-evenly w-[80%] rounded-3xl bg-[#eef4ed] flex flex-row gap-14" data-aos="zoom-in">
        {Cateringpricedata.map((value) => {
          return(
          <
            CateringPrice
            key={value.id}
            Item={value.Item}
            price={value.price}
            img1={value.img1}
            It1={value.It1}
            img2={value.img2}
            It2={value.It2}
            img3={value.img3}
            It3={value.It3}
            he={value.he}
          />
          );
        })}
      </div>

{/* <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="text-center text-4xl pt-10 pb-10">Total Amount: ₹{totalAmount}</div> */}

</div>
</>


);



};
export default Catering;