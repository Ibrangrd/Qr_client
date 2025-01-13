import React from "react";
const NewCateringList = ({img1,It1,img2,It2,img3,It3,he,It4,img4}) => {
  
return (
    <>
    <div className="flex flex-col justify-center text-center bg-[#e9edc9] gap-7 rounded-2xl w-[100%] h-auto min-h-80" >
    <div className="flex sm:pl-6 pl-2">  
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img1}/>
          <p className="text-black font-semibold">{It1}</p>
          <input type="checkbox" name={It1} value={It1} className="square-radio"/>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img2}/>
          <p className="text-black font-semibold">{It2}</p>
          <input type="checkbox" name={It2} value={It2} className="square-radio"/>
        </div>
        <div className={he}>
          <img className="w-14 h-14 rounded-xl" src={img3}/>
          <p className="text-black font-semibold">{It3}</p>
          <input type="checkbox" name={It3} value={It3} className="square-radio"/>
          
        </div>
        <div className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-xl" src={img4}/>
          <p className="text-black font-semibold">{It4}</p>
          <input type="checkbox" name={It4} value={It4} className="square-radio"/>
        </div>

      </div>
      </div>
    </div>
    </>
)




}

export default NewCateringList;