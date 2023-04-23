import React from "react";
import "../SuggestedVideo/SuggestedVideo.scss";
import { Link } from "react-router-dom";

function SuggestedVideo({ video }) {
  console.log(video.image);

  return (
    <Link to={`/video/${video.id}`}>
      <div className="card" key={video.id}>
        <div className="card__left">
          <img
            className="card__image"
            //harcoding the url to the backend
            src={"http://localhost:8080/videos/" + video.image}
            alt="image description"
          />
        </div>
        <div className="card__right">
          <h4 className="card__title">{video.title}</h4>
          <span className="card__author">{video.channel}</span>
        </div>
      </div>
    </Link>
  );
}

export default SuggestedVideo;
