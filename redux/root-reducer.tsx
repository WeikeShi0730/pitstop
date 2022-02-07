import { combineReducers } from "redux";
import currentUserReducer from "./reducers/current-user.reducer";
import cartReducer from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  cart: cartReducer,
});

export default rootReducer;
