import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUsPage },
  { path: "/profile", component: ProfilePage },
];

export default routes;
