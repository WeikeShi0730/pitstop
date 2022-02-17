import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { formatAmountForStripe } from "../../../utils/stripe-helpers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const total: number = req.body.total;

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Total",
            amount: formatAmountForStripe(total, "CAD"),
            currency: "CAD",
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        // success_url: `${req.headers.origin}`,
        // cancel_url: `${req.headers.origin}`,
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);
      res.status(200).json(checkoutSession);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
