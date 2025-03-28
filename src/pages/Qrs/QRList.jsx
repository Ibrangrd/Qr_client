import QRCard from "./QRCard";

const QRList = ({ qrDetails }) => {

  return (
    <div className="flex px-8  justify-center py-0 sm:py-10 flex-wrap">
      {qrDetails.map((card, idx) => (
        <QRCard key={card.id} info={card} />
      ))}
    </div>
  );
};
export default QRList;
