import { ProductType } from "../interfaces";
import Product from "./product.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  return (
    <div className="flex justify-center w-full my-20">
      <div className="flex flex-row flex-wrap justify-center w-4/5">
        {productsList.map((product: ProductType, index: number) => {
          return (
            <div key={index}>
              <Product product={product} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
