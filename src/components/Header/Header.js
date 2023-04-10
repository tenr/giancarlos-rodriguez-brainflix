import "./Header.scss";
import companyLogo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import finder from "../../assets/icons/search.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img
            className="header__logo-image"
            src={companyLogo}
            alt="BrainFlix logo"
          />
        </div>
        <div className="wrapper">
          <div className="wrapper__input-group">
            <img className="wrapper__icon" src={finder} alt="search icon" />
            <input className="wrapper__input" placeholder="Search"></input>
          </div>

          <img className="wrapper__mohan" src={mohan} />
        </div>

        <button className="wrapper__button">
          <img src={uploadIcon} />
          <span>Upload</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
