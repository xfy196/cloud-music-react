import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "antd-mobile/dist/antd-mobile.css";
import "assets/common/reset.css";
import "assets/common/border.css";
import "utils/autoflex";

createRoot(document.getElementById("root")).render(<App />);
