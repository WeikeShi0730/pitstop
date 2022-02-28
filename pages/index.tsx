import Layout from "../components/layout.component";
import Home from "../components/home.component";
import { GetStaticProps } from "next";
import { firestoreGetFeaturedProducts } from "../firebase/firebase.utils";
import { ProductType, TeamType } from "../interfaces";

interface ProductsType {
  featuredProducts: ProductType[];
}

const HomePage = ({ featuredProducts }: ProductsType) => {
  return (
    <Layout title="Pitstop | Home">
      <Home featuredProducts={featuredProducts} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const featuredProducts: ProductType[] | TeamType =
      await firestoreGetFeaturedProducts();
    return {
      props: { featuredProducts },
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      props: {},
    };
  }
};
