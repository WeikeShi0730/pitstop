import React, { useState } from "react";
import { sendChangePasswordEmail } from "../firebase/firebase.utils";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setEmail(() => value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendChangePasswordEmail(email);
      alert("Password reset email sent to: " + email);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-slate-700 bg-slate-50 bg-opacity-50 backdrop-blur-md rounded-lg py-8 px-10 shadow-md hover:shadow-lg hover:shoadw-slate-700 transition-all ease-in-out duration-200">
      <div className="text-center m-5">Reset my password</div>
      <form onSubmit={handleSubmit}>
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
        <div className="flex justify-center items-center mt-6">
          <button
            type="submit"
            className="text-xs md:text-sm bg-slate-700 py-2 px-4 text-slate-50 rounded focus:outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
          >
            Send a password reset email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
