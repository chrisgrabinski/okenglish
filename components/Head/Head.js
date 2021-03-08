import NextHead from "next/head";
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from "next-seo";

import Favicon from "components/Favicon";

import defaultSeoConfig from "config/seo.json";
import defaultSocialProfilesConfig from "config/social-profiles.json";

export default function Head() {
  const { NEXT_PUBLIC_BASE_URL } = process.env;

  return (
    <>
      <DefaultSeo
        {...defaultSeoConfig}
        dangerouslySetAllPagesToNoIndex={true}
        dangerouslySetAllPagesToNoFollow={true}
      />
      <LogoJsonLd
        logo={`${NEXT_PUBLIC_BASE_URL}/icon.png`}
        url={NEXT_PUBLIC_BASE_URL}
      />
      <SocialProfileJsonLd {...defaultSocialProfilesConfig} />
      <Favicon />
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </NextHead>
    </>
  );
}
