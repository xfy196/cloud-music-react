import React, { Component } from 'react'
import { Provider } from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {GlobalStyle} from "./style"
import {IconStyle} from "assets/iconfont/iconfont"
import {renderRoutes} from "react-router-config" 
import routes from './routes'
import store from "./store/index"
export default class APP extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
            {renderRoutes(routes)}
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
