import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import gifReducer from "./reducer";

import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(gifReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
