import { Link } from "react-router-dom";

const ProfilePage = (props) => {
  return (
    <>
      <h2>Wellcome to the Profile Page</h2>
      <Link to={"/"}>Go to the Home page</Link>
    </>
  );
};

export default ProfilePage;
