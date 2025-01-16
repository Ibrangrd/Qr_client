import { useState } from "react";
import CardList from "./CardList";

const CardMahalSection = () => {
  const [showCategory, setShowCategory] = useState("All");
  const [price, setPrice] = useState(10000);
  const [pageNumber, setPageNumber] = useState(1);
  const cardPerPage = 9;
  return (
    <div className="bg-gradient-to-b bg-[#dbecef]">
    <div className="p-2 ">
      <div className="text-center">
        <p className="mt-4  sm:text-5xl text-4xl font-bold text-[#457b9d]">
          WEDDING CARDS
        </p>
        <div className=" flex flex-col text-right">
        <div><p className=" text-black font-bold"> CARD MAHAL </p> </div>
       <div className=" ml-[80%] sm:ml-[95%]">
        <a href="https://maps.app.goo.gl/8v9CmUsB5avWYP1v9" target="_blank">
          <img className="w-10" src="https://iili.io/dL52914.png"/>
        </a>
        </div>
        </div>

        <div className="flex md:px-20 px-2 justify-between md:w-3/4 py-2">
          <div className="flex mx-2">
            <label className="font-bold md:block hidden text-black text-lg md:text-2xl  my-auto mr-4">
              Religion:
            </label>
            <select
              className="select select-secondary w-full max-w-xs"
              onChange={(e) => setShowCategory(e.target.value)}
            >
              <option disabled defaultValue>
                {"Choose a religion you're looking for"}
              </option>
              <option>All</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="flex mx-4">
            <label className="font-bold md:block hidden text-black text-lg md:text-2xl  my-auto mr-4">
              Price:
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered input-secondary w-full max-w-xs"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <CardList
          showCategory={showCategory}
          price={price}
          pageNumber={pageNumber}
          cardPerPage={cardPerPage}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
    </div>
  );
};

export default CardMahalSection;