import { useState, useEffect } from "react";
import { OrderHistoryItemType } from "../interfaces/index";
import { getOrderHistoryItems } from "../firebase/firebase.utils";
import OrderHistoryDisclosure from "./order-history-disclosure.component";
import Loading from "./loading.component";
import { toast } from "react-toastify";
import Pagination from "./pagination.component";

const OrderHistory = () => {
  const numProductsOnPage = 6;
  const [loading, setLoading] = useState<boolean>(false);
  const [orderHistoryItems, setOrderHistoryItems] = useState<
    OrderHistoryItemType[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dividedList, setDevidedList] = useState(orderHistoryItems);

  useEffect(() => {
    const dividedList = orderHistoryItems.slice(
      (currentPage - 1) * numProductsOnPage,
      currentPage * numProductsOnPage
    );
    setDevidedList(dividedList);
  }, [currentPage, orderHistoryItems]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const orderHistoryItems = await getOrderHistoryItems();
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
    return () => setOrderHistoryItems([]);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="md:min-h-content flex w-full justify-center">
        <div className="grid h-full w-full grid-cols-1 gap-10 justify-items-center m-10">
          {orderHistoryItems !== undefined &&
          orderHistoryItems !== null &&
          orderHistoryItems.length > 0 ? (
            <>
              <p className="flex justify-self-start text-slate-700 text-xl col-span-1 py-1 border-b border-slate-700">
                My order history
              </p>
              {dividedList.map((orderHistoryItem, index) => (
                <div
                  key={index}
                  // className="p-5 rounded-lg w-80 text-center text-slate-700 bg-opacity-50 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700"
                  className="w-full"
                >
                  <OrderHistoryDisclosure orderHistoryItem={orderHistoryItem} />
                </div>
              ))}
            </>
          ) : (
            <p className="flex justify-center items-center h-full px-5 gap-x-2 text-xl col-span-1">
              Your order history is empty!
            </p>
          )}

          {dividedList.length > 0 && (
            <div className="flex m-5 gap-x-2 justify-self-center items-center col-span-1">
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                numPages={Math.ceil(
                  orderHistoryItems.length / numProductsOnPage
                )}
                scroll={0}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
