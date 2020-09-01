import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducer from "./reducers";
import ReduxPromise from "redux-promise";

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreMiddleware(reducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
