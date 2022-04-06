import { useState } from "react";
import { useRouter } from "next/router";
import { auth, signOutGoogle } from "../firebase/firebase.utils";
import { toast } from "react-toastify";
import Loading from "./loading.component";

const SignOut = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const clearCurrentUser = async () => {
    try {
      if (auth.currentUser) {
        setLoading(true);
        await signOutGoogle();
        router.push("/");
        setLoading(false);
        toast.info("Signed out successfully!", {
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
      console.error("error clear current user", error.message);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <a
        onClick={clearCurrentUser}
        className="font-light w-full text-left text-sm md:text-base"
      >
        Sign out
      </a>
    </>
  );
};

export default SignOut;
