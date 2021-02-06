import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "../pages/HomePage";
import { history } from "../store/store";
import Layout from "../partials/layout/Layout";

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail" render={() => <div>detail</div>} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};
export default Router;
