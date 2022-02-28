import Image from "next/image";
import { ProductType } from "../interfaces/index";
import { imgLoader } from "../utils/image-loader";
import { updateUserCartFirestore } from "../firebase/firebase.utils";
interface ProductsType {
  featuredProduct: ProductType;
}

const FeatureProduct = ({ featuredProduct }: ProductsType) => {
  const { imageUrl, price, name } = featuredProduct;
  const handleClick = async () => {
    try {
      await updateUserCartFirestore(featuredProduct, "ADD");
      // notificaiton !!!!!!!!!!!!!!!!!!!
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="p-3 m-5 rounded-lg text-center text-slate-700 bg-opacity-30 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700">
      <div className="flex relative w-full h-56 justify-center items-center m-auto p-3">
        <div className="relative w-full h-full bg-[#F8F8F8] rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-500">
          <Image
            src={imageUrl}
            className="object-contain rounded-lg"
            loader={imgLoader}
            unoptimized
            alt={`${name} image`}
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center relative m-3 p-3 border-y-2 border-slate-50">
        <div className="text my-1 text-left">{name}</div>
        <div className="flex items-center justify-between my-1 gap-3">
          <div className="flex items-end gap-1">
            <div className="">${price}</div>
          </div>
          <button
            onClick={handleClick}
            className="bg-orange-theme text-slate-50 w-fit p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-orange-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
