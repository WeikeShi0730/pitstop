import { useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartDropdown from "./cart-dropdown.component";
import { useClickOutside } from "../utils/use-click-outside";
import { CartItemType } from "../interfaces/index";

interface CartItems {
  cartItems: CartItemType[];
}

const CartIcon = ({ cartItems }: CartItems) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(() => !open));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  const cartItemCount = cartItems
    ? cartItems.reduce((acc: number, currentValue: CartItemType) => {
        return acc + currentValue.count;
      }, 0)
    : 0;

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center space-x-2"
        onClick={handleClick}
      >
        <FiShoppingCart />
        <div className="p-1 w-8 flex justify-start">
          {cartItemCount && cartItemCount > 0 ? (
            <div>{cartItemCount}</div>
          ) : null}
        </div>
      </button>
      {open ? (
        <div
          className="absolute left-1/2 -translate-x-2/3 translate-y-4 z-10 rounded-lg bg-slate-200"
          ref={ref}
        >
          <CartDropdown cartItems={cartItems} />
        </div>
      ) : null}
    </div>
  );
};

export default CartIcon;
