import React from "react";
import "../VideoDetails/VideoDetails.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoDetails({ selectedVideoDetails }) {
  return (
    <>
      <section className="details">
        <h1 className="details__title">{selectedVideoDetails.title}</h1>
        <div className="details__metric-wrapper">
          <div className="details__metric-1">
            <span className="details__author">
              {selectedVideoDetails.channel}
            </span>
            <span className="details__date">
              {new Date(selectedVideoDetails.timestamp).toLocaleDateString()}
            </span>
          </div>
          <div className="details__metric-2">
            <div className="details__views-wrapper">
              <img className="details__icon" src={views} alt="view icon" />
              <span className="details__view-count">
                {selectedVideoDetails.views}
              </span>
            </div>
            <div className="details__likes-wrapper">
              <img className="details__icon" src={likes} alt="likes icon" />
              <span className="details__like-count">
                {selectedVideoDetails.likes}
              </span>
            </div>
          </div>
        </div>

        <p className="details__description">
          {selectedVideoDetails.description}
        </p>
      </section>
    </>
  );
}

export default VideoDetails;
