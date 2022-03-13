import { useState, useEffect } from "react";
import {
  subscribeToCurrentUserData,
  subscribeToAuthState,
  auth,
} from "../firebase/firebase.utils";
import {
  CurrentUserType,
  CartItemType,
  SnapshotType,
  ProductType,
} from "../interfaces/index";

const withSubscribtion = <P extends object>(
  Component: React.FunctionComponent<P>
) => {
  const useComponent = (props: P) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>();
    const [currentUser, setCurrentUser] = useState<
      CurrentUserType["currentUser"]
    >(auth.currentUser as CurrentUserType["currentUser"]);
    const [wishlistItems, setWishlistItems] = useState<ProductType[]>();

    useEffect(() => {
      const unsubscribe = subscribeToAuthState(
        (user: CurrentUserType["currentUser"]) => {
          setCurrentUser(user);
        }
      );
      return () => unsubscribe();
    });

    useEffect(() => {
      const unsubscribe = currentUser
        ? subscribeToCurrentUserData(
            currentUser?.uid as string,
            (snapshot: SnapshotType["snapshot"]) => {
              const cartItems = snapshot.data()?.cartItems;
              setCartItems(cartItems);
              const wishlistItems = snapshot.data()?.wishlistItems;
              setWishlistItems(wishlistItems);
            }
          )
        : () => {};
      return () => unsubscribe();
    }, [currentUser]);

    return (
      <Component
        {...(props as P)}
        currentUser={currentUser}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
      />
    );
  };
  return useComponent;
};

export default withSubscribtion;
