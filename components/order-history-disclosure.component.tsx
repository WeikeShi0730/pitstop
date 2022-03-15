import React from "react";
import { OrderHistoryItemType } from "../interfaces/index";

interface OrderHistoryItem {
  orderHistoryItem: OrderHistoryItemType;
}

const OrderHistoryDisclosure = ({ orderHistoryItem }: OrderHistoryItem) => {
  return <div>OrderHistoryDisclosure</div>;
};

export default OrderHistoryDisclosure;
