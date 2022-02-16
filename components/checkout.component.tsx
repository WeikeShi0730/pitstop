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

// const stripePromise = getStripe();

const Checkout = ({ cartItems }: CartItems) => {
  const total = cartItems
    ?.reduce((acc: number, currentItem: CartItemType) => {
      return acc + currentItem.count * currentItem.product.price;
    }, 0)
    ?.toFixed(2);

  // const options = {
  //   // passing the client secret obtained in step 2
  //   clientSecret: `{{${process.env.STRIPE_SECRET_KEY}}}`,
  //   // Fully customizable with appearance API.
  //   appearance: {
  //     /*...*/
  //   },
  // };
  async function fetchPostJSON(url: string, data?: {}) {
    try {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw err;
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkoutSession = await fetchPostJSON("/api/checkout/session", {
      total: total,
    });
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  return (
    <div className="">
      <div className="flex justify-center h-full m-2">
        <div className="flex w-2/3 m-5 justify-start text-2xl border-b-2 border-slate-700">
          Your cart 🛒
        </div>
      </div>
      {/* <div className="relative max-h-96 overflow-auto disable-scrollbars"> */}
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem: CartItemType) => {
          return (
            <div
              key={cartItem.product.id}
              className="flex justify-center h-full m-2"
            >
              <CheckoutItem key={cartItem.product.id} cartItem={cartItem} />
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center text-xl">
          Your cart is empty!
        </div>
      )}
      {/* </div> */}
      {cartItems && cartItems.length > 0 ? (
        <div className="flex justify-center h-full m-2">
          <div className="flex w-2/3 m-5 justify-end items-end space-x-2 border-t-2 border-slate-700">
            <div className="text-xl">Total: CAD</div>
            <div className="text-3xl">{total}</div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-center">
        {/* <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements> */}
        <form onSubmit={handleSubmit} method="POST">
          <button
            // role="link"
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
