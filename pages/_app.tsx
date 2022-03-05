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
    <div className="font-light">
      {loading && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full">
          <div className="flex items-center justify-center backdrop-blur-md w-full h-full">
            <Loading />
          </div>
        </div>
      )}
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
