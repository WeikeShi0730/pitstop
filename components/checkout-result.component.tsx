import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Status {
  status: string;
}

const CheckoutResult = ({ data }: any) => {
  const view = data ? (
    data?.payment_intent?.status === "succeeded" ? (
      <>
        <div className="text-4xl">🥳</div>
        <div className="text">Your order has been confirmed!</div>
      </>
    ) : (
      <>
        <div className="text-4xl">😭</div>
        <div className="text">Your order didn&apos;t go through, please try again!</div>
      </>
    )
  ) : (
    <div className="animate-spin text-4xl">
      <AiOutlineLoading3Quarters />
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-full h-36 p-5 text-slate-50 bg-opacity-80 backdrop-blur-md bg-slate-500">
        {view}
      </div>
    </div>
  );
};

export default CheckoutResult;
