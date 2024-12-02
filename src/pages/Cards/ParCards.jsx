import React from "react";
import { Link } from "react-router-dom";
import { Home2Data } from "../../utils";
import Button from '@mui/material/Button';
const ParCards = () => {
  return (
 <>  
 <div className="text-center bg-white">
       {/* <div className="flex flex-col"> */}
        <p className="mt-4 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text">
          WEDDING CARDS
        </p>
      <p className="mt-4  text-3xl font-bold text-[#dda15e] text-shadow-ib"> Our Partners
      </p>
      {/* </div> */}
 <div className="pt-16 flex flex-wrap justify-center gap-16 pb-16">
     {
     Home2Data.map((ibr) => (
     <div className="sm:w-[25%] w-[85%] h-auto  rounded-3xl bg-[#f2e0cc] border-4 border-[#ffb7c3]"> 
        <div>
          <img className=" w-[100%] h-64 rounded-3xl p-4 " src={ibr.img} />
          <div className="" >
            <h1 className="text-center font-bold text-[#c52233] text-xl pb-5 pt-2 text-shadow-cards">
              {ibr.fun}
            </h1>
            <div className="flex justify-center mb-4">
            <Link to={ibr.lin}>
              {/* <button
                class="rounded-md border w-32 font-semibold  border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              > VIEW</button> */}
              <Button variant="contained" className="w-44 h-12 bg-blue-500 hover:bg-blue-450 hover:text-[#ffd500]" >VIEW</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
     ))
     }
     </div>
     </div>
 </>
  )
}
export default ParCards;

