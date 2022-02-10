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
  const [itemCount, setItemCount] = useState<number>();
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
            const itemCount = snapshot
              .data()
              ?.cartItems.reduce((acc: number, currentValue: CartItemType) => {
                return acc + currentValue.count;
              }, 0);
            setItemCount(itemCount);
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
        <div>{itemCount}</div>
      </button>
      {open ? (
        <div
          className="absolute left-1/2 -translate-x-1/2 translate-y-4 bg-slate-500 w-60 h-96"
          ref={ref}
        >
          <CartDropdown />
        </div>
      ) : null}
    </div>
  );
};

export default CartIcon;
