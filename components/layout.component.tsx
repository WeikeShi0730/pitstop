import { ReactNode } from "react";
import Nav from "./nav.component";
import Head from "next/head";
import Footer from "./footer.component";
import BackToTop from "./back-to-top.component";
import { motion } from "framer-motion";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pitstop-logos/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50">
        <Nav currentUser={null} cartItems={null} />
      </header>
      <motion.div
        initial={{ opacity: 0.5, x: -100, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: -100 }}
        transition={{ type: "linear", duration: 0.25 }}
      >
        {children}
      </motion.div>
      <BackToTop />
      <footer className="relative mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
