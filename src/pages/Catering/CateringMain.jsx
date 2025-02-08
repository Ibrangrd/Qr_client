import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { CateringMainData } from "../../data/CateringMainData";
const CateringMain = () => {
  return (
    <>
      <div className="bg-[#FCF7F8]">
        <div className="flex justify-center text-center">
          <div className=" pt-4 sm:p-4">
            <img
              className="sm:w-44 w-44"
              src="https://i.ibb.co/pWYZw3m/c8.png"
            />
          </div>
          <div className="sm:text-8xl text-4xl text-center text-[#4E8098] font-bold pt-4 sm:p-4">
            
            CATERING
          </div>
          <div className=" pt-4 sm:p-4 ">
            
            <img
              className="sm:w-44 w-44"
              src="https://i.ibb.co/t8qK9jf/c7.png"
            />
          </div>
        </div>
        <div className="text-center sm:text-6xl text-2xl font-bold mb-10 text-black">
          ＯＵＲ ＰＡＲＴＮＥＲＳ
        </div>

        <div className="flex flex-col sm:flex-row justify-center p-2 sm:p-10 h-auto gap-10 pb-16">
          {CateringMainData.map((val, index) => (
            <div
              key={index}
              className="flex flex-col w-[100%] sm:w-[30%] h-auto justify-center text-center text-box2 rounded-2xl bg-white gap-4 pt-4 pb-4"
            >
              <img
                className="m-auto h-[70%] w-[90%] rounded-xl boxShadow "
                src={val.img}
              />
              <h1 className="text-3xl pt-6 font-bold text-black">{val.shop}</h1>
              <p className="text-xl font-normal text-black">{val.dis}</p>
              <Tooltip className="text-5xl" title="CLICK">
                <Link to={val.link}>
                  <Button
                    className="w-52 pb-10 h-12 hover:bg-[#caf0f8] hover:text-red-700 text-box6"
                    variant="outlined"
                  >
                    VIEW
                  </Button>
                </Link>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CateringMain;
