import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Navigation />
        <Route path="/about-us" component={AboutUsPage} />
        <Route exact path="/" component={HomePage} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
