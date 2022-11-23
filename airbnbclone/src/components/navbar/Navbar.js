import "./Navbar.css";
import airbnb from "../images/airbnb.svg";
function Navbar() {
  return (
    <nav>
      <img src={airbnb} width="100px" alt="airbnblogo"></img>
    </nav>
  );
}

export default Navbar;
