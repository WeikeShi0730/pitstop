import { useState, useEffect } from "react";
import { getOrderHistoryItems } from "../firebase/firebase.utils";
import Loading from "./loading.component";
import { toast } from "react-toastify";

const OrderHistory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [orderHistoryItems, setOrderHistoryItems] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const orderHistoryItems = await getOrderHistoryItems();
        console.log(orderHistoryItems)
        setLoading(false);
        setOrderHistoryItems(orderHistoryItems);
      } catch (error) {
        setLoading(false);
        toast.error(
          "Sorry, order history data cannot be retrived at this time.",
          {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        console.error(error);
      }
    };
    getData();
    return () => setOrderHistoryItems(null);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="md:min-h-content flex justify-center">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center my-10">
          <p className="flex gap-x-2 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
            My order history
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
