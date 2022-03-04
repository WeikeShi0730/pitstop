import React from "react";
import Loading from "./loading.component";

const CheckoutResult = ({ data }: any) => {
  const view = data ? (
    data?.payment_intent?.status === "succeeded" ? (
      <>
        <div className="text-4xl">🥳</div>
        <div className="text leading-8 text-center">
          Your order has been confirmed!
        </div>
      </>
    ) : (
      <>
        <div className="text-4xl">😭</div>
        <div className="text leading-8 text-center">
          Your order didn&apos;t go through, please try again!
        </div>
      </>
    )
  ) : (
    <Loading />
  );

  return (
    <div className="flex justify-center items-center h-content">
      <div className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto gap-y-5 p-5 rounded-lg text-slate-700 bg-opacity-80 backdrop-blur-md bg-slate-50 shadow-2xl">
        {view}
      </div>
    </div>
  );
};

export default CheckoutResult;
