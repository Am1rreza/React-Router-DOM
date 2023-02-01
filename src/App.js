import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/about-us" component={AboutUsPage} />
        <Route exact path="/" component={HomePage} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
