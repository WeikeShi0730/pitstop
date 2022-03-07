import Layout from "../../components/layout.component";
import Checkout from "../../components/checkout.component";

const CheckoutPage = () => {
  return (
    <Layout title="Pitstop | Checkout">
      <Checkout cartItems={[]} />
    </Layout>
  );
};

export default CheckoutPage;
