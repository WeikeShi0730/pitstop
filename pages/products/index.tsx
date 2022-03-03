import Layout from "../../components/layout.component";
import ProductsList from "../../components/products-list.component";
import { GetStaticProps } from "next";
import { firestoreGetAllProducts } from "../../firebase/firebase.utils";
import { ProductType, TeamType } from "../../interfaces";
import PageBackground from "../../components/page-background.component";

interface ProductsType {
  productsList: ProductType[];
}

const ProductsPage = ({ productsList }: ProductsType) => {
  const info = {
    fullname: "Pitstop ™",
    teamBackgrounds: ["/2021f1grid.jpeg"],
  };
  return (
    <Layout title="Pitstop | Products">
      <PageBackground info={info} />
      <ProductsList productsList={productsList} />
    </Layout>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const productsList: ProductType[] | TeamType = await firestoreGetAllProducts();
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

// ALSO GET BG IMAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
