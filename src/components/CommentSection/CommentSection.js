import React from "react";

function CommentSection({ selectedVideoDetails }) {
  const { comments } = selectedVideoDetails;

  return (
    <section className="comments">
      {comments.map((comment) => (
        <div className="comments__card">
          <h2 className="comments__user">{comment.name}</h2>
        </div>
      ))}
    </section>
  );
}

export default CommentSection;

/* <div className="comments__card">
        <div className="comments__avy"></div>
        <div className="comments__text-wrapper">
          <h3>{comment.name}</h3>
          <span className="comments__date">{comment.timestamp}</span>
        </div>
        <div className="comments__post">{comment.comment}</div>
      </div> */
