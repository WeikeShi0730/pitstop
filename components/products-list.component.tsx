import { ProductType } from "../interfaces";
import Product from "./product.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center">
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
