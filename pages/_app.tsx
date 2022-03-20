import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Loading from "../components/loading.component";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleStart = () => {
    setLoading(true);
  };
  const handleComplete = () => {
    setLoading(false);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      <div className="font-light">
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "auto" })
          }
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
