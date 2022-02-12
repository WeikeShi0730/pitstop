import { useState, useEffect } from "react";
import CheckoutItem from "./checkout-item.component";
import {
  streamCurrentUserCartItems,
  subscribeToAuthState,
  auth,
} from "../firebase/firebase.utils";
import {
  CurrentUserType,
  SnapshotType,
  CartItemType,
} from "../interfaces/index";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>();
  const [currentUser, setCurrentUser] = useState<
    CurrentUserType["currentUser"]
  >(auth.currentUser as CurrentUserType["currentUser"]);

  useEffect(() => {
    const subscribe = subscribeToAuthState(
      (user: CurrentUserType["currentUser"]) => {
        setCurrentUser(user);
      }
    );
    return () => subscribe();
  });

  useEffect(() => {
    const unsubscribe = currentUser
      ? streamCurrentUserCartItems(
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
    <div>
      <div className="">Your cart</div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem, index) => {
          return <CheckoutItem key={index} cartItem={cartItem} />;
        })
      ) : (
        <div className="">Your cart is empty!</div>
      )}
    </div>
  );
};

export default Checkout;
