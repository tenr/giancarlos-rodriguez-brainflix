import companyLogo from "../../assets/logo/BrainFlix-logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={companyLogo} alt="BrainFlix logo" />
        </div>
        <div></div>
      </nav>
    </header>
  );
}

export default Header;
