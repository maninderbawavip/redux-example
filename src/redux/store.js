import { createStore } from "redux";
import UserReducer from "./reducers";

export const Store = createStore(UserReducer);