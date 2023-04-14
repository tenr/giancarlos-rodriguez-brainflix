import React from "react";
import SuggestedVideo from "../SuggestedVideo/SuggestedVideo";
import "../SuggestedList/SuggestedList.scss";

function SuggestedList({ clickHandler, videos }) {
  return (
    <section className="suggested">
      <span className="suggested__heading">NEXT VIDEOS</span>
      {videos.map((video) => (
        <SuggestedVideo
          key={video.id}
          video={video}
          clickHandler={clickHandler}
        />
      ))}
    </section>
  );
}

export default SuggestedList;
