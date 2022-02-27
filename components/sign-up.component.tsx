import { useState } from "react";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
import { signUpWithEmailAndPassword } from "../firebase/firebase.utils";
import { SignUpType } from "../interfaces/index";

const SignUp = () => {
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = useState<SignUpType>({
    displayName: "",
    email: "",
    password: "",
  });

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
      await signUpWithEmailAndPassword(signUpInfo);
      router.back();
      //   toast.success("success ✅", {
      //     position: toast.POSITION.TOP_CENTER,
      //     theme: "dark",
      //     autoClose: 2000,
      //   });
    } catch (error: any) {
      //   toast.error("error creating the profile: " + error.message, {
      //     position: toast.POSITION.TOP_CENTER,
      //     theme: "dark",
      //   });
      console.error("Error creating the profile: ", error.message);
    }
  };

  return (
    <>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-slate-700 bg-slate-50 bg-opacity-50 backdrop-blur-md rounded-lg py-8 px-10 shadow-md hover:shadow-lg hover:shoadw-slate-700 transition-all ease-in-out duration-200">
        <h1 className="lg:text-xl font-light text-primary mt-4 mb-12 text-center">
          Don&apos;t have an account? Sign up 🔐
        </h1>
        <form onSubmit={handleSignUpFormSubmit}>
          <div>
            <label className="text-sm md:text-base">Username</label>
            <input
              required
              name="displayName"
              type="text"
              className="text-xs md:text-md w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4"
              id="displayName"
              placeholder="Your username"
              onChange={handleChange}
              maxLength={10}
            />
          </div>
          <div>
            <label className="text-sm md:text-base">Email</label>
            <input
              required
              name="email"
              type="email"
              className="text-xs md:text-md w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4"
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
              className="text-xs md:text-md w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4"
              id="password"
              placeholder="Your password"
              minLength={6}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="md:text-sm bg-slate-700 py-2 px-4 text-slate-50 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
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
