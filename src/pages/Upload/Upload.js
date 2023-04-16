import React from "react";
import "../../styles/partials/_globals.scss";
import "../Upload/Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

function Upload() {
  // attempt to get pop-up

  //const handleSubmit = (event) => {
  //   event.preventDefault();

  //     <h1>PLEASE FILL OUT ALL FIELDS 🕵🏽‍♂️ </h1>

  // };

  return (
    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>

      <div className="upload__thumbnail-wrapper">
        <span className="upload__thumbnail-heading">VIDEO THUMBNAIL</span>
        <img src={thumbnail} alt="" className="upload__thumbnail-img" />
      </div>

      <form
        className="upload__form"
        // onSubmit={handleSubmit}>
      >
        <label htmlFor="" className="upload__title-label">
          TITLE YOUR VIDEO
          <input
            placeholder="Add a title to your video"
            type="text"
            className="upload__title-input"
          />
        </label>

        <label htmlFor="" className="upload__description-label">
          ADD A VIDEO DESCRIPTION
          <input
            placeholder="Add a description to your video"
            type="text"
            className="upload__description-input"
          />
        </label>
        <div className="upload__btn-wrapper">
          <button className="upload__publish-btn" type="submit">
            <img src={uploadIcon} />
            <span>Publish</span>
          </button>

          <button className="upload__cancel-btn" type="reset">
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}

export default Upload;
