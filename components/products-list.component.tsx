import { ProductType } from "../interfaces";
import Product from "./product.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  return (
    <div>
      {productsList.map((product: ProductType, index: number) => {
        return (
          <div key={index}>
            <Product product={product} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
