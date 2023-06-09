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
import "./Main.scss";

/* ---------------------------------- */
/* -------- API BASE & KEY ---------- */
/* ---------------------------------- */
// const BaseUrl = "https://project-2-api.herokuapp.com/videos";
// const apiKey = "?api_key=a2bb68e4-4efe-4f57-aef9-236c3b30f14a";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState({});
  //setting list to start at second index of the fetched array
  const [videos, setVideos] = useState([{ id: 1 }]);
  const params = useParams();
  // console.log(params);

  //This is the fetch for the video list on MOUNT and if params change
  //params are set as a dependecy the useEffect hooks second arguement
  useEffect(() => {
    //fetch all videos
    axios.get(`http://localhost:8080/videos/`).then((response) => {
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
      ///VIDEO DATA IS NOT BEING PASSED FOR the NeW VIDEO TO DISPLAY INFO
      if (params.id) {
        axios.get(`http://localhost:8080/videos/${params.id}`).then((res) => {
          console.log(res.data);
          setSelectedVideo(res.data);
        });
        //if the URL does not have an id, we fetch the details for the first video from the initial response.
      } else {
        axios.get(`http://localhost:8080/videos`).then((videos) => {
          // console.log(videos.data);
          setSelectedVideo(videos.data[0]);
        });
      }
    });
  }, [params.id]);

  /* ---------------------------------- */
  /* -------- RETURN/RENDER ---------- */
  /* ---------------------------------- */
  return (
    <>
      <div className="components__video">
        <Video selectedVideo={selectedVideo} />
      </div>
      <div className="components">
        <div className="components__left">
          <div className="components__video-details">
            <VideoDetails selectedVideo={selectedVideo} />
          </div>

          <div>
            <CommentSection selectedVideo={selectedVideo} />
          </div>
        </div>

        <div className="components__suggested">
          <SuggestedList videos={videos} />
        </div>
      </div>
    </>
  );
}

export default Main;
