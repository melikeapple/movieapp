import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import store from "./store/store";

axios.interceptors.response.use((response) => {
  switch (response.status) {
    case 200:
      return { response: response.data, error: null };
    default:
      return response.data;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
