import Blog from "./components/Blog/Blog";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/about-us", component: AboutUsPage },
  { path: "/profile", component: ProfilePage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];

export default routes;
