import "@styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { bodyStyle } from "@/styles/style.module";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>PokeAPI</title>
    </Head>
    <body style={bodyStyle}>
    <Component {...pageProps} />
    </body>
    </>
  );
}

export default MyApp;