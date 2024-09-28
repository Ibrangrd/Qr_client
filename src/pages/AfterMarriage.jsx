import React from "react";

const Memories = () => {
  return (
    <>
      <div className="bg-green-50">
        <div className="text-center text-xl p-5 font-semibold text-yellow-700">
          MEMORIES AFTER MARRIAGE
        </div>
        <div className="text-center text-xl font-bold text-pink-600 mb-[50px]">
          {" "}
          SAMPLE'S{" "}
        </div>

        <div className="mb-10">
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/RmbPXr5cLRw?si=oX7bHnvGqgEIuKsS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div className="">
            <div className="flex gap-[10px] ml-6 mb-6">
              <img
                className="object-cover rounded-3xl w-[45%] h-[300px]"
                src="https://i.ibb.co/x5q29r7/ph1.jpg"
              />
              <img
                className="object-cover rounded-3xl w-[45%] h-[300px]"
                src="https://i.ibb.co/yS0swh5/ph2V.jpg"
              />
            </div>
            <div className="flex gap-[10px] ml-6 mb-6">
              <img
                className="object-cover rounded-3xl w-[45%] h-[300px]"
                src="https://i.ibb.co/pR80QrN/ph3V.jpg"
              />
              <img
                className="object-cover rounded-3xl w-[45%] h-[300px]"
                src="https://i.ibb.co/86qZ3TX/ph6V.jpg"
              />
            </div>
          </div>
          <div className=" ml-4 pb-6">
            <img
              className=" object-cover mb-10 rounded-3xl w-[95%] h-[250px]"
              src="https://i.ibb.co/dgbrrKL/ph4H.jpg"
            />
            <img
              className=" object-cover rounded-3xl w-[95%] h-[250px]"
              src="https://i.ibb.co/vhXhWwy/ph5H.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Memories;
