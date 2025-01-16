import { useState } from "react";
import QrCards from "./QrCards";

const CardSection = () => {
  const [showCategory, setShowCategory] = useState("All");
  const [price, setPrice] = useState(10000);
  const [pageNumber, setPageNumber] = useState(1);
  const cardPerPage = 9;
  return (
    <div className="bg-gradient-to-b from-[#d6f1f6] to-[#b0c4b1]">
    <div className="p-2 ">
      <div className="text-center">
      <p className="mt-4 pb-10 sm:text-5xl text-4xl font-bold text-[#457b9d]">
              QR SPECIAL CARDS
            </p>

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
        <QrCards
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

export default CardSection;