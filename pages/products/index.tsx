import Layout from "../../components/layout.component";
import ProductsList from "../../components/products-list.component";
import { GetStaticProps } from "next";
import { firestoreGetTeamsDoc } from "../../firebase/firebase.utils";
import { ProductType, TeamType } from "../../interfaces";

interface ProductsType {
  productsList: ProductType[];
}

const ProductsPage = ({ productsList }: ProductsType) => {
  return (
    <Layout title="Pitstop | Products">
      <div>
        <ProductsList productsList={productsList} />
      </div>
    </Layout>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const productsList: ProductType[] | TeamType = await firestoreGetTeamsDoc();
    return {
      props: { productsList },
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      props: {},
    };
  }
};
