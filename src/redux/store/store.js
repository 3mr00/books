import { createStore, applyMiddleware } from "redux";
import { productsReducer } from "../reducer/productsReducer";
import thunk from "redux-thunk";
//1-create store
export const store = createStore(productsReducer, applyMiddleware(thunk));
