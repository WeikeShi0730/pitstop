import { useState } from "react";
import { useRouter } from "next/router";
import { signUpWithEmailAndPassword } from "../firebase/firebase.utils";
import { SignUpType } from "../interfaces/index";
import { toast } from "react-toastify";
import Loading from "./loading.component";

const SignUp = () => {
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    displayName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
  };

  const handleSignUpFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      setLoading(true);
      await signUpWithEmailAndPassword(signUpInfo);
      router.back();
      setLoading(false);
      toast.success("🥳 Signed up successfully!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error creating the profile: ", error.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200">
        <h1 className="text-base lg:text-xl font-light mt-4 mb-12 text-center">
          Don&apos;t have an account? Sign up 🔐
        </h1>
        <form onSubmit={handleSignUpFormSubmit}>
          <div className="my-5">
            <label className="relative text-sm md:text-base">
              <input
                required
                name="displayName"
                aria-label="displayName"
                type="text"
                className="w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none transition duration-200"
                id="displayName"
                onChange={handleChange}
                maxLength={10}
              />
              <span className="absolute left-0 top-0 px-2 transition duration-200 input-text">
                Username
              </span>
            </label>
          </div>
          <div className="my-5">
            <label className="relative text-sm md:text-base">
              <input
                required
                name="email"
                aria-label="signUpEmail"
                type="email"
                className="w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none transition duration-200"
                id="email"
                onChange={handleChange}
              />
              <span className="absolute left-0 top-0 px-2 transition duration-200 input-text">
                Email
              </span>
            </label>
          </div>
          <div className="my-5">
            <label className="relative text-sm md:text-base">
              <input
                required
                name="password"
                type="password"
                className="w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none transition duration-200"
                id="signUpPassword"
                minLength={6}
                onChange={handleChange}
              />
              <span className="absolute left-0 top-0 px-2 transition duration-200 input-text">
                Password
              </span>
            </label>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              id="signUpButton"
              className="text-sm md:text-base bg-slate-700 py-2 px-4 text-slate-100 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
