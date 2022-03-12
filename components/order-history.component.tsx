const OrderHistory = () => {
  return (
    <div className="md:min-h-content flex justify-center">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center my-10">
        <p className="flex gap-x-2 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
          My order history
        </p>
      </div>
    </div>
  );
};

export default OrderHistory;
