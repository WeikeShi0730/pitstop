import Layout from "../../components/layout.component";
import SignIn from "../../components/sign-in.component";
import SignUp from "../../components/sign-up.component";

const Login = () => {
  return (
    <Layout title="Pitstop | Login">
      <div className="flex flex-col lg:flex-row h-full m-auto w-full justify-center items-center p-5 lg:divide-x divide-slate-700">
        <div className="p-5 w-full h-full">
          <SignUp />
        </div>
        <div className="p-5 w-full h-full">
          <SignIn />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
