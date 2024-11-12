import QRList from "./QRList";
import { QRDetails } from "../data/qr-Details"
import { QrWork } from "../data/qr-Details";
import VideoList from "../Videos/VideoList";

const QRSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#3c6e71] to-[#bfd7ea]">
    <div className="p-2 bg-inherit">
      <div className="bg-inherit">
        <div className="text-center">
        <p className="mt-4 text-5xl font-bold bg-gradient-to-r from-purple-400 via-yellow-400 to-sky-400 inline-block text-transparent bg-clip-text ">
          QR DESIGN
        </p>
        </div>
        <div className=" mt-10">
        <p className="text-4xl font-semibold text-center -mb-16 text-orange-300"> How Qr Works! </p>
        <div>
        <VideoList videoDetails={QrWork} />
        </div>
        </div>
        <QRList qrDetails={QRDetails} />
      </div>
    </div>
    </div>
  );
};

export default QRSection;
