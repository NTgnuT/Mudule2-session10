import { combineReducers } from "redux";
import { ListProduct } from "./ListProduct";
import { listCart } from "./ListCart";
import { listUser } from "./listUser";

export const reducer = combineReducers({ ListProduct, listCart, listUser });
