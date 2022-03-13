import { Action } from "redux";
import { User } from "firebase/auth";
import { DocumentSnapshot } from "firebase/firestore";

export interface ProductType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  featured: boolean;
  sold: number;
  teamId: string;
}
export interface TeamType {
  id?: string;
  name?: string;
  fullname?: string;
  teamBackgrounds: string[];
  teamBanner?: string;
  productsList?: ProductType[];
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
  currentUser: User | null;
}

export interface CurrentUserFnType {
  currentUser: (user: User | null) => void;
}

export interface CartItemType {
  product: ProductType;
  count: number;
}

// export interface WishlistItemType {
//   wishlistItem: ProductType;
// }
export interface OrderHistoryItemType {
  items: CartItemType[];
  timeStamp: number;
}

export interface SnapshotFnType {
  snapshotfn: (snapshot: DocumentSnapshot) => void;
}

export interface SnapshotType {
  snapshot: DocumentSnapshot;
}

// export interface CurrentUserState {
//   currentUser: CurrentUserType;
// }

// export interface CurrentUserAction extends Action {
//   type: string;
//   currentUser: CurrentUserType;
// }

// export interface CartState {
//   cart: CartItemType;
// }

// export interface CartAction extends Action {
//   type: string;
//   cart: CartItemType[];
// }
