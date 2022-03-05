import { useState } from "react";
import { ProductType } from "../interfaces";
import Image from "next/image";
import { imgLoader } from "../utils/image-loader";
import { updateUserCartFirestore } from "../firebase/firebase.utils";
import { toast } from "react-toastify";
import Loading from "./loading.component";

interface Product {
  product: ProductType;
  index: number;
}

const Product = ({ product }: Product) => {
  const { name, imageUrl, price } = product;
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await updateUserCartFirestore(product, "ADD");
      setLoading(false);
      toast.success("Item has been added to your cart", {
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
        hideProgressBar: false,
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
      <div className="p-5 rounded-lg w-96 text-center text-slate-700 bg-opacity-50 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700">
        <div className="flex relative w-full h-56 justify-center items-center m-auto p-3">
          <div className="relative w-full h-full bg-[#F8F8F8] rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-500">
            <Image
              src={imageUrl}
              className="object-contain"
              loader={imgLoader}
              unoptimized
              alt={`${name} image`}
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center relative m-3 py-2 border-y-2 border-slate-50">
          <div className="text-xl my-1 text-left">{name}</div>
          <div className="flex items-center justify-between my-1 gap-3">
            <div className="flex items-end gap-1">
              <div className="">CAD</div>
              <div className="text-xl">{price}</div>
            </div>
            <button
              onClick={handleClick}
              className="bg-orange-theme text-slate-50 w-fit p-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-orange-600"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
