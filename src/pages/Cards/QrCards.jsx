import Card from "./Card";
import { QrCardsData } from "../../data/QrCardsData";
import { useEffect, useState } from "react";
import Pagination from '../Pagination'
const CardList = ({ showCategory, price , pageNumber, cardPerPage,setPageNumber }) => {
  console.log(price);
  
  if (price === "") price = 10000;
  const [cardToShow, setCardToShow] = useState([]);

  useEffect(() => {
    const filteredCards = QrCardsData.filter(
      (card) =>
        (showCategory === "All" || card?.cat === showCategory) &&
        card?.price <= price
    );
    setCardToShow(filteredCards);
  }, [showCategory, price]);

  // Calculate indices for pagination
  const indexOfLastItem = pageNumber * cardPerPage;
  const indexOfFirstItem = indexOfLastItem - cardPerPage;
  const currentCards = cardToShow.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex px-2 md:px-9 justify-center md:py-10 flex-wrap">
      {currentCards.map((card) => (
        <Card key={card.id} info={card} />
      ))}
      <Pagination pageNumber ={pageNumber}  setPageNumber = {setPageNumber} cardToShow= {cardToShow}
      cardPerPage={cardPerPage}/>
    </div>
  );
};

export default CardList;