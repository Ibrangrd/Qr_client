import QRList from "./QRList";
import { QRDetails } from "../data/qr-Details"
import { QrWork } from "../data/qr-Details";
import VideoList from "../Videos/VideoList";
const QRSection = () => {

  return (
    <div className="bg-gradient-to-b bg-[#FCF7F8]">
    <div className="p-2 bg-inherit">
      <div className="bg-inherit">
        <div className="text-center">
        <p className="mt-4 text-5xl font-bold text-[#457b9d]">
          QR DESIGN
        </p>
        </div>
        <div className=" mt-10">
        <p className="text-3xl sm:text-4xl font-semibold text-center -mb-16 text-black"> How Qr Works! </p>
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
