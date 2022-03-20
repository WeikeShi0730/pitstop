import { useEffect, useState } from "react";
import { ProductType } from "../interfaces";
import Image from "next/image";
import withSubscribtion from "./hoc.component";
import { imgLoader } from "../utils/image-loader";
import {
  updateUserCartFirestore,
  updateWishlist,
} from "../firebase/firebase.utils";
import { toast } from "react-toastify";
import Loading from "./loading.component";

interface Product {
  product: ProductType;
  wishlistItems: ProductType[];
}

const Product = ({ product, wishlistItems }: Product) => {
  const { name, imageUrl, price } = product;
  const [loading, setLoading] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(false);

  useEffect(() => {
    const contain =
      wishlistItems !== undefined &&
      wishlistItems !== null &&
      wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);
    if (contain) {
      setHeart(() => true);
    } else {
      setHeart(() => false);
    }
    return () => setHeart(() => false);
  }, [wishlistItems, product]);

  const handleClickHeart = async () => {
    try {
      setLoading(true);
      if (heart) {
        await updateWishlist(product, "REMOVE");
        setLoading(false);
        toast.info("Item removed from your wishlist", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        await updateWishlist(product, "ADD");
        setLoading(false);
        toast.success("Item added to your wishlist", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error(error.message);
    }
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      await updateUserCartFirestore(product, "ADD");
      setLoading(false);
      toast.success("Item added to your shopping cart", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error(error.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="p-5 rounded-lg text-slate-700 bg-opacity-30 bg-slate-100 transition-all duration-200 ease-in-out shadow-md hover:shadow-slate-500">
        <div className="flex relative w-full h-56 justify-center items-center m-auto p-3">
          <div className="relative w-full h-full bg-[#F8F8F8] rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-slate-500">
            <Image
              src={imageUrl}
              className="object-contain"
              // loader={imgLoader}
              unoptimized
              alt={`${name} image`}
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center relative m-3 py-2 border-y-2 border-slate-50">
          <div className="text-xl my-1 text-left h-12">{name}</div>
          <div className="text my-1 text-left text-2xl">
            <button onClick={handleClickHeart}>{heart ? "♥" : "♡"}</button>
          </div>
          <div className="flex items-center justify-between my-1 gap-3">
            <div className="flex items-end gap-1">
              <div className="">CAD</div>
              <div className="text-xl">{price}</div>
            </div>
            <button
              onClick={handleClick}
              className="bg-orange-theme text-slate-100 w-fit p-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-orange-600"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSubscribtion(Product);
