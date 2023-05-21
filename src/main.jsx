import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./styles/global.scss";
import "./styles/app.scss";

import LoadingScreen from "./loading.screen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadingScreen>
    <App />
  </LoadingScreen>
);
