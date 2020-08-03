import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import fastclick from "fastclick"
import "assets/common/reset"
import "assets/common/border"
import "utils/autoflex"
fastclick.attach(document.body);
ReactDOM.render(
  <App></App>,
  document.getElementById("root")
)