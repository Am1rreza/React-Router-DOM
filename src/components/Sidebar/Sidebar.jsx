import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <NavLink activeClassName="activeTab" to={"/profile/downloads"}>
            Downloads
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeTab" to={"/profile/dashboard"}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
