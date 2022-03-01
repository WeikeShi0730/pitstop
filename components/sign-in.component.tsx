import React, { useState } from "react";
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
      router.back();
    } catch (error: any) {
      console.error("error signing in with google: ", error.message);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmail(signInInfo);
      router.back();
    } catch (error: any) {
      //   toast.error("error signing in: " + error.message, {
      //     position: toast.POSITION.TOP_CENTER,
      //     theme: "dark",
      //   });
      console.error("error signing in with email: ", error.message);
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
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-slate-700 bg-slate-50 bg-opacity-50 backdrop-blur-md rounded-lg py-8 px-10 shadow-md hover:shadow-lg hover:shoadw-slate-700 transition-all ease-in-out duration-200">
        <div className="text-base lg:text-xl font-light mt-4 mb-12 text-center">
          Alrady have an account? Sign in 🔐
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-sm md:text-base">Email</label>
            <input
              required
              name="email"
              type="email"
              className="w-full p-2 text-xs md:text-md border-b border-slate-700 outline-none bg-transparent mb-4"
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
              className="w-full p-2 text-xs md:text-md border-b border-slate-700 outline-none bg-transparent mb-4"
              id="password"
              placeholder="Your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="md:text-sm bg-slate-700 py-2 px-4 text-slate-50 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="w-full max-w-md mx-auto mt-4">
          <div className="flex justify-center">
            <div>
              <button
                className="md:text-sm bg-blue-500 py-2 px-4 text-slate-50 rounded outline-none font-light hover:shadow-md hover:shadow-blue-500 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-200"
                onClick={handleClick}
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button
            onClick={handleClickForgotPassword}
            className="font-light hover:text-slate-500"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
