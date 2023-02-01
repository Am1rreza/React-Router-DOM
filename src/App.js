import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Layout>
          <Route path="/about-us" component={AboutUsPage} />
          <Route exact path="/" component={HomePage} />
        </Layout>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
