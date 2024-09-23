import VideoCard from "./VideoCard";

const VideoList = ({videoDetails}) => {
  return (
    <div className="flex   justify-center py-10 flex-wrap  ">
      {videoDetails.map((card) => (
        <VideoCard key={card?.id} info={card} />
      ))}
     
    </div>
  );
};

export default VideoList;
