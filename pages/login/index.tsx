import Layout from "../../components/layout.component";
import SignIn from "../../components/sign-in.component";
import SignUp from "../../components/sign-up.component";

const Login = () => {
  return (
    <Layout title="Pitstop | Login">
      <div className="grid grid-cols-2">
        <div>
          <SignUp />
        </div>
        <div>
          <SignIn />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
