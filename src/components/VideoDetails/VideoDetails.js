import React from "react";
import "../VideoDetails/VideoDetails.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoDetails({ selectedVideo }) {
  return (
    <>
      <section className="details">
        <h1 className="details__title">{selectedVideo?.title}</h1>
        <div className="details__metric-wrapper">
          <div className="details__metric-1">
            <span className="details__author">By {selectedVideo?.channel}</span>
            <span className="details__date">
              {new Date(selectedVideo?.timestamp).toLocaleDateString()}
            </span>
          </div>
          <div className="details__metric-2">
            <div className="details__views-wrapper">
              <img className="details__icon" src={views} alt="view icon" />
              <span className="details__view-count">
                {selectedVideo?.views}
              </span>
            </div>
            <div className="details__likes-wrapper">
              <img className="details__icon" src={likes} alt="likes icon" />
              <span className="details__like-count">
                {selectedVideo?.likes}
              </span>
            </div>
          </div>
        </div>

        <p className="details__description">{selectedVideo?.description}</p>
      </section>
    </>
  );
}

export default VideoDetails;
