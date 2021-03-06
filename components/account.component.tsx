import { useState } from "react";
import {
  CurrentUserType,
  OrderHistoryItemType,
  ProductType,
} from "../interfaces/index";
import AccountMenu from "./account-menu.component";
import AccountOverview from "./account-overview.component";
import Wishlist from "./wishlist.component";
import OrderHistory from "./order-history.component";
import withSubscription from "./hoc.component";

interface AccountPageType {
  wishlistItems: ProductType[];
  currentUser: CurrentUserType["currentUser"];
  orderHistoryItems: OrderHistoryItemType[];
}

const Account = ({
  wishlistItems,
  currentUser,
  orderHistoryItems,
}: AccountPageType) => {
  const [currentSelection, setCurrentSelection] = useState(1);

  const page = () => {
    switch (currentSelection) {
      case 1:
        return (
          <AccountOverview
            currentUser={currentUser}
            orderHistoryItems={orderHistoryItems}
            setCurrentSelection={setCurrentSelection}
          />
        );
      case 2:
        return <Wishlist wishlistItems={wishlistItems} />;
      case 3:
        return <OrderHistory orderHistoryItems={orderHistoryItems} />;
      default:
        break;
    }
  };

  return (
    <div className="text-slate-700 w-full min-h-content flex flex-col md:grid md:grid-cols-4">
      <div className="md:col-span-1 w-full">
        <AccountMenu
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          numWishlistItems={wishlistItems ? wishlistItems.length : 0}
        />
      </div>
      <div className="w-full flex flex-auto md:col-span-3">{page()}</div>
    </div>
  );
};

export default withSubscription(Account);
