import { Link, withRouter } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
