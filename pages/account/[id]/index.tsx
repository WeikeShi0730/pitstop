import Layout from "../../../components/layout.component";
import Account from "../../../components/account.component";

const AccountPage = () => {
  return (
    <Layout title="Pitstop | Account">
      <Account wishlistItems={[]} currentUser={null} orderHistoryItems={[]} />
    </Layout>
  );
};

export default AccountPage;
