import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import gifReducer from "./reducer";

import { createStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = createStore(gifReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
