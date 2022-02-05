import { ProductType } from "../interfaces";
import Product from "./product.component";

interface ProductsList {
  productsList: ProductType[];
}

const ProductsList = ({ productsList }: ProductsList) => {
  console.log(productsList);
  return (
    <div>
      {productsList.map((product: ProductType, index: number) => {
        return (
          <>
            <Product product={product} index={index} />
          </>
        );
      })}
    </div>
  );
};

export default ProductsList;
