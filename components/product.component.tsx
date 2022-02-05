import { ProductType } from "../interfaces";
import Image from "next/image";
import { imgLoader } from "./image-loader";

interface Product {
  product: ProductType;
  index: number;
}

const Product = ({ product, index }: Product) => {
  const { id, name, imageUrl, price } = product;

  const mlauto = index % 2 === 0 ? "" : "ml-auto";
  const flexrowreverse = index % 2 === 0 ? "flex-row-reverse" : "";
  return (
    <div className="flex justify-center mx-auto w-full">
      <div className={`flex m-10 w-2/3 bg-slate-200 ${flexrowreverse}`}>
        <div className="flex relative w-1/3 h-48 justify-center items-center m-auto p-3">
          <Image
            src={imageUrl}
            className="w-full h-full object-contain"
            loader={imgLoader}
            unoptimized
            alt={`${name} image`}
            layout="fill"
          />
        </div>
        <div className="flex flex-col p-10 bg-slate-400 w-2/3">
          <div className={`text-3xl my-3 ${mlauto}`}>{name}</div>
          <div className={`flex items-center gap-3 mt-24 ${mlauto}`}>
            <div className="flex items-end gap-1">
              <div className="">CAD</div>
              <div className="text-2xl">{price}</div>
            </div>
            <div className="bg-orange-theme text-slate-200 w-fit p-3">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
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
