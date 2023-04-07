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
          <img className="wrapper__mohan" src={mohan} />
        </div>
        <div className="wrapper__image">
          <button className="wrapper__button">
            <img src={uploadIcon} />
            <span>Upload</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
