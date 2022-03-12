import { useState } from "react";
import AccountMenu from "./account-menu.component";
import Wishlist from "./wishlist.component";
import OrderHistory from "./order-history.component";
import withSubscribtion from "./hoc.component";

const Account = ({ wishlistItems }: any) => {
  const [currentSelection, setCurrentSelection] = useState(1);

  const page = () => {
    switch (currentSelection) {
      case 1:
        return;
      case 2:
        return <Wishlist wishlistItems={wishlistItems} />;
      case 3:
        return <OrderHistory />;
      default:
        break;
    }
  };

  return (
    <div className="text-slate-700 min-h-content w-full">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 w-full h-full">
          <div className="lg:sticky lg:top-20">
            <AccountMenu
              currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}
              numWishlistItems={wishlistItems ? wishlistItems.length : 0}
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">{page()}</div>
      </div>
    </div>
  );
};

export default withSubscribtion(Account);
