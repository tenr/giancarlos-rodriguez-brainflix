import React from "react";
import videos from "../../data/video-details.json";
import { useState } from "react";

function Video() {
  //Declaring state variable to store the "selectedVideo"
  //Initialize th selectedVideo state vairable w/ the first item in the array
  const [selectedVideo, setSelectedVideo] = useState(videos[0].video);

  //Suggested Video Section Logic
  //Filtering through the array to check if the video is the selected video
  //IF IT IS, then we want to remove that selectedVideo from the array
  //map filteredArray in video suggestion section
  const filteredArray = videos.filter((video) => video.video !== selectedVideo);

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <section className="video">
      <video className="video__player" poster={selectedVideo} controls></video>
      <h1 className="video__title">{selectedVideo.title}</h1>
      <section className="suggestions">
        {filteredArray.map((video) => {
          return (
            <div
              className="suggestions__video"
              onClick={() => handleClick(video.image)}
            ></div>
          );
        })}
      </section>
    </section>
  );
}

export default Video;
