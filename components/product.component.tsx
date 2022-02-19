import { ProductType } from "../interfaces";
import Image from "next/image";
import { imgLoader } from "../utils/image-loader";
import { updateUserCartFirestore } from "../firebase/firebase.utils";

interface Product {
  product: ProductType;
  index: number;
}

const Product = ({ product, index }: Product) => {
  const { name, imageUrl, price } = product;

  // Dynamic styles
  // const mlauto = index % 2 === 0 ? "" : "ml-auto";
  // const flexrowreverse =
  //   index % 2 === 0
  //     ? "flex-row-reverse from-slate-400 to-cyan-400"
  //     : "from-rose-400 to-slate-400";
  // const skew = index % 2 === 0 ? "-skew-x-12" : "skew-x-12";

  const handleClick = async () => {
    try {
      await updateUserCartFirestore(product, "ADD");
      // notificaiton !!!!!!!!!!!!!!!!!!!
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-5 m-5 rounded-lg w-96 text-center text-slate-700 bg-opacity-80 backdrop-blur-sm bg-slate-400 transform-gpu transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-slate-700">
      <div className="flex relative w-full h-56 justify-center items-center m-auto p-3">
        <div className="relative w-full h-full bg-[#F8F8F8] rounded-lg shadow-md transform-gpu transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-500">
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
      <div className="flex flex-col justify-center relative p-3 border-y-2 border-slate-50">
        <div className="text-xl my-1 text-left">{name}</div>
        <div className="flex items-center justify-evenly my-1 gap-3">
          <div className="flex items-end gap-1">
            <div className="">CAD</div>
            <div className="text-xl">{price}</div>
          </div>
          <button
            onClick={handleClick}
            className="bg-orange-theme text-slate-200 w-fit p-3 rounded-lg hover:bg-orange-500 hover:text-salte-50 transform-gpu transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-orange-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Product;

{
  /* <div className="flex relative w-48 h-48">
        <Image
          src={imageUrl}
          className="w-full h-full object-cover"
          loader={imgLoader}
          unoptimized
          alt={`${name} background image`}
          layout="fill"
        />
      </div> */
}
