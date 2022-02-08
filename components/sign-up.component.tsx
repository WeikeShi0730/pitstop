import * as React from "react";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
import { signUpWithEmailAndPassword } from "../firebase/firebase.utils";
import { SignUpType } from "../interfaces/index";

const SignUp = () => {
  const router = useRouter();
  const [signUpInfo, setSignUpInfo] = React.useState<SignUpType>({
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
      router.push("/");
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
    <React.Fragment>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto mt-10 mb-4 bg-white rounded-lg border border-primaryBorder shadow-default py-8 px-10">
        <h1 className="text-base lg:text-lg font-light text-primary mt-4 mb-12 text-center">
          Don&apos;t have an account? Sign up 🔐
        </h1>
        <form onSubmit={handleSignUpFormSubmit}>
          <div>
            <label className="text-sm md:text-base">Username</label>
            <input
              required
              name="displayName"
              type="text"
              className="text-xs md:text-md w-full p-2 text-primary border rounded-md outline-none transition duration-150 ease-in-out mb-4"
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
              className="text-xs md:text-md w-full p-2 text-primary border rounded-md outline-none transition duration-150 ease-in-out mb-4"
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
              className="text-xs md:text-md w-full p-2 text-primary border rounded-md outline-none transition duration-150 ease-in-out mb-4"
              id="password"
              placeholder="Your password"
              minLength={6}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="text-xs md:text-sm bg-gray-800 py-2 px-4 text-white rounded border focus:outline-none font-light"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
