import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/partials/_globals.scss";
import "../Upload/Upload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import Alert from "@mui/material/Alert";

function Upload() {
  const alert = (
    <Alert severity="success">Upload Successful — check it out!</Alert>
  );
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const imgUrl = "image9.jpeg";

  //changes the state variables using attribute onChange to call this function
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const alertClickHandler = (e) => {
    e.preventDefault();
    const newVideo = {
      title: title,
      description: description,
      image: imgUrl,
    };
    // log the form data
    console.log(newVideo);
    // post the form data to the server
    axios
      .post("http://localhost:8080/videos", newVideo)
      .then((response) => {
        setAlertActive(true);
        console.log(response);
        setTimeout(() => {
          setAlertActive(false);
          navigate("/");
        }, 1800);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__desktop-wrapper">
        <div className="upload__thumbnail-wrapper">
          <span className="upload__thumbnail-heading">VIDEO THUMBNAIL</span>
          <img src={thumbnail} alt="" className="upload__thumbnail-img" />
        </div>

        <form className="upload__form" onSubmit={alertClickHandler}>
          <label htmlFor="upload-title" className="upload__title-label">
            TITLE YOUR VIDEO
            <input
              name="upload-title"
              placeholder="Add a title to your video"
              type="text"
              className="upload__title-input"
              value={title}
              onChange={handleTitleChange}
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
              value={description}
              onChange={handleDescriptionChange}
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
            <img src={uploadIcon} alt="" />
            <span>PUBLISH</span>
          </button>
        </Link>
        {alertActive && (
          <Alert className="upload__alert" severity="success">
            Upload Successful — check it out!
          </Alert>
        )}
        <button className="upload__cancel-btn" type="button">
          CANCEL
        </button>
      </div>
    </section>
  );
}

export default Upload;
