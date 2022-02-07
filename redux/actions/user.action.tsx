import { SET_CURRENT_USER } from "../types";
import { CurrentUserType, CurrentUserAction } from "../../interfaces";

export const setCurrentUser = (
  currentUser: CurrentUserType
): CurrentUserAction => ({
  type: SET_CURRENT_USER,
  currentUser,
});
