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

  const total = cartItems
    ?.reduce((acc: number, currentItem) => {
      return acc + currentItem.count * currentItem.product.price;
    }, 0)
    ?.toFixed(2);

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
    <>
      <div className="flex justify-center  h-full m-2">
        <div className="flex w-2/3 m-5 justify-start text-2xl border-b-2 border-slate-700">
          Your cart
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem, index) => {
          return <CheckoutItem key={index} cartItem={cartItem} />;
        })
      ) : (
        <div className="flex justify-center items-center h-full text-xl">
          Your cart is empty!
        </div>
      )}
      {cartItems && cartItems.length > 0 ? (
        <div className="flex justify-center h-full m-2">
          <div className="flex w-2/3 m-5 justify-end items-end space-x-2 border-t-2 border-slate-700">
            <div className="text-xl">Total: CAD</div>
            <div className="text-3xl">{total}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;
