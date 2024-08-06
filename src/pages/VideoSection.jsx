import VideoList from "./VideoList";
import { videoDetails } from "../utils";
const VideoSection = () => {
  return (
    <div className="p-2 bg-inherit ">
      <div className="bg-inherit">
        <div className="text-center">
          <p className="mt-4 text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text">
            VIDEOS
          </p>
        </div>
        <div>
          <VideoList videoDetails={videoDetails} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
