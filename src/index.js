import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import store from "./redux/store/Store";
import { Provider } from "react-redux";
import { ContextProvider } from "./context/ContextProvider";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <ContextProvider>
  <Provider store={store}>
      <App />
    </Provider>
  </ContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
