import "@styles/globals.css";
import "@styles/body.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PokeAPI</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;