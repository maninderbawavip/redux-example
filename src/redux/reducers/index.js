import { combineReducers } from "redux";
import CategoriesReducer from "./categories";
import CelebsReducer from "./celebs";
import UserReducer from "./users";

export default combineReducers({
    userTable: UserReducer,
    celebsTable: CelebsReducer,
    catTable: CategoriesReducer
})