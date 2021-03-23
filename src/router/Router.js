import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter, onLocationChanged } from "connected-react-router";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import { history } from "../store/store";
import Layout from "../partials/layout/Layout";

const Router = () => {
  useEffect(() => {
    history.listen((location, action) => {
      if (action === "PUSH") {
        setTimeout(() => {
          if (typeof window !== undefined) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      }
    });
  }, []);
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};
export default Router;
