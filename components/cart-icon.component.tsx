import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { FiShoppingCart } from "react-icons/fi";
import CartDropdown from "./cart-dropdown.component";
import { useClickOutside } from "../utils/use-click-outside";
import { CartItemType } from "../interfaces/index";

interface CartItems {
  cartItems: CartItemType[] | null;
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
      <Transition
        show={open}
        enter="transition ease-in-out duration-150"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in-out duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <div
          className="absolute w-80 left-1/2 -translate-x-2/3 translate-y-4 z-20 rounded-lg bg-slate-200"
          ref={ref}
        >
          <CartDropdown cartItems={cartItems} />
        </div>
      </Transition>
    </div>
  );
};

export default CartIcon;
