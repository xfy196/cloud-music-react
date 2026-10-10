import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import { IconStyle } from "assets/iconfont/iconfont";
import AppRoutes from "./routes";
import store from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconStyle />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}
