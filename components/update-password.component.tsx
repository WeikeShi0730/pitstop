import { useState } from "react";
import { CurrentUserType } from "../interfaces/index";
import { sendChangePasswordEmail } from "../firebase/firebase.utils";
import Loading from "./loading.component";
import { toast } from "react-toastify";

const UpdatePassword = ({ currentUser }: CurrentUserType) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const email = currentUser?.email;
      if (email) {
        setLoading(true);
        await sendChangePasswordEmail(email);
        setLoading(false);
        toast.success(`Password reset email sent to: ${email}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(`Error sending the email: ${error.message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error sending the email: ", error.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-slate-700 bg-slate-100 bg-opacity-30 backdrop-blur-md rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200">
        <div className="flex flex-col items-center">
          <div className="text-center m-3">Update my password?</div>
          <button
            onClick={handleClick}
            className="bg-slate-700 m-3 py-2 px-4 text-slate-100 rounded border focus:outline-none font-light"
          >
            Send a password update email
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
