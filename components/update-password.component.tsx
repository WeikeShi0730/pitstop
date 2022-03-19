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
      <div className="text-center self-start m-3 text-lg">
        Update my password?
      </div>
      <button
        onClick={handleClick}
        className="m-3 bg-slate-700 py-2 px-4 text-slate-100 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
      >
        Send a password update email
      </button>
    </>
  );
};

export default UpdatePassword;
