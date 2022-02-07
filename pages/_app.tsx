import "../styles/globals.css";
import type { AppProps } from "next/app";
// import withRedux from "next-redux-wrapper";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
      <div className="font-light">
        <Component {...pageProps} />
      </div>
    // </Provider>
  );
}

export default MyApp;
