import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../components/layout.component";
import {
  clearCartFirebase,
  updateOrderHistory,
  updateItemsSoldNum,
} from "../../firebase/firebase.utils";
import CheckoutResult from "../../components/checkout-result.component";

import { fetchGetJSON } from "../../utils/api-helpers";
import useSWR from "swr";

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id &&
      `/api/checkout-session/${router.query.session_id}`,
    fetchGetJSON
  );
  const status = data?.payment_intent?.status;

  useEffect(() => {
    const clearCart = async () => {
      if (status === "succeeded") {
        try {
          await Promise.all([
            updateOrderHistory(),
            updateItemsSoldNum(),
            clearCartFirebase(),
          ]);
          // await clearCartFirebase();
        } catch (error) {
          console.error(error);
        }
      }
    };
    clearCart();
  }, [status]);
  if (error) return <div>failed to load</div>;

  return (
    <Layout title="Pitstop | Confirmation">
      <CheckoutResult data={data} />
    </Layout>
  );
};

export default ResultPage;
