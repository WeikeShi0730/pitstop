import { SET_CART } from "../types";
import { CartType, CartAction } from "../../interfaces";

export const setCart = (cart: CartType[]): CartAction => ({
  type: SET_CART,
  cart,
});
