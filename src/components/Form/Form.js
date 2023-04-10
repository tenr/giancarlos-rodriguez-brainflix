import React from "react";
import avy from "../../assets/images/Mohan-muruge.jpg";

function Form({ commentLength }) {
  return (
    <>
      <h3>{commentLength} Comments</h3>
      <form action="submit" className="form">
        <img className="form__avy" src={avy} alt="mohan muruge" />
        <p>Join the Conversation</p>
        <textarea
          class="form-wrapper__comment"
          type="text"
          wrap="hard"
          placeholder="Add a new comment"
          name="comment"
          className="form__text"
          id="text"
          cols="30"
          rows="10"
        ></textarea>
        <button className="form__button">COMMENT</button>
      </form>
    </>
  );
}

export default Form;
