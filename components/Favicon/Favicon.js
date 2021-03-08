import React from "react";
import Head from "next/head";
import { useMedia } from "react-use";

export default function Favicon() {
  const isDarkMode = useMedia("(prefers-color-scheme: dark)");

  const favicon = !isDarkMode ? "/favicon-light.svg" : "/favicon-dark.svg";

  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href={favicon} />
    </Head>
  );
}
