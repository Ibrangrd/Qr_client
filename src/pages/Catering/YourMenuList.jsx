import React from "react";

const YourMenuList = ({itemName,image,discription}) => {

return(
    <>
    <div className="bg-[#FCF7F8]">
    {/* <div className="flex"> */}
    
    <div className="flex flex-col">
    <div className="felx"></div>
    <p className="text-black">{itemName}</p>
    <img className="w-16" src={image}/> 
    <p className="text-black">{discription}</p>  
    </div>

    

    {/* <div className="flex flex-col">
    <img className="w-16" src={FoodImage1}/>
    <img className="w-16" src={FoodImage2}/>
    <img className="w-16" src={FoodImage3}/>
    </div> */}
    {/* </div> */}


    </div>
    </>
)


}
export default YourMenuList;