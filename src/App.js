import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/about-us" component={AboutUsPage} />
    </BrowserRouter>
  );
}

export default App;
