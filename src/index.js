import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";

const LazyApp = lazy(() => import("./App"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <LazyApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
