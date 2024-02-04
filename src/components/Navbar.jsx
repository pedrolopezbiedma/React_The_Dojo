// React
import { Link } from "react-router-dom";

// Styles & Icons
import "./Navbar.css";
import Logo from "../assets/temple.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="app logo" />
          <span>Xnail Dojo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Log out</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
