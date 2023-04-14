/* ---------------------------------- */
/* -----------IMPORTS --------------- */
/* ---------------------------------- */

import React from "react";
import { useState, useEffect } from "react";
import videoLong from "../../data/video-details.json";
import videos from "../../data/videos.json";
import SuggestedList from "../../components/SuggestedList/SuggestedList";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/Comments/CommentSection";
import axios from "axios";

/* ---------------------------------- */
/* -------- API BASE & KEY ---------- */
/* ---------------------------------- */
const BaseUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=a2bb68e4-4efe-4f57-aef9-236c3b30f14a";

/* ---------------------------------- */
/* ------ FUNCTION COMPONENT -------- */
/* ---------------------------------- */
function Main() {
  //stateVariable = selectedVideo, setter = setSelectedVideo
  //useState is set to start on the first object in the shorter formatted JSON file
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  //This is the fetch for the video list
  useEffect(() => {
    axios.get(`${BaseUrl}${apiKey}`).then((response) => {
      console.log(response.data);
    });
  }, [setSelectedVideo]);

  //This is the fetch for the video player, i will need the ID for each video for this
  useEffect(() => {
    axios.get(`${BaseUrl}/${apiKey}`).then((response) => {
      console.log(response.data);
    });
  }, [setSelectedVideo]);

  //clickHandler is being setup for the suggested video playlist
  //the parameter is being set to be videoID, this holds the value of what video is being clicked on
  const clickHandler = (videoId) => {
    console.log(videoId);
    const foundVideo = videos.find((video) => video.id === videoId);
    // console.log("this is foundVideo", foundVideo);
    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  //
  const selectedVideoDetails = videoLong.find(
    (video) => video.id === selectedVideo.id
  );
  console.log(`this is the longer array: ${selectedVideoDetails}`);

  /* ---------------------------------- */
  /* -------- RETURN/RENDER ---------- */
  /* ---------------------------------- */
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
