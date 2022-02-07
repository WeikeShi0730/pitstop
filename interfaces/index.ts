import { Action } from "redux";

export interface ProductType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}
export interface TeamType {
  id: string;
  name: string;
  photos: string[];
  backgroundImg: string;
  productsList: ProductType[];
}
export interface SignInType {
  email: string;
  password: string;
}
export interface SignUpType {
  displayName: string;
  email: string;
  password: string;
}

export interface CurrentUserType {
  currentUser: any;
}

export interface CartItemType {
  product: ProductType;
  count: number;
}

export interface CurrentUserState {
  currentUser: CurrentUserType;
}

export interface CurrentUserAction extends Action {
  type: string;
  currentUser: CurrentUserType;
}

export interface CartState {
  cart: CartItemType;
}

export interface CartAction extends Action {
  type: string;
  cart: CartItemType[];
}
