import Link from "next/link";
import { auth, signOutGoogle } from "../firebase/firebase.utils";
// import { toast } from "react-toastify";

const SignOut = () => {
  const clearCurrentUser = async () => {
    try {
      if (auth.currentUser) {
        await signOutGoogle();
      }
    } catch (error: any) {
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

  //   const handleDeleteRecord = async () => {
  //     try {
  //       await deleteUserRecord();
  //       //   toast.success("user record deleted successfully", {
  //       //     position: toast.POSITION.TOP_CENTER,
  //       //     theme: "dark",
  //       //     autoClose: 3000,
  //       //   });
  //     } catch (error) {
  //       //   toast.error("error deleting record: " + error.message, {
  //       //     position: toast.POSITION.TOP_CENTER,
  //       //     theme: "dark",
  //       //   });
  //       console.error("error deleting record", error.message);
  //     }
  //   };

  return (
    <div className="grid grid-rows-5 grid-flow-col gap-4 justify-items-center mt-10">
      <Link href="/">
        <a
          onClick={clearCurrentUser}
          className="text-xs md:text-sm lg:text-base  py-2 px-4 text-red-500 rounded border border-red-500 font-light"
        >
          Sign out
        </a>
      </Link>
      <div />
      <div />
    </div>
  );
};

export default SignOut;
