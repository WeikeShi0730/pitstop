import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartItemType } from "../interfaces/index";
import { streamCurrentUserCartItems } from "../firebase/firebase.utils";

const CartIcon = ({ currentUser }: any) => {
  const [itemCount, setItemCount] = useState<number>();
  useEffect(() => {
    const unsubscribe = currentUser
      ? streamCurrentUserCartItems(
          currentUser?.uid as string,
          (snapshot: any) => {
            const itemCount = snapshot
              .data()
              .cartItems.reduce((acc: number, currentValue: CartItemType) => {
                return acc + currentValue.count;
              }, 0);
            setItemCount(itemCount);
          }
        )
      : () => {};
    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <FiShoppingCart />
      <div>{itemCount}</div>
    </div>
  );
};

export default CartIcon;
