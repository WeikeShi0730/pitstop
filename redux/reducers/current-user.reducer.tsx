import { SET_CURRENT_USER } from "../types";
import {
  CurrentUserAction,
  CurrentUserState,
  CurrentUserType,
} from "../../interfaces";

const initialState: CurrentUserState = {
  currentUser: null as unknown as CurrentUserType,
};

const currentUserReducer = (
  state = initialState,
  action: CurrentUserAction
) => {
  const { type, currentUser } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: currentUser,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
