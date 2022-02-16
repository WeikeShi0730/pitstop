import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { FaCcStripe } from "react-icons/Fa";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState();
  return (
    <div className="">
      <form action="/create-checkout-session" method="POST">
        <PaymentElement />
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
  );
};

export default CheckoutForm;
