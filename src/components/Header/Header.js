import "./Header.scss";
import companyLogo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import finder from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";

function Header() {
  //initializing react router
  // let navigate = userNavigate();
  // const routeChange = () => {
  //   let path = "newPath";
  //   navigate(path);
  // };
  return (
    <header className="header">
      {/* <img
        src="http://localhost:8080/videos/image9.jpeg"
        alt="Image Description"
      ></img> */}
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo-image"
              src={companyLogo}
              alt="BrainFlix logo"
            />
          </Link>
        </div>
        <div className="wrapper">
          <div className="wrapper__input-group">
            <img className="wrapper__icon" src={finder} alt="search icon" />
            <input className="wrapper__input" placeholder="Search"></input>
          </div>
          {/* <div className="tablet">
            <div className="tablet__input-group">
              <img className="tablet__icon" src={finder} alt="search icon" />
              <input className="tablet__input" placeholder="Search"></input>
              <button className="tablet__button">
                <img src={uploadIcon} />
                <span>Upload</span>
              </button>
            </div>
          </div> */}

          <img className="wrapper__mohan" src={mohan} alt="mohan" />
        </div>
        {/* Using react router to navigate to page */}
        <Link to="/upload">
          <button className="wrapper__button">
            <img src={uploadIcon} />
            <span>Upload</span>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
