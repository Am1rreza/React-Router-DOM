import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <h2>Blog detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>Go to the next Blog ?</Link>
    </div>
  );
};

export default Blog;
