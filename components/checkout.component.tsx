import CheckoutItem from "./checkout-item.component";
import getStripe from "../utils/get-stripejs";
import { fetchPostJSON } from "../utils/api-helpers";
import { CartItemType } from "../interfaces/index";
import { FaCcStripe } from "react-icons/Fa";
import withSubscribtion from "./hoc.component";

interface CartItems {
  cartItems: CartItemType[] | null;
}

const Checkout = ({ cartItems }: CartItems) => {
  const total = cartItems
    ?.reduce((acc: number, currentItem: CartItemType) => {
      return acc + currentItem.count * currentItem.product.price;
    }, 0)
    ?.toFixed(2);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkoutSession = await fetchPostJSON("/api/checkout-session", {
      total: total,
    });
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  };

  return (
    <div className="">
      <div className="flex justify-center m-2">
        <div className="flex w-2/3 m-5 justify-start text-2xl py-1 border-b border-slate-700">
          Your cart 🛒
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem: CartItemType) => {
          return (
            <div key={cartItem.product.id} className="flex justify-center m-2">
              <CheckoutItem key={cartItem.product.id} cartItem={cartItem} />
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center text-xl">
          Your cart is empty!
        </div>
      )}
      {cartItems && cartItems.length > 0 ? (
        <div className="flex justify-center m-2">
          <div className="flex w-2/3 m-5 justify-end items-end space-x-2 py-1 border-t border-slate-700">
            <div className="text-xl">Total: CAD</div>
            <div className="text-3xl">{total}</div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} method="POST">
          <button
            role="link"
            id="submit"
            type="submit"
            className="flex justify-center items-center w-1/5 min-w-fit m-5 px-2 rounded-lg bg-indigo-600 text-slate-200 hover:text-slate-50 hover:bg-indigo-500"
          >
            <div className="m-1">Checkout with</div>
            <div className="m-1">
              <FaCcStripe size={50} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withSubscribtion(Checkout);
