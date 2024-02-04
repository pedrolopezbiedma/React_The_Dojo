// React
import { NavLink } from "react-router-dom";

// Styles & Icons
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import CreateIcon from "../assets/add_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar */}
          <p>Hey user!</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="Dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={CreateIcon} alt="Create icon" />
                <span>Create</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
