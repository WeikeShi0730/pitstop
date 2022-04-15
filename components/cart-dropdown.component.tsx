import { useMemo } from "react";
import { CartItemType } from "../interfaces";
import CartDropdownItem from "./cart-dropdown-item.component";
import NoScrollLink from "./no-scroll-link.component";
interface CartItems {
  cartItems: CartItemType[] | undefined | null;
}
const CartDropdown = ({ cartItems }: CartItems) => {
  const total = useMemo(() => {
    return cartItems
      ?.reduce((acc: number, currentValue: CartItemType) => {
        return acc + currentValue.count * currentValue.product.price;
      }, 0)
      ?.toFixed(2);
  }, [cartItems]);

  return (
    <div className="shadow-md shadow-slate-500 rounded-lg text-slate-700 text-sm md:text-base">
      <div className="relative w-full max-h-96 overflow-auto disable-scrollbars shadow-sm">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return (
              <CartDropdownItem key={cartItem.product.id} cartItem={cartItem} />
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center text-lg md:text-2xl m-5">
            Your cart is empty.
          </div>
        )}
      </div>
      <div className="flex items-end justify-end p-2 space-x-2 bg-slate-300">
        <div>Total: CAD</div>
        <div className="text-lg md:text-2xl font-normal">{total}</div>
      </div>
      <div className="flex justify-center relative inset-x-0 bottom-0 w-full">
        <NoScrollLink href="/checkout">
          <a className="text-base p-3 text-center w-full bg-orange-theme text-slate-200 rounded-b-lg shadow-sm hover:bg-orange-500 hover:text-slate-100 transition-all ease-in-out duration-200">
            Checkout
          </a>
        </NoScrollLink>
      </div>
    </div>
  );
};

export default CartDropdown;
