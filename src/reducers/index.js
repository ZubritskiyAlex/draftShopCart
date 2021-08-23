import {combineReducers} from "redux";
import filter from "./filter";
import products from './products'
import cart from "./cart";


export default combineReducers({
    products,
    cart,
    filter,
})