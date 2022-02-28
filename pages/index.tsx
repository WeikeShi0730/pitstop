import Layout from "../components/layout.component";
import Home from "../components/home.component";
import { GetStaticProps } from "next";
import { firestoreGetTeamsDoc } from "../firebase/firebase.utils";
import { ProductType, TeamType } from "../interfaces";

const HomePage = () => {
  return (
    <Layout title="Pitstop | Home">
      <Home />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const productsList: ProductType[] | TeamType = await firestoreGetTeamsDoc();
    // const featuredProducts = productsList
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
