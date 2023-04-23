import React from "react";
import "../../styles/partials/_globals.scss";
import "../Upload/Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Upload() {
  const alert = (
    <Alert severity="success">Upload Successful — check it out!</Alert>
  );
  const navigate = useNavigate();

  const [alertActive, setAlertActive] = useState(false);

  function HideAlert() {
    return <div></div>;
  }
  function ShowAlert() {
    return alert;
  }

  function CheckAlert(props) {
    const isAlert = props.isAlert;
    if (isAlert) {
      return <ShowAlert />;
    }
    return <HideAlert />;
  }

  const alertClickHandler = (e) => {
    e.preventDefault();

    //grab data from form
    //console log the data
    //then run axios post
    //this should add the posted video to the video.json
    setAlertActive(true);
    setTimeout(() => {
      setAlertActive(false);
      navigate("/");
    }, 1900);
  };

  return (
    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__desktop-wrapper">
        <div className="upload__thumbnail-wrapper">
          <span className="upload__thumbnail-heading">VIDEO THUMBNAIL</span>
          <img src={thumbnail} alt="" className="upload__thumbnail-img" />
        </div>

        <form
          className="upload__form"
          // onSubmit={handleSubmit}
        >
          <label htmlFor="upload-title" className="upload__title-label">
            TITLE YOUR VIDEO
            <input
              name="upload-title"
              placeholder="Add a title to your video"
              type="text"
              className="upload__title-input"
            />
          </label>

          <label
            htmlFor="upload-description"
            className="upload__description-label"
          >
            ADD A VIDEO DESCRIPTION
            <input
              name="upload-description"
              placeholder="Add a description to your video"
              type="text"
              className="upload__description-input"
            />
          </label>
        </form>
      </div>
      <div className="upload__btn-wrapper">
        <Link to="/">
          <button
            className="upload__publish-btn"
            type="submit"
            onClick={alertClickHandler}
          >
            <img src={uploadIcon} />
            <span>PUBLISH</span>
          </button>
        </Link>
        <CheckAlert className="upload__alert" isAlert={alertActive} />
        <button className="upload__cancel-btn" type="submit">
          CANCEL
        </button>
      </div>
    </section>
  );
}

export default Upload;
