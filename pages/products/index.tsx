import Layout from "../../components/layout.component";
import ProductsList from "../../components/products-list.component";
import { GetStaticProps } from "next";
import { firestoreGetTeamsDoc } from "../../firebase/firebase.utils";
import { ProductType, TeamType } from "../../interfaces";
import TeamBackground from "../../components/team-background.component";

interface ProductsType {
  productsList: ProductType[];
}

const ProductsPage = ({ productsList }: ProductsType) => {
  const team = {
    fullname: "Pitstop ™",
    photos: ["/2021f1grid.jpeg"],
  };
  return (
    <Layout title="Pitstop | Products">
      <TeamBackground team={team} />
      <ProductsList productsList={productsList} />
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

// ALSO GET BG IMAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
