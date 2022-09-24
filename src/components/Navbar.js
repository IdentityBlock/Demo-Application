import logo from "../img/ABC-BANK.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-lang">
        <li>
          <a href="#">Sinhala</a>
        </li>
        <li>
          <a href="#">English</a>
        </li>
        <li>
          <a href="#">Tamil</a>
        </li>
      </ul>

      <ul className="navbar-links">
        <li>
          <a href="#">Branches</a>
        </li>
        <li>
          <a href="#">ATMs</a>
        </li>
        <li>
          <a href="#">Overseas</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div className="navbar-img">
        <a href="/">
          <img src={logo} alt="BANK LOGO"></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
