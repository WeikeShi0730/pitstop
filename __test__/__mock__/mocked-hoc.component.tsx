import { useState, useEffect } from "react";
import {
  CurrentUserType,
  CartItemType,
  SnapshotType,
  ProductType,
  OrderHistoryItemType,
} from "../../interfaces/index";

const MockedWithSubscription = <P extends object>(
  Component: React.FunctionComponent<P>
) => {
  const useComponent = (props: P) => {
    // const currentUser: CurrentUserType = null;
    console.log("helloooooo")
    const cartItems: CartItemType[] = [
      {
        product: {
          imageUrl: "test",
          name: "product1",
          price: 0.55,
          id: "product1",
          featured: false,
          sold: 0,
          teamId: "",
        },
        count: 2,
      },
      {
        product: {
          imageUrl: "test",
          name: "product2",
          price: 0.72,
          id: "product2",
          featured: false,
          sold: 0,
          teamId: "",
        },
        count: 10,
      },
    ];
    // const wishlistItems: ProductType = [];
    // const orderHistoryItems: OrderHistoryItemType = [];
    return (
      <Component
        {...(props as P)}
        // currentUser={currentUser}
        cartItems={cartItems}
        // wishlistItems={wishlistItems}
        // orderHistoryItems={orderHistoryItems}
      />
    );
  };
  return useComponent;
};

export default MockedWithSubscription;
