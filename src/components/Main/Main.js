import React from "react";
import { useState } from "react";
import videoLong from "../../data/video-details.json";
import videos from "../../data/videos.json";
import SuggestedList from "../SuggestedList/SuggestedList";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentSection from "../Comments/CommentSection";

function Main() {
  //stateVariable = selectedVideo, setter = setSelectedVideo
  //useState is set to start on the first object in the shorter formatted JSON file
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  //clickHandler is being setup for the suggested video playlist
  //the parameter is being set to be videoID, this holds the value of what video is being clicked on
  //
  const clickHandler = (videoId) => {
    console.log(videoId);
    const foundVideo = videos.find((video) => video.id === videoId);
    console.log("this is foundVideo", foundVideo);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  //
  const selectedVideoDetails = videoLong.find(
    (video) => video.id === selectedVideo.id
  );
  // console.log(selectedVideoDetails);
  return (
    <>
      <Video selectedVideo={selectedVideoDetails} />
      <div>
        <VideoDetails selectedVideoDetails={selectedVideoDetails} />

        <CommentSection selectedVideoDetails={selectedVideoDetails} />
        <SuggestedList clickHandler={clickHandler} videos={filteredVideos} />
      </div>
    </>
  );
}

export default Main;
