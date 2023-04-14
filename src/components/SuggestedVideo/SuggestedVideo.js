import React from "react";
import "../SuggestedVideo/SuggestedVideo.scss";

function SuggestedVideo({ video }) {
  // console.log(video);
  return (
    <div className="card" key={video.id}>
      <div className="card__left">
        <img className="card__image" src={video.image} alt="" />
      </div>
      <div className="card__right">
        <h4 className="card__title">{video.title}</h4>
        <span className="card__author">{video.channel}</span>
      </div>
    </div>
  );
}

export default SuggestedVideo;
