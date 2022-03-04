import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="font-light">
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() =>
          window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        }
      >
        <Component {...pageProps} key={router.pathname} />
        <ToastContainer />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
