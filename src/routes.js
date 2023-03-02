import Blog from "./components/Blog/Blog";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/post/:id?", element: <PostPage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/", element: <HomePage />, exact: true },
  { element: <NotFoundPage /> },
];

export default routes;
