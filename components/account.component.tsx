import { useState } from "react";
import AccountMenu from "./account-menu.component";
import AccountOverview from "./account-overview.component";
import Wishlist from "./wishlist.component";
import OrderHistory from "./order-history.component";
import withSubscribtion from "./hoc.component";

const Account = ({ wishlistItems, currentUser }: any) => {
  const [currentSelection, setCurrentSelection] = useState(1);

  const page = () => {
    switch (currentSelection) {
      case 1:
        return <AccountOverview currentUser={currentUser}/>;
      case 2:
        return <Wishlist wishlistItems={wishlistItems} />;
      case 3:
        return <OrderHistory />;
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

export default withSubscribtion(Account);
