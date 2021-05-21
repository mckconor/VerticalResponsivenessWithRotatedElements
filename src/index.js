import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Discovery } from "./discovery/index";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./currentWork.css";

const rootElement = document.getElementById("root");
let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Discovery />
    </Provider>
  </StrictMode>,
  rootElement
);
