import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "components/Head";

// ==================================================
// Fix for smooth scrolling during route changes
// GitHub: https://github.com/vercel/next.js/issues/20125
// ==================================================
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.style.scrollBehavior = "auto";
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  }, []);
}

function MyApp({ Component, pageProps }) {
  useNormalScrollRoutes();

  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
