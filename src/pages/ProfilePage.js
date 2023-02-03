import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Downloads from "../components/Downloads/Downloads";
import Sidebar from "../components/Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <>
      <h2 style={{ padding: "1rem" }}>Wellcome to the Profile Page</h2>
      <Sidebar />
      <Route path={"/profile/dashboard"} component={Dashboard} />
      <Route path={"/profile/downloads"} component={Downloads} />
    </>
  );
};

export default ProfilePage;
