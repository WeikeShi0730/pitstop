import { useState, useEffect } from "react";
import {
  subscribeToCurrentUserCartItems,
  subscribeToAuthState,
  auth,
} from "../firebase/firebase.utils";
import {
  CurrentUserType,
  CartItemType,
  SnapshotType,
} from "../interfaces/index";

const withSubscribtion = <P extends object>(
  Component: React.FunctionComponent<P>
) => {
  const useComponent = (props: P) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>();
    const [currentUser, setCurrentUser] = useState<
      CurrentUserType["currentUser"]
    >(auth.currentUser as CurrentUserType["currentUser"]);

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
        ? subscribeToCurrentUserCartItems(
            currentUser?.uid as string,
            (snapshot: SnapshotType["snapshot"]) => {
              const cartItems = snapshot.data()?.cartItems;
              setCartItems(cartItems);
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
      />
    );
  };
  return useComponent;
};

export default withSubscribtion;
