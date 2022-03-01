import Layout from "../../components/layout.component";
import SignIn from "../../components/sign-in.component";
import SignUp from "../../components/sign-up.component";

const Login = () => {
  return (
    <Layout title="Pitstop | Login">
      <div className="flex flex-col xl:flex-row h-full xl:h-content p-5 justify-center items-center divide-slate-700">
        <div className="p-5 w-full">
          <SignUp />
        </div>
        <div className="p-5 w-full">
          <SignIn />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
