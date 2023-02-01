import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <h2>Wellcome to the Home Page</h2>
      <Link to={"/about-us"}>Go to the About us page</Link>
    </>
  );
};

export default HomePage;
