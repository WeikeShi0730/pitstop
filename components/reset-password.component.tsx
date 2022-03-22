import React, { useState } from "react";
import { sendChangePasswordEmail } from "../firebase/firebase.utils";
import { toast } from "react-toastify";
import Loading from "./loading.component";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setEmail(() => value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await sendChangePasswordEmail(email);
      setLoading(false);
      toast.success("Password reset email sent", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setResult(true);
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
      console.error(error.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-content flex justify-center items-center">
        {result ? (
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-10 text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200 font-light">
            <div className="flex flex-col justify-center items-center gap-y-5 text-sm md:text-base">
              <div className="text-4xl">🔐</div>
              <div className="text leading-8 text-center">
                Password reset email has been sent to{" "}
                <span className="italic text-base md:text-xl font-normal">{email}</span>, use the link
                found in the email to reset.
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto my-10 text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200 font-light">
            <div className="text-center m-5 text-base lg:text-xl">Reset my password</div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-sm md:text-base">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="text-sm md:text-base w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4"
                  id="email"
                  placeholder="Your email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  type="submit"
                  className="text-sm md:text-base bg-slate-700 py-2 px-4 text-slate-100 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
                >
                  Send a password reset email
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
