import { useState, useRef, useMemo } from "react";
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

  const cartItemCount = useMemo(() => {
    return cartItems
      ? cartItems.reduce((acc: number, currentValue: CartItemType) => {
          return acc + currentValue.count;
        }, 0)
      : 0;
  }, [cartItems]);

  return (
    <div className="relative text-sm md:text-base">
      <button
        className="flex items-center justify-center space-x-2 font-light"
        onClick={handleClick}
      >
        <FiShoppingCart
          id="cartIcon"
          className="link-underline link-underline:hover"
        />
        <div className="px-1 w-8 flex justify-start">
          {cartItemCount && cartItemCount > 0 ? (
            <div>{cartItemCount}</div>
          ) : null}
        </div>
      </button>
      <Transition
        show={open}
        enter="transition-all ease-in-out duration-200"
        enterFrom="opacity-0 scale-90 translate-y-10"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition-all ease-in-out duration-200"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-90 translate-y-10"
      >
        <div
          className="absolute w-80 left-1/2 -translate-x-2/3 translate-y-8 z-20 rounded-lg bg-slate-200"
          ref={ref}
        >
          <CartDropdown cartItems={cartItems} />
        </div>
      </Transition>
    </div>
  );
};

export default CartIcon;
