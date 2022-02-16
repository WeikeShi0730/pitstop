import CheckoutItem from "./checkout-item.component";
import CheckoutForm from "./checkout-form.component";
import getStripe from "../utils/get-stripejs";
import { Elements } from "@stripe/react-stripe-js";
import { CartItemType } from "../interfaces/index";
import { FaCcStripe } from "react-icons/Fa";
import withSubscribtion from "./hoc.component";

interface CartItems {
  cartItems: CartItemType[] | null;
}

const stripePromise = getStripe();

const Checkout = ({ cartItems }: CartItems) => {
  const total = cartItems
    ?.reduce((acc: number, currentItem: CartItemType) => {
      return acc + currentItem.count * currentItem.product.price;
    }, 0)
    ?.toFixed(2);

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: `{{${process.env.STRIPE_SECRET_KEY}}}`,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <div className="">
      <div className="w-1/2 float-left">
        <div className="flex justify-center h-full m-2">
          <div className="flex w-full m-5 justify-start text-2xl border-b-2 border-slate-700">
            Your cart 🛒
          </div>
        </div>
        <div className="relative max-h-96 overflow-auto disable-scrollbars">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem: CartItemType) => {
              return (
                <div key={cartItem.product.id} className="flex h-full m-2">
                  <CheckoutItem cartItem={cartItem} />
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center text-xl">
              Your cart is empty!
            </div>
          )}
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div className="flex justify-center h-full m-2">
            <div className="flex w-full m-5 justify-end items-end space-x-2 border-t-2 border-slate-700">
              <div className="text-xl">Total: CAD</div>
              <div className="text-3xl">{total}</div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-1/2 float-right">
        {/* <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements> */}
        <form action="/api/checkout/session" method="POST">
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
