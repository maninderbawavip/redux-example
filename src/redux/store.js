import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

// const middlewares = [thunk]

export const Store = createStore(reducers, applyMiddleware(thunk) );