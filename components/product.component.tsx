import { ProductType } from "../interfaces";

interface Product {
  product: ProductType;
  index: number;
}

const Product = ({ product, index }: Product) => {
  return (
    <div>
      {product.name} {index}
    </div>
  );
};

export default Product;
