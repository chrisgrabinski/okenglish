import Link from "next/link";

import ButtonLink from "components/ButtonLink";
import Container from "components/Container";
import DefaultLogo from "components/Logo";

import SiteNavigation from "./SiteNavigation";

import { Wrapper } from "./Header.styled";

export default function Header({ logo: Logo }) {
  return (
    <Wrapper className="sticky top-0 z-40 px-3 md:px-6 -mx-3 md:-mx-6 h-16 md:h-20  flex items-center bg-secondary-50 bg-opacity-90">
      <Container>
        <div className="flex items-center">
          <Link href="/" passHref>
            <a>
              <Logo className="h-6 md:h-7" />
            </a>
          </Link>
          <nav className="hidden md:flex flex-grow items-center pl-8">
            <SiteNavigation />
            <div className="ml-auto">
              <ButtonLink href="/">Take the test</ButtonLink>
            </div>
          </nav>
        </div>
      </Container>
    </Wrapper>
  );
}

Header.defaultProps = {
  logo: DefaultLogo,
};
