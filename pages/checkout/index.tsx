import Layout from "../../components/layout.component";
import Checkout from "../../components/checkout.component";

const CheckoutPage = () => {
  return (
    <Layout title="Pitstop | Checkout">
      <Checkout cartItems={null} />
    </Layout>
  );
};

export default CheckoutPage;

// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }
