import React from "react";
import avy from "../../assets/images/Mohan-muruge.jpg";
import "../Form/Form.scss";
import plus from "../../assets/icons/add_comment.svg";

function Form({ commentLength }) {
  return (
    <>
      <h3 className="heading">{commentLength} Comments</h3>

      <form action="submit" className="form">
        <img className="form__avy" src={avy} alt="mohan muruge" />
        <div className="form__input-wrapper">
          <p className="form__label">Join the Conversation</p>
          <textarea
            className="form__comment"
            type="text"
            wrap="hard"
            placeholder="Add a new comment"
            name="comment"
            id="text"
          ></textarea>
          <button className="form__button">
            <img
              className="form__button-icon"
              src={plus}
              alt="add comment icon"
            />
            COMMENT
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
