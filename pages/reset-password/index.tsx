import Layout from "../../components/layout.component";
import ResetPassword from "../../components/reset-password.component";

const ResetPasswordPage = () => {
  return (
    <Layout title="Pitstop | Reset password">
      <div className="flex w-1/2 h-content m-auto items-center justify-center p-5">
        <div className="w-full p-5">
          <ResetPassword />
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;
