import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./root-reducer";

const middleware = [thunk];

var store;
if (!process.env.ENV || process.env.ENV === "development") {
  // dev code
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  // production code
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

export { store };
