import { CartItemType } from "../interfaces";
import CartDropdownItem from "./cart-dropdown-item.component";
import NoScrollLink from "./no-scroll-link.component";
interface CartItems {
  cartItems: CartItemType[] | undefined | null;
}
const CartDropdown = ({ cartItems }: CartItems) => {
  const total = cartItems
    ?.reduce((acc: number, currentValue) => {
      return acc + currentValue.count * currentValue.product.price;
    }, 0)
    ?.toFixed(2);

  return (
    <div className="shadow-md shadow-slate-500 rounded-lg text-slate-700">
      {/* h-fit-content */}
      <div className="relative w-full max-h-96 overflow-auto disable-scrollbars shadow-sm">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return (
              <CartDropdownItem key={cartItem.product.id} cartItem={cartItem} />
            );
          })
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-2xl m-5">
            Your cart is empty
          </div>
        )}
      </div>
      <div className="flex items-end justify-end p-2 space-x-2 bg-slate-300">
        <div>Total: CAD</div>
        <div className="text-2xl">{total}</div>
      </div>
      <div className="flex justify-center relative inset-x-0 bottom-0 w-full">
        <NoScrollLink href="/checkout">
          <a className="p-3 text-center w-full bg-orange-theme text-slate-200 rounded-b-lg shadow-sm hover:bg-orange-500 hover:text-slate-100">
            Checkout
          </a>
        </NoScrollLink>
      </div>
    </div>
  );
};

export default CartDropdown;
