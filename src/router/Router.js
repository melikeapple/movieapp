import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "../components/HomePage";
import { history } from "../store/store";

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
};
export default Router;
