import "./App.css";
import { Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <Layout>
        {routes.map((route, index) => {
          return <Route key={index} {...route} />;
        })}
      </Layout>
    </React.StrictMode>
  );
}

export default App;
