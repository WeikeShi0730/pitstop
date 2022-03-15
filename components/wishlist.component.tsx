import { useState, useEffect } from "react";
import Product from "./product.component";
import { ProductType } from "../interfaces/index";
import Pagination from "./pagination.component";

interface WishlistItemType {
  wishlistItems: ProductType[];
}

const Wishlist = ({ wishlistItems }: WishlistItemType) => {
  const numProductsOnPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [dividedList, setDevidedList] = useState(wishlistItems);
  useEffect(() => {
    const dividedList = wishlistItems.slice(
      (currentPage - 1) * numProductsOnPage,
      currentPage * numProductsOnPage
    );
    if (dividedList.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    setDevidedList(dividedList);
  }, [currentPage, wishlistItems]);
  return (
    <div className="md:min-h-content flex justify-center">
      <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center m-10">
        {wishlistItems !== undefined &&
        wishlistItems !== null &&
        wishlistItems.length > 0 ? (
          <>
            <p className="flex gap-x-2 justify-self-start text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
              My wishlist
            </p>
            {dividedList.map((wishlistItem) => (
              <div
                key={wishlistItem.id}
                className="p-5 rounded-lg w-full text-center text-slate-700 bg-opacity-50 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700"
              >
                <Product product={wishlistItem} wishlistItems={wishlistItems} />
              </div>
            ))}
          </>
        ) : (
          <p className="flex justify-center items-center h-full px-5 gap-x-2 text-xl col-span-1 lg:col-span-2 2xl:col-span-3">
            Your wishlist is empty!
          </p>
        )}

        {dividedList.length > 0 && (
          <div className="flex m-5 gap-x-2 justify-self-center items-center col-span-1 lg:col-span-2 2xl:col-span-3">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              numPages={Math.ceil(wishlistItems.length / numProductsOnPage)}
              scroll={0}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
