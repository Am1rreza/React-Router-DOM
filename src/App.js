import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProfilePage from "./pages/ProfilePage";
import React from "react";
import Layout from "./Layout/Layout";

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/" component={HomePage} />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
