import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productsReducer } from "./productsReducer";


export const rootReducer = combineReducers({
    products: productsReducer,
    auth: authReducer
})