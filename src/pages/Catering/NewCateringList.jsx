import React from "react";
const NewCateringList = ({Item,img1,It1,img2,It2,img3,It3,he}) => {
return (
    <>
    
    <div className="flex flex-col justify-center text-center bg-[#7b2929] gap-7 rounded-2xl w-[100%] h-auto min-h-80" >
    <div className="flex sm:pl-6 pl-2">  
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img1} alt="Item1" />
          <p>{It1}</p>
          <input type="checkbox" name={Item} value={Item} className="square-radio"/>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img2} alt="Item2" />
          <p>{It2}</p>
          <input type="checkbox" name={Item} value="paneer1" className="square-radio"/>
        </div>
        <div className={he}>
          <img className="w-14 h-14 rounded-xl" src={img3} alt="Item1" />
          <p>{It3}</p>
          <input type="checkbox" name={Item} value={Item} className="square-radio"/>
          
        </div>
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img2} alt="Item2" />
          <p>{It2}</p>
          <input type="checkbox" name={Item} value={Item} className="square-radio"/>
        </div>

      </div>
      </div>
    </div>
    </>
)




}

export default NewCateringList;