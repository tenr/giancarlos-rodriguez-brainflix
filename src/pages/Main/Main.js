/* ---------------------------------- */
/* -----------IMPORTS --------------- */
/* ---------------------------------- */

import React from "react";
import { useState, useEffect } from "react";
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
  const [selectedVideo, setSelectedVideo] = useState([]);

  //video list state variable - this is working now. yay!
  const [videos, setVideos] = useState([]);

  //This is the fetch for the video list
  useEffect(() => {
    axios.get(`${BaseUrl}${apiKey}`).then((response) => {
      setVideos(response.data);
      setSelectedVideo(response.data[0]);
      clickHandler(response.data[0].id);
    });
  }, []);

  //This is the fetch for the video player, i will need the ID for each video for this
  // useEffect(() => {
  //   axios.get(`${BaseUrl}/${apiKey}`).then((response) => {
  //     setSelectedVideo(response.data[0]);
  //   });
  // }, []);

  console.log(selectedVideo);

  //clickHandler is being setup for the suggested video playlist
  //the parameter is being set to be videoID, this holds the value of what video is being clicked on
  const clickHandler = (videoId) => {
    axios.get(`${BaseUrl}/${videoId}${apiKey}`).then((response) => {
      setSelectedVideo(response.data);
    });
    console.log(videoId);
    const foundVideo = videos.find((video) => video.id === videoId);
    // console.log("this is foundVideo", foundVideo);
    setSelectedVideo(foundVideo);
  };

  //This makes sure that video in the player is not in the list
  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  // const selectedVideoDetails = videoLong.find(
  //   (video) => video.id === selectedVideo.id
  // );
  // console.log(`this is the longer array: ${selectedVideoDetails}`);

  /* ---------------------------------- */
  /* -------- RETURN/RENDER ---------- */
  /* ---------------------------------- */
  return (
    <>
      <div>
        <Video selectedVideo={selectedVideo} />
        <VideoDetails selectedVideo={selectedVideo} />

        <CommentSection selectedVideo={selectedVideo} />
        <SuggestedList clickHandler={clickHandler} videos={filteredVideos} />
      </div>
    </>
  );
}

export default Main;
