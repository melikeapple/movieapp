import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "../components/HomePage";
import { history } from "../store/store";
import Layout from "../components/partials/layout/Layout";

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};
export default Router;
