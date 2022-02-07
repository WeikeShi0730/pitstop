import { SET_CART } from "../types";
import { CartAction, CartState, CartType } from "../../interfaces";

const initialState: CartState = {
  cart: null as unknown as CartType,
};

const cartReducer = (state = initialState, action: CartAction) => {
  const { type, cart } = action;
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
