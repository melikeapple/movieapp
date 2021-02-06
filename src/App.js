import { hot } from "react-hot-loader/root";
import React from "react";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default hot(App);
