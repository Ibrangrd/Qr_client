import React from "react";
import { menuData } from "../data/CateringMenu";
import YourMenuList from "./YourMenuList";
const YourMenu =()=>{

return(
    <>
   <div className="bg-[#FCF7F8]">
  <div className="sm:text-6xl text-4xl text-center text-[#4E8098] font-bold pt-4 sm:p-4"> VEG MENU </div>
  <div >
  <div className="flex gap-10">
    <p className=""> ITEMS</p>
    <p className="">DISCRIPTION</p>
  </div>
  {
     menuData.map((val) =>{
        return(
            <YourMenuList
            key={val.id}
            ItemsName={val.itemName}
            ItemImage={val.image}
            discription={val.description}
            />
        )
     
    })
  }
  </div>
  </div>
    </>
)
}
export default YourMenu;