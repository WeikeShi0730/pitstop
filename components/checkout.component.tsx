import { useState, useEffect } from "react";
import CheckoutItem from "./checkout-item.component";
import getStripe from "../utils/get-stripejs";
import { fetchPostJSON } from "../utils/api-helpers";
import { CartItemType } from "../interfaces/index";
import { FaCcStripe } from "react-icons/fa";
import withSubscribtion from "./hoc.component";
import Loading from "./loading.component";
import NoScrollLink from "./no-scroll-link.component";
import { toast } from "react-toastify";
import {
  SiAmericanexpress,
  SiVisa,
  SiMastercard,
  SiStripe,
} from "react-icons/si";

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
    try {
      setLoading(true);
      const checkoutSession = await fetchPostJSON("/api/checkout-session", {
        total: total,
      });
      if ((checkoutSession as any).statusCode === 500) {
        setLoading(false);
        console.error((checkoutSession as any).message);
        toast.error("No items in cart.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      // Redirect to Checkout.
      const stripe = await getStripe();
      const { error } = await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
      console.warn(error.message);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="relative text-slate-700 min-h-content w-full flex flex-col lg:flex-row justify-start">
        <div className="relative flex flex-col flex-auto h-full lg:h-auto w-full lg:w-3/4 my-10">
          <div className="flex justify-center m-2">
            <div className="flex w-full sm:w-2/3 m-5 justify-start text-lg md:text-2xl py-1 border-b border-slate-700">
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
            <div className="flex flex-auto flex-col h-full justify-center items-center">
              <div className="flex justify-center items-center text-base md:text-xl">
                Your cart is empty!
              </div>
              <div className="flex justify-center items-center m-5">
                <NoScrollLink href="/">
                  <a className="underline-primary font-normal text-base md:text-xl">
                    Go to shop →
                  </a>
                </NoScrollLink>
              </div>
            </div>
          )}
          {cartItems && cartItems.length > 0 && (
            <div className="flex justify-center m-2">
              <div className="flex w-full sm:w-2/3 m-5 justify-end items-end space-x-2 py-1 border-t border-slate-700">
                <div className="text-base md:text-xl">Total: CAD</div>
                <div className="text-xl md:text-3xl font-normal">{total}</div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/4 flex lg:my-10 justify-center lg:items-start">
          <div className="fixed bottom-0 z-40 w-full bg-slate-100 bg-opacity-30 backdrop-blur-md lg:backdrop-blur-0 lg:bg-transparent lg:sticky lg:top-32">
            <div className="flex flex-row lg:flex-col items-center justify-evenly">
              {cartItems && cartItems.length > 0 && (
                <div className="lg:flex">
                  <div className="flex w-full lg:w-48 xl:w-60 2xl:w-72 justify-center lg:justify-end items-end my-2 mx-1 lg:m-5 space-x-2 py-1 lg:border-b border-slate-700">
                    <div className="text-base md:text-xl">Total: CAD</div>
                    <div className="text-lg md:text-2xl font-normal">
                      {total}
                    </div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} method="POST">
                {/* Notice */}
                <div className="w-full text-red-700 text-center text-sm md:text-base">
                  Please use the testing card number:{" "}
                  <p className="italic text-lg md:text-2xl font-normal">
                    4242 4242 4242 4242
                  </p>
                  Any future expire date, any CVC.
                </div>
                <button
                  role="link"
                  id="submit"
                  type="submit"
                  className="text-sm md:text-base flex justify-center items-center w-48 xl:w-60 2xl:w-72 my-2 mx-1 lg:m-5 rounded-lg bg-indigo-600 text-slate-200 hover:text-slate-100 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700 transition-all duration-200 ease-in-out"
                >
                  <div className="m-1 font-light">Checkout with</div>
                  <div className="m-1">
                    <FaCcStripe size={50} />
                  </div>
                </button>
              </form>
              <div className="text-sm md:text-base w-48 xl:w-60 2xl:w-72 my-2 mx-1 lg:m-5 hidden lg:flex flex-col items-start justify-center">
                <div className="m-1">Payment methods</div>
                <div className="flex gap-2">
                  <div className="text-2xl">
                    <SiVisa />
                  </div>
                  <div className="text-2xl">
                    <SiMastercard />
                  </div>
                  <div className="text-2xl">
                    <SiAmericanexpress />
                  </div>
                  <div className="text-2xl">
                    <SiStripe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSubscribtion(Checkout);
