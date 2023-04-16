import React from "react";
import "../Video/Video.scss";

function Video({ selectedVideo }) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={selectedVideo?.image}
        controls
      ></video>
    </section>
  );
}

export default Video;
