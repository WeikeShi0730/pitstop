import { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartDropdown from "./cart-dropdown.component";
import { useClickOutside } from "../utils/use-click-outside";
import {
  CartItemType,
  CurrentUserType,
  SnapshotType,
} from "../interfaces/index";
import { streamCurrentUserCartItems } from "../firebase/firebase.utils";

const CartIcon = ({ currentUser }: CurrentUserType) => {
  const [cartItemCount, setCartItemCount] = useState<number>();
  const [cartItems, setCartItems] = useState();
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(() => !open));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  useEffect(() => {
    const unsubscribe = currentUser
      ? streamCurrentUserCartItems(
          currentUser?.uid as string,
          (snapshot: SnapshotType["snapshot"]) => {
            const cartItems = snapshot.data()?.cartItems;
            if (cartItems) {
              const itemCount = cartItems.reduce(
                (acc: number, currentValue: CartItemType) => {
                  return acc + currentValue.count;
                },
                0
              );
              setCartItems(cartItems);
              setCartItemCount(itemCount);
            }
          }
        )
      : () => {};
    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center space-x-2"
        onClick={handleClick}
      >
        <FiShoppingCart />
        <div className="p-1 w-12 flex justify-start">
          {cartItemCount && cartItemCount > 0 ? (
            <div>{cartItemCount}</div>
          ) : null}
        </div>
      </button>
      {open ? (
        <div
          className="absolute left-1/2 -translate-x-2/3 translate-y-4 z-10 rounded-lg bg-slate-100"
          ref={ref}
        >
          <CartDropdown cartItems={cartItems} />
        </div>
      ) : null}
    </div>
  );
};

export default CartIcon;
