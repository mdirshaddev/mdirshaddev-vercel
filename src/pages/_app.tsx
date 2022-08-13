import 'styles/globals.css';

// Next
import type { AppProps } from 'next/app';

// utils
// import { register } from "utils/serviceWorker";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
