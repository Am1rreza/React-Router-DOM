import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <h2>Blog detail - {id}</h2>
      <Link to={"/blogs"}>Back to the Blogs page</Link>
    </div>
  );
};

export default Blog;
