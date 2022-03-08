import Product from "./product.component";
import { ProductType } from "../interfaces/index";

interface WishlistItemType {
  wishlistItems: ProductType[];
}

const Wishlist = ({ wishlistItems }: WishlistItemType) => {
  return (
    <div className="w-full h-full flex justify-center items-center my-10 lg:my-16">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center">
        {wishlistItems !== undefined &&
        wishlistItems !== null &&
        wishlistItems.length > 0 ? (
          <>
            <p className="flex gap-x-2 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
              My wishlist
            </p>
            {wishlistItems.map((wishlistItem) => (
              <div
                key={wishlistItem.id}
                className="p-5 rounded-lg w-80 text-center text-slate-700 bg-opacity-50 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700"
              >
                <Product product={wishlistItem} wishlistItems={wishlistItems} />
              </div>
            ))}
          </>
        ) : (
          <p className="flex justify-center items-center h-full p-5 gap-x-2 text-xl col-span-1 lg:col-span-2 2xl:col-span-3">
            Your wishlist is empty!
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
