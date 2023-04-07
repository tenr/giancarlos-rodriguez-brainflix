import React from "react";
import { useState } from "react";
// import Video from "../Video/Video";
// import Content from "../Content/Content";
import videoLong from "../../data/video-details.json";
import videos from "../../data/videos.json";
import SuggestedList from "../SuggestedList/SuggestedList";
import Video from "../Video/Video";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  const clickHandler = (videoId) => {
    const foundVideo = videos.find((video) => video.id === videoId);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter((video) => video.id !== selectedVideo);

  //
  const selectedVideoDetails = videoLong.find(
    (video) => video.id === selectedVideo.id
  );

  return (
    <>
      <Video selectedVideo={selectedVideoDetails} />
      <div>
        {/* this would take in a prop called selectedVideoDetails and then you pass those props into all the tag elements  */}
        <VideoDetails />
        <SuggestedList clickHandler={clickHandler} videos={filteredVideos} />
      </div>
    </>
  );
}

export default Main;
