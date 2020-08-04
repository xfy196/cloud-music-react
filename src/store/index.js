import { createStore, compose, applyMiddleware } from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk";
import {Map} from "immutable"
// 加入redux的调试工具的代码
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, Map(), composeEnhancers(applyMiddleware(thunk)));

export default store