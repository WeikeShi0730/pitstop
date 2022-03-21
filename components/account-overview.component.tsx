import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { CurrentUserType, OrderHistoryItemType } from "../interfaces/index";
import AccountOverviewLayout from "./account-overview-layout.component";
import UpdatePassword from "./update-password.component";
import smoothscroll from "smoothscroll-polyfill";

interface AccountOverviewType {
  currentUser: CurrentUserType["currentUser"];
  orderHistoryItems: OrderHistoryItemType[];
  setCurrentSelection: (currentSelection: number) => void;
}

const AccountOverview = ({
  currentUser,
  orderHistoryItems,
  setCurrentSelection,
}: AccountOverviewType) => {
  const [latestOrderHistory, setLatestOrderHistory] =
    useState<{ total: number; timeStamp: string }>();
  useEffect(() => {
    if (orderHistoryItems !== undefined && orderHistoryItems.length > 0) {
      const latestOrder = orderHistoryItems[0];
      const total = latestOrder.items.reduce((acc, currentProduct) => {
        return acc + currentProduct.count * currentProduct.product.price;
      }, 0);
      setLatestOrderHistory({
        total: total,
        timeStamp: latestOrder.timeStamp,
      });
    }
  }, [orderHistoryItems]);

  const orderHistorySummary = useMemo(() => {
    return orderHistoryItems.reduce(
      (acc, orderHistoryItem) => {
        const currentHistory = orderHistoryItem.items.reduce(
          (acc, currentProduct) => {
            return {
              count: acc.count + currentProduct.count,
              total:
                acc.total + currentProduct.count * currentProduct.product.price,
            };
          },
          { count: 0, total: 0 }
        );
        return {
          count: currentHistory.count + acc.count,
          total: currentHistory.total + acc.total,
        };
      },
      { count: 0, total: 0 }
    );
  }, [orderHistoryItems]);

  return (
    <div className="m-10 flex flex-col w-full gap-y-5">
      <div className="w-fit flex justify-start text-slate-700 text-xl py-1 border-b border-slate-700">
        Overview
      </div>
      <div className="my-5 text-3xl flex justify-center">
        Hi, {currentUser?.displayName}!
      </div>

      <AccountOverviewLayout>
        <div className="text-center self-start m-3 text-lg">Summary</div>
        <div className="m-3">
          <div className="text-center py-2 px-4 leading-8">
            You&apos;ve bought{" "}
            <span className="underline-primary font-normal text-lg">
              {orderHistorySummary.count}
            </span>{" "}
            stickers!
          </div>
          <div className="text-center py-2 px-4 leading-8">
            CAD{" "}
            <span className="underline-primary font-normal text-lg">
              {orderHistorySummary.total.toFixed(2)}
            </span>{" "}
            in total. 💸
          </div>
        </div>
      </AccountOverviewLayout>
      <AccountOverviewLayout>
        <div className="text-center self-start m-3 text-lg">Latest Order</div>
        {orderHistoryItems && orderHistoryItems.length > 0 ? (
          <>
            <div className="m-3 self-start">
              <div className="px-4">
                Order date:{" "}
                <span className="text-lg font-normal">
                  {latestOrderHistory && latestOrderHistory.timeStamp}
                </span>
              </div>
              <div className="px-4">
                Total:{" "}
                <span className="text-lg font-normal">
                  CAD{" "}
                  {latestOrderHistory && latestOrderHistory.total.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="self-end py-2 px-4 underline-primary font-normal text-lg text-right"
              onClick={() => {
                setCurrentSelection(3);
                smoothscroll.polyfill();
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              All orders →
            </button>
          </>
        ) : (
          <div className="m-3 text-center">No orders yet.</div>
        )}
      </AccountOverviewLayout>
      <AccountOverviewLayout>
        <UpdatePassword currentUser={currentUser} />
      </AccountOverviewLayout>
      <AccountOverviewLayout>
        <div className="text-center self-start m-3 text-lg">Need support?</div>
        <Link href="/contact">
          <a className="m-3 bg-slate-700 py-2 px-4 text-slate-100 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200">
            Contact us
          </a>
        </Link>
      </AccountOverviewLayout>
    </div>
  );
};

export default AccountOverview;
