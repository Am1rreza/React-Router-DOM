import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab" : "")}
            to={"/profile/downloads"}
          >
            Downloads
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab" : "")}
            to={"/profile/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
