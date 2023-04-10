import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import "react-toastify/dist/ReactToastify.css";

const depo = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
