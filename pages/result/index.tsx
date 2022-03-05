import { NextPage } from "next";
import Layout from "../../components/layout.component";
import CheckoutResult from "../../components/checkout-result.component";

const ResultPage: NextPage = () => {
  return (
    <Layout title="Pitstop | Confirmation">
      <CheckoutResult />
    </Layout>
  );
};

export default ResultPage;
