import React from "react";

function SuggestedVideo({ clickHandler, video }) {
  return <p onClick={() => clickHandler(video.id)}>{video.title}</p>;
}

export default SuggestedVideo;
