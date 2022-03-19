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
  OrderHistoryItemType,
} from "../interfaces/index";

const withSubscribtion = <P extends object>(
  Component: React.FunctionComponent<P>
) => {
  const useComponent = (props: P) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [currentUser, setCurrentUser] = useState<
      CurrentUserType["currentUser"]
    >(auth.currentUser as CurrentUserType["currentUser"]);
    const [wishlistItems, setWishlistItems] = useState<ProductType[]>([]);
    const [orderHistoryItems, setOrderHistoryItems] = useState<
      OrderHistoryItemType[]
    >([]);

    useEffect(() => {
      let isSubscribed = true;

      subscribeToAuthState((user: CurrentUserType["currentUser"]) => {
        if (isSubscribed) {
          setCurrentUser(user);
        }
      });

      // cancel subscription to useEffect
      return () => {
        isSubscribed = false;
      };
    }, []);

    useEffect(() => {
      let isSubscribed = true;
      currentUser
        ? subscribeToCurrentUserData(
            currentUser?.uid as string,
            (snapshot: SnapshotType["snapshot"]) => {
              if (isSubscribed) {
                const cartItems = snapshot.data()?.cartItems;
                setCartItems(cartItems);
                const wishlistItems = snapshot.data()?.wishlistItems;
                setWishlistItems(wishlistItems);
                const orderHistoryItems = snapshot.data()?.orderHistoryItems.reverse();
                setOrderHistoryItems(orderHistoryItems);
              }
            }
          )
        : () => {};
      // cancel subscription to useEffect
      return () => {
        isSubscribed = false;
      };
    }, [currentUser]);

    return (
      <Component
        {...(props as P)}
        currentUser={currentUser}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        orderHistoryItems={orderHistoryItems}
      />
    );
  };
  return useComponent;
};

export default withSubscribtion;
