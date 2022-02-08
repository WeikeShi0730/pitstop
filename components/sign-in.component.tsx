import { useState } from "react";
import { useRouter } from "next/router";
import { SignInType } from "../interfaces";
import { signInWithGoogle, signInWithEmail } from "../firebase/firebase.utils";

const SignIn = () => {
  const router = useRouter();
  const [signInInfo, setSignInInfo] = useState<SignInType>({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (error) {
      console.error("error signing in with google: ", error);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmail(signInInfo);
      router.push("/");
    } catch (error) {
      //   toast.error("error signing in: " + error.message, {
      //     position: toast.POSITION.TOP_CENTER,
      //     theme: "dark",
      //   });
      console.error("error signing in with email: ", error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setSignInInfo({
      ...signInInfo,
      [name]: value,
    });
  };

  const handleClickForgotPassword = () => {
    router.push("/reset-password");
  };

  return (
    <>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto mt-10 mb-4 bg-white rounded-lg border border-primaryBorder shadow-default py-8 px-10">
        <div className="text-base lg:text-lg font-light text-primary mt-4 mb-12 text-center">
          Alrady have an account? Sign in 🔐
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-sm md:text-base">Email</label>
            <input
              required
              name="email"
              type="email"
              className="w-full p-2 text-xs md:text-md text-primary border rounded-md outline-none transition duration-150 ease-in-out mb-4"
              id="email"
              placeholder="Your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm md:text-base">Password</label>
            <input
              required
              name="password"
              type="password"
              className="w-full p-2 text-xs md:text-md text-primary border rounded-md outline-none transition duration-150 ease-in-out mb-4"
              id="password"
              placeholder="Your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="text-xs md:text-sm bg-gray-800 py-2 px-4 text-white rounded border focus:outline-none font-light"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="w-full max-w-md mx-auto mt-4">
          <div className="flex justify-center">
            <div>
              <button
                className="text-xs md:text-sm bg-blue-500 py-2 px-4 text-white rounded border focus:outline-none focus:bg-gray-550 font-light"
                onClick={handleClick}
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button onClick={handleClickForgotPassword} className="font-light">
            Forgot password?
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
