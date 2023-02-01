import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
