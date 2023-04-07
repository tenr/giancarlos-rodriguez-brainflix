import React from "react";
import Title from "../Title/Title";
import Comments from "../Comments/Comments";
import Suggested from "../SuggestedList/SuggestedList";

function Content() {
  return (
    <div>
      <Title />
      <Comments />
      <Suggested />
    </div>
  );
}

export default Content;
