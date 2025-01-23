import VideoList from "./VideoList";
import { videoDetails } from "../data/VideoDetails";
const VideoSection = () => {
  return (
    <div className="bg-gradient-to-b bg-[#FCF7F8]">
    <div className="md:p-2 p-1">
      <div className="bg-inherit">
        <div className="text-center">
          <p className="mt-4 text-5xl font-bold text-[#1a759f]">
            VIDEOS
          </p>
        </div>
        <div>
          <VideoList videoDetails={videoDetails} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoSection;