import { combineReducers } from "redux";
import { todoListReducer } from "./someReducers";

export const rootReducer = combineReducers({
    todos: todoListReducer
})