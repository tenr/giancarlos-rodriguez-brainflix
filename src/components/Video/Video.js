import React from "react";

function Video({ selectedVideo }) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={selectedVideo.image}
        controls
      ></video>
      <h1 className="video__title">{selectedVideo.title}</h1>
    </section>
  );
}

export default Video;
