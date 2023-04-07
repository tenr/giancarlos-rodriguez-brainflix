import React from "react";
import "../Video/Video.scss";

function Video({ selectedVideo }) {
  const { image } = selectedVideo;
  return (
    <section className="video">
      <video className="video__player" poster={image} controls></video>
    </section>
  );
}

export default Video;
