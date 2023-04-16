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
import { useParams } from "react-router-dom";

/* ---------------------------------- */
/* -------- API BASE & KEY ---------- */
/* ---------------------------------- */
const BaseUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=a2bb68e4-4efe-4f57-aef9-236c3b30f14a";

/* ---------------------------------- */
/* ------ FUNCTION COMPONENT -------- */
/* ---------------------------------- */
function Main() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([{ id: 1 }]);
  const params = useParams();
  // console.log(params);

  //This is the fetch for the video list on MOUNT and if params change
  useEffect(() => {
    //fetch all videos
    axios.get(`${BaseUrl}${apiKey}`).then((response) => {
      //once we have response, we need to filter out a "selected" video
      const filteredData = response.data.filter((video) => {
        //if the URL has an ID, that ID now represents our "selected" video
        if (params.id) {
          return video.id !== params.id;
          //if the URL does NOT have an ID, the first video from the response represents our "selected" video
        } else {
          return video.id !== response.data[0].id;
        }
      });
      //set state for all videos
      setVideos(filteredData);
      //if URL has an id, we fetch the details for that id
      if (params.id) {
        axios.get(`${BaseUrl}/${params.id}${apiKey}`).then((video) => {
          setSelectedVideo(video.data);
        });
        //if the URL does not have an id, we fetch the details for the first video from the initial response.
      } else {
        axios
          .get(`${BaseUrl}/${response.data[0].id}${apiKey}`)
          .then((video) => {
            setSelectedVideo(video.data);
          });
      }
    });
  }, [params.id]);

  /* ---------------------------------- */
  /* -------- RETURN/RENDER ---------- */
  /* ---------------------------------- */
  return (
    <>
      <div>
        <Video selectedVideo={selectedVideo} />
        <VideoDetails selectedVideo={selectedVideo} />
        <CommentSection selectedVideo={selectedVideo} />
        <SuggestedList videos={videos} />
      </div>
    </>
  );
}

export default Main;
