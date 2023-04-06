import "./Header.scss";
import companyLogo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img src={companyLogo} alt="BrainFlix logo" />
        </div>
        <div className="wrapper">
          <input className="wrapper__input"></input>
          <button className="wrapper__button">
            <img src={uploadIcon} />
            <span>Upload</span>
          </button>
        </div>
        <div className="wrapper__image">
          <img className="wrapper__mohan" src={mohan} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
