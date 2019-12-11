import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux"; //2. import createStore
import { Provider } from "react-redux"; //4. imp. provider
//import vehReducer from './reducers/vehReducer; 3. imp reducer

import "bulma/css/bulma.css";
import "./styles.scss";
//1. create store and pass in reducer
const store = createStore(vehReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, //5. wrap App in Provider pass in store
  rootElement
);
