import { useState, useEffect } from "react";
import Link from "next/link";
import { CartItemType } from "../interfaces";
import CartDropdownItem from "./cart-dropdown-item.component";
interface CartItems {
  cartItems: CartItemType[] | undefined;
}
const CartDropdown = ({ cartItems }: CartItems) => {
  const [subtotal, setSubtotal] = useState<string>("0.00");

  const total = cartItems
    ?.reduce((acc: number, currentValue) => {
      return acc + currentValue.count * currentValue.product.price;
    }, 0)
    ?.toFixed(2);

  // useEffect(() => {
  //   const tempTotal =
  //   setSubtotal(tempTotal?.toFixed(2) as string);
  // }, [cartItems]);

  return (
    <>
      <div className="relative w-80 max-h-96 h-fit-content overflow-auto disable-scrollbars">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => {
            return <CartDropdownItem key={index} cartItem={cartItem} />;
          })
        ) : (
          <div className="h-full flex flex-col justify-center items-center text-black text-2xl m-5">
            Your cart is empty
          </div>
        )}
      </div>
      <div className="flex items-end justify-end p-2 space-x-2 text-black bg-slate-300">
        <div>Total: CAD</div>
        <div className="text-4xl">{total}</div>
      </div>
      <div className="flex justify-center relative inset-x-0 bottom-0 w-full">
        <Link href="/checkout">
          <a className="p-3 text-center w-full bg-black rounded-b-lg">
            Checkout
          </a>
        </Link>
      </div>
    </>
  );
};

export default CartDropdown;
