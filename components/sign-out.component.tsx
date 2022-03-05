import { useState } from "react";
import NoScrollLink from "./no-scroll-link.component";
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
          hideProgressBar: false,
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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("error clear current user", error.message);
    }
  };
  //   const handleDeleteAccount = async () => {
  //     clearCurrentUser();
  //     try {
  //       await deleteUserAccount();
  //       //   toast.info("deleted 🏁", {
  //       //     position: toast.POSITION.TOP_CENTER,
  //       //     theme: "dark",
  //       //     autoClose: 2000,
  //       //   });
  //     } catch (error) {
  //       //   toast.error("error deleting account: " + error.message, {
  //       //     position: toast.POSITION.TOP_CENTER,
  //       //     theme: "dark",
  //       //   });
  //       console.error("error deleting account", error.message);
  //     }
  //   };

  return (
    <>
      {loading && <Loading />}
      <div className="grid grid-rows-5 grid-flow-col gap-4 justify-items-center mt-10">
        <NoScrollLink href="/">
          <a
            onClick={clearCurrentUser}
            className="text-xs md:text-sm lg:text-base py-2 px-4 text-red-500 rounded border border-red-500 hover:shadow-md hover:shadow-red-600 hover:text-slate-50 hover:bg-red-500 font-light"
          >
            Sign out
          </a>
        </NoScrollLink>
        <div />
        <div />
      </div>
    </>
  );
};

export default SignOut;
