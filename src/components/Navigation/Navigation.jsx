import { NavLink, useParams } from "react-router-dom";

const Navigation = () => {
  const params = useParams();

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab2" : "")}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab2" : "")}
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab2" : "")}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab2" : "")}
            to="/blogs"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "activeTab2" : "")}
            to="/post"
          >
            Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
