import "tailwindcss/tailwind.css";
import { Global, css } from "@emotion/react";

import Head from "components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
