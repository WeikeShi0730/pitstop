import { useEffect, useState } from "react";
import { handleCheckoutSuccess } from "../firebase/firebase.utils";
import { useRouter } from "next/router";
import { fetchGetJSON } from "../utils/api-helpers";
import useSWR from "swr";
import Loading from "./loading.component";

const CheckoutResult = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<any>(false);
  const router = useRouter();
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id &&
      `/api/checkout-session/${router.query.session_id}`,
    fetchGetJSON
  );

  useEffect(() => {
    if (data) {
      // setLoading(false);
      setStatus(data?.payment_intent?.status);
    } else {
      // setLoading(true);
    }
  }, [data]);

  useEffect(() => {
    const clearCart = async () => {
      if (status === "succeeded") {
        try {
          setLoading(true);
          await handleCheckoutSuccess();
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      }
    };
    clearCart();
  }, [status]);

  return (
    <>
      {loading && <Loading />}
      <div className="flex justify-center items-center h-content">
        {data && (data?.payment_intent?.status !== "succeeded" || error) ? (
          <div className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto gap-y-5 p-5 rounded-lg text-slate-700 bg-opacity-80 backdrop-blur-md bg-slate-50 shadow-2xl">
            <div className="text-4xl">😭</div>
            <div className="text leading-8 text-center">
              Your order didn&apos;t go through, please try again!
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto gap-y-5 p-5 rounded-lg text-slate-700 bg-opacity-80 backdrop-blur-md bg-slate-50 shadow-2xl">
            <div className="text-4xl">🥳</div>
            <div className="text leading-8 text-center">
              Your order has been confirmed!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutResult;
