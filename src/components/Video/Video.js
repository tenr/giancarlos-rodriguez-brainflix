import React from "react";
import "../Video/Video.scss";

function Video({ selectedVideo }) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={"http://localhost:8080/videos/" + selectedVideo?.image}
        controls
      ></video>
    </section>
  );
}

export default Video;
