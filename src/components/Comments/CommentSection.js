import React from "react";
import "./CommentSection.scss";

import Form from "../Form/Form";

function CommentSection({ selectedVideo }) {
  //destructruing selectedVideo to get the array of comments
  const { comments } = selectedVideo;

  return (
    <section className="comments">
      {/* passing in a prop called commentLength and passing in the value of {comments.length} to just have the length of this array */}
      <Form commentLength={comments && comments?.length} />
      {comments &&
        comments?.map((comment) => (
          <div key={comment.id} className="comments__card">
            <div className="comments__avy"></div>
            <div className="comments__grand-wrapper">
              <div className="comments__wrapper-1">
                <span className="comments__user">{comment.name}</span>
                <span className="comments__date">
                  {new Date(comment?.timestamp).toLocaleDateString()}
                </span>
              </div>
              <div className="comments__wrapper-2">
                <p className="comments__user-comment">{comment?.comment}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default CommentSection;
