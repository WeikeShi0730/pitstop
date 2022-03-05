import { useState, useEffect } from "react";
import CheckoutItem from "./checkout-item.component";
import getStripe from "../utils/get-stripejs";
import { fetchPostJSON } from "../utils/api-helpers";
import { CartItemType } from "../interfaces/index";
import { FaCcStripe } from "react-icons/Fa";
import withSubscribtion from "./hoc.component";
import Loading from "./loading.component";
import NoScrollLink from "./no-scroll-link.component";

interface CartItems {
  cartItems: CartItemType[] | null;
}

const Checkout = ({ cartItems }: CartItems) => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (cartItems === undefined || cartItems === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    return () => {
      setLoading(false);
    };
  }, [cartItems]);

  const total = cartItems
    ?.reduce((acc: number, currentItem: CartItemType) => {
      return acc + currentItem.count * currentItem.product.price;
    }, 0)
    ?.toFixed(2);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const checkoutSession = await fetchPostJSON("/api/checkout-session", {
      total: total,
    });
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      setLoading(false);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    setLoading(false);
    console.warn(error.message);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="relative text-slate-700 min-h-content w-full flex flex-col lg:flex-row lg:justify-center">
        <div className="relative w-full lg:w-3/4 my-10">
          <div className="flex justify-center m-2">
            <div className="flex w-full sm:w-2/3 m-5 justify-start text-2xl py-1 border-b border-slate-700">
              Your cart 🛒
            </div>
          </div>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem: CartItemType) => {
              return (
                <div
                  key={cartItem.product.id}
                  className="flex justify-center m-2"
                >
                  <CheckoutItem key={cartItem.product.id} cartItem={cartItem} />
                </div>
              );
            })
          ) : (
            <>
              <div className="flex justify-center items-center text-xl">
                Your cart is empty!
              </div>
              <div className="flex justify-center items-center m-5 underline-primary font-normal text-lg md:text-xl">
                <NoScrollLink href="/products">
                  <a>Go to shop →</a>
                </NoScrollLink>
              </div>
            </>
          )}
          {cartItems && cartItems.length > 0 && (
            <div className="flex justify-center m-2">
              <div className="flex w-full sm:w-2/3 m-5 justify-end items-end space-x-2 py-1 border-t border-slate-700">
                <div className="text-xl">Total: CAD</div>
                <div className="text-3xl">{total}</div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/4 flex mb-10 justify-center lg:items-start">
          <div className="relative lg:sticky lg:top-24">
            <form onSubmit={handleSubmit} method="POST">
              <button
                role="link"
                id="submit"
                type="submit"
                className="flex justify-center items-center w-48 m-5 rounded-lg bg-indigo-600 text-slate-200 hover:text-slate-50 hover:bg-indigo-500"
              >
                <div className="m-1">Checkout with</div>
                <div className="m-1 ">
                  <FaCcStripe size={50} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSubscribtion(Checkout);
