import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Routes>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
