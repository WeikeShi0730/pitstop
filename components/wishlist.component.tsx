import { useState, useEffect } from "react";
import Product from "./product.component";
import { ProductType } from "../interfaces/index";
import Pagination from "./pagination.component";
import Loading from "./loading.component";

interface WishlistItemType {
  wishlistItems: ProductType[];
}

const Wishlist = ({ wishlistItems }: WishlistItemType) => {
  const numProductsOnPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [dividedList, setDevidedList] = useState(wishlistItems);
  const [loading, setLoading] = useState<boolean>(false);
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
    <>
      {loading && <Loading />}
      <div className="flex flex-col h-auto lg:h-full w-full justify-start">
        <div
          className={`${
            wishlistItems !== undefined &&
            wishlistItems !== null &&
            wishlistItems.length > 0
              ? "h-auto"
              : "h-full"
          } grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center m-10`}
        >
          {wishlistItems !== undefined &&
          wishlistItems !== null &&
          wishlistItems.length > 0 ? (
            <>
              <p className="flex gap-x-2 justify-self-start text-slate-700 text-lg md:text-2xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
                My wishlist
              </p>
              {dividedList.map((wishlistItem) => (
                <div key={wishlistItem.id} className="w-80">
                  <Product
                    product={wishlistItem}
                    wishlistItems={wishlistItems}
                    setLoading={setLoading}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-grow justify-center items-center h-full col-span-1 lg:col-span-2 2xl:col-span-3">
              <p className="px-5 gap-x-2 text-lg md:text-2xl">
                Your wishlist is empty!
              </p>
            </div>
          )}
        </div>
        {dividedList.length > 0 && (
          <div className="flex justify-center m-10 mt-auto">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              numPages={Math.ceil(wishlistItems.length / numProductsOnPage)}
              scroll={0}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
