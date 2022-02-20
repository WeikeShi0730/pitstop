import { ReactNode } from "react";
import Nav from "./nav.component";
import Head from "next/head";
import Footer from "./footer.component";
import BackToTop from "./back-to-top.component";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <div className="flex flex-col min-h-screen justify-between">
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
    <BackToTop />
    {children}
    {/* <footer className="relative mt-auto"> */}
    <footer className="relative mt-auto">
      <Footer />
    </footer>
  </div>
);

export default Layout;
