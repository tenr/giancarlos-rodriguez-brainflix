import React from "react";
import SuggestedVideo from "../SuggestedVideo/SuggestedVideo";

function SuggestedList({ clickHandler, videos }) {
  return (
    <section className="nav">
      {videos.map((video) => (
        <div key={video.id}>
          <SuggestedVideo
            key={video.id}
            video={video}
            clickHandler={clickHandler}
          />
        </div>
      ))}
    </section>
  );
}

export default SuggestedList;
