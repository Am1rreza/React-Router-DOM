import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <Link to={"/profile/downloads"}>Go to the Downloads</Link>
        </li>
        <li>
          <Link to={"/profile/dashboard"}>Go to the Dashboard</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
